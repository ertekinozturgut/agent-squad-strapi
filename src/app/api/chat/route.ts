import { NextRequest, NextResponse } from 'next/server';
import {
  validateUserInput,
  buildGroundedSystemPrompt,
  validateModelOutput,
} from '../../../lib/guardrails/guardrails';
import { generateDynamicKnowledgeContext } from '../../../lib/knowledge/knowledgeGrounding';
import { contentRepository } from '../../../services/contentRepository';

interface ChatMessage {
  role: 'user' | 'assistant' | 'system';
  content: string;
}

// In-memory sliding-window rate limiter per client IP
const rateLimitStore = new Map<string, number[]>();

function checkRateLimit(ip: string, limitPerMinute: number): { limited: boolean; retryAfter: number } {
  const now = Date.now();
  const windowMs = 60 * 1000;
  const timestamps = rateLimitStore.get(ip) || [];

  const recent = timestamps.filter((t) => now - t < windowMs);

  if (recent.length >= limitPerMinute) {
    const oldest = recent[0];
    const retryAfter = Math.ceil((oldest + windowMs - now) / 1000);
    return { limited: true, retryAfter: Math.max(retryAfter, 1) };
  }

  recent.push(now);
  rateLimitStore.set(ip, recent);
  return { limited: false, retryAfter: 0 };
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const messages: ChatMessage[] = body.messages || [];

    if (!Array.isArray(messages) || messages.length === 0) {
      return NextResponse.json(
        { error: 'Messages array is required and cannot be empty' },
        { status: 400 }
      );
    }

    // Identify last user message
    const lastUserMessage = [...messages].reverse().find((m) => m.role === 'user');
    if (!lastUserMessage || !lastUserMessage.content) {
      return NextResponse.json(
        { error: 'A valid user message is required' },
        { status: 400 }
      );
    }

    // 0. FETCH ACTIVE AI ASSISTANT & GUARDRAIL CONFIG FROM STRAPI
    const aiConfig = await contentRepository.getAiAssistantConfig();

    // Enforce Rate Limiting per Client IP (OWASP API4:2023 Unrestricted Resource Consumption)
    const clientIp =
      req.headers.get('x-forwarded-for')?.split(',')[0].trim() ||
      req.headers.get('x-real-ip') ||
      '127.0.0.1';
    const limitPerMin = typeof aiConfig?.rateLimitPerMinute === 'number' ? aiConfig.rateLimitPerMinute : 10;
    const rateCheck = checkRateLimit(clientIp, limitPerMin);
    if (rateCheck.limited) {
      return NextResponse.json(
        {
          reply:
            'Çok fazla istek gönderdiniz. Güvenlik protokolleri gereği lütfen bir süre bekledikten sonra tekrar deneyiniz.',
          guardrailTriggered: true,
          reason: 'Rate limit exceeded',
        },
        {
          status: 429,
          headers: {
            'Retry-After': String(rateCheck.retryAfter),
          },
        }
      );
    }

    if (aiConfig && aiConfig.isEnabled === false) {
      return NextResponse.json({
        reply:
          'AI Asistan servisi şu anda yönetim paneli tarafından geçici olarak devre dışı bırakılmıştır. Lütfen daha sonra tekrar deneyiniz.',
        guardrailTriggered: false,
      });
    }

    // 1. TIER 1 GUARDRAIL CHECK (WITH STRAPI DYNAMIC CONFIG)
    const inputValidation = validateUserInput(lastUserMessage.content, aiConfig);
    if (!inputValidation.isAllowed) {
      return NextResponse.json({
        reply: inputValidation.safeResponse,
        guardrailTriggered: true,
        reason: inputValidation.reason,
      });
    }

    // 2. GENERATE DYNAMIC KNOWLEDGE CONTEXT (INCLUDING STRAPI KNOWLEDGE BASE)
    const knowledgeContext = await generateDynamicKnowledgeContext();
    const systemPrompt = buildGroundedSystemPrompt(knowledgeContext, aiConfig);

    // 3. ASSEMBLE MESSAGES FOR LLM INFERENCE
    // Include system prompt and keep last 6 turns to avoid context overflow
    const recentHistory = messages.slice(-6).map((m) => ({
      role: m.role,
      content: m.content,
    }));

    const finalMessages = [
      { role: 'system', content: systemPrompt },
      ...recentHistory,
    ];

    // 4. MULTI-PROVIDER LLM DISPATCHER (CONFIGURED DYNAMICALLY VIA STRAPI CMS)
    const primaryProvider = aiConfig?.provider || 'openrouter';
    const fallbackProvider = aiConfig?.fallbackProvider || primaryProvider;
    const primaryModel =
      aiConfig?.model ||
      process.env.OPENROUTER_MODEL ||
      'nvidia/nemotron-3-ultra-550b-a55b:free';
    const fallbackModel =
      aiConfig?.fallbackModel ||
      process.env.OPENROUTER_FALLBACK_MODEL ||
      'nvidia/nemotron-3-ultra-550b-a55b';
    const maxTokens = aiConfig?.maxTokens || 800;
    const temperature = typeof aiConfig?.temperature === 'number' ? aiConfig.temperature : 0.2;

    const resolveApiKey = (provider: string): string => {
      if (aiConfig?.apiKeySecretName && process.env[aiConfig.apiKeySecretName]) {
        return process.env[aiConfig.apiKeySecretName] as string;
      }
      switch (provider) {
        case 'openai':
          return process.env.OPENAI_API_KEY || '';
        case 'anthropic':
          return process.env.ANTHROPIC_API_KEY || '';
        case 'groq':
          return process.env.GROQ_API_KEY || '';
        case 'openrouter':
        default:
          return process.env.OPENROUTER_API_KEY || '';
      }
    };

    const callProvider = async (provider: string, modelName: string) => {
      const key = resolveApiKey(provider);
      let url = aiConfig?.apiBaseUrl;
      const headers: Record<string, string> = {
        'Content-Type': 'application/json',
      };
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      let bodyData: any = {};

      if (provider === 'anthropic') {
        url = url || 'https://api.anthropic.com/v1/messages';
        headers['x-api-key'] = key;
        headers['anthropic-version'] = '2023-06-01';
        bodyData = {
          model: modelName,
          system: systemPrompt,
          messages: recentHistory,
          max_tokens: maxTokens,
          temperature,
        };
      } else if (provider === 'openai') {
        url = url || 'https://api.openai.com/v1/chat/completions';
        if (key) headers['Authorization'] = `Bearer ${key}`;
        bodyData = {
          model: modelName,
          messages: finalMessages,
          max_tokens: maxTokens,
          temperature,
        };
      } else if (provider === 'groq') {
        url = url || 'https://api.groq.com/openai/v1/chat/completions';
        if (key) headers['Authorization'] = `Bearer ${key}`;
        bodyData = {
          model: modelName,
          messages: finalMessages,
          max_tokens: maxTokens,
          temperature,
        };
      } else if (provider === 'ollama' || provider === 'custom') {
        url = url || 'http://localhost:11434/v1/chat/completions';
        if (key) headers['Authorization'] = `Bearer ${key}`;
        bodyData = {
          model: modelName,
          messages: finalMessages,
          max_tokens: maxTokens,
          temperature,
        };
      } else {
        // OpenRouter (default)
        url = url || 'https://openrouter.ai/api/v1/chat/completions';
        headers['Authorization'] = `Bearer ${key}`;
        headers['HTTP-Referer'] = 'https://ertekinozturgut.com';
        headers['X-Title'] = 'Ertekin Özturgut Portfolio AI Assistant';
        bodyData = {
          model: modelName,
          messages: finalMessages,
          max_tokens: maxTokens,
          temperature,
        };
      }

      return fetch(url, {
        method: 'POST',
        headers,
        body: JSON.stringify(bodyData),
        signal: AbortSignal.timeout(25000),
      });
    };

    // Try primary provider & model first, fallback on error/timeout
    let response: Response | null = null;
    try {
      response = await callProvider(primaryProvider, primaryModel);
      if (!response.ok && (response.status === 429 || response.status === 404 || response.status >= 500)) {
        console.warn(`Primary provider/model (${primaryProvider}/${primaryModel}) failed with status ${response.status}, attempting fallback (${fallbackProvider}/${fallbackModel})`);
        response = await callProvider(fallbackProvider, fallbackModel);
      }
    } catch (err) {
      console.warn(`Primary provider call (${primaryProvider}/${primaryModel}) encountered network error (${err}), attempting fallback (${fallbackProvider}/${fallbackModel})`);
      try {
        response = await callProvider(fallbackProvider, fallbackModel);
      } catch (fallbackErr) {
        console.error('Fallback model call also failed:', fallbackErr);
      }
    }

    if (!response || !response.ok) {
      const errText = response ? await response.text() : 'No response / network timeout';
      console.error('LLM API error:', response?.status, errText);
      return NextResponse.json({
        reply:
          'Şu anda yapay zeka servisine erişimde geçici bir yoğunluk yaşanıyor. Lütfen sorunuzu doğrudan ertekinozturgut@gmail.com adresine iletiniz veya biraz sonra tekrar deneyiniz.',
        guardrailTriggered: false,
      });
    }

    const json = await response.json();
    let rawReply = '';
    // Handle Anthropic vs OpenAI/OpenRouter response format
    if (json.content && Array.isArray(json.content) && json.content[0]?.text) {
      rawReply = json.content[0].text;
    } else {
      const choice = json.choices?.[0];
      if (choice?.message?.content) {
        rawReply = choice.message.content;
      } else if (choice?.message?.reasoning) {
        rawReply = choice.message.reasoning;
      } else {
        rawReply =
          'Ertekin Özturgut’un sistem mimarileri ve projeleri hakkında bilgi vermekten memnuniyet duyarım. Lütfen sorunuzu detaylandırınız.';
      }
    }

    // 5. TIER 3 GUARDRAIL CHECK ON OUTPUT (WITH STRAPI DYNAMIC CONFIG)
    const outputValidation = validateModelOutput(rawReply, aiConfig);

    return NextResponse.json({
      reply: outputValidation.sanitizedOutput,
      guardrailTriggered: !outputValidation.isAllowed,
      reason: outputValidation.triggeredFilter,
    });
  } catch (error) {
    console.error('Chatbot API route exception:', error);
    return NextResponse.json(
      {
        reply:
          'İsteğiniz işlenirken bir hata oluştu. Lütfen bağlantınızı kontrol edip tekrar deneyiniz.',
      },
      { status: 500 }
    );
  }
}
