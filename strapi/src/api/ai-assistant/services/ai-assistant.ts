/**
 * Strapi v5 AI Assistant Service (Document Service API)
 * Manages Chatbot configuration, guardrail parameters, and knowledge cache.
 */

export interface StrapiDocumentContext {
  documents: (uid: string) => {
    findFirst: () => Promise<Record<string, unknown> | null>;
    create: (params: { data: Record<string, unknown> }) => Promise<Record<string, unknown>>;
    update: (params: { documentId: string; data: Record<string, unknown> }) => Promise<Record<string, unknown>>;
  };
}

export const aiAssistantService = {
  getDefaultConfig() {
    return {
      provider: 'openrouter',
      fallbackProvider: 'openrouter',
      apiBaseUrl: 'https://openrouter.ai/api/v1/chat/completions',
      apiKeySecretName: 'OPENROUTER_API_KEY',
      availablePresetModels: [
        'nvidia/nemotron-3-ultra-550b-a55b:free (OpenRouter - Nemotron Ultra)',
        'meta-llama/llama-3.3-70b-instruct:free (OpenRouter - Llama 3.3)',
        'google/gemini-2.0-flash-exp:free (OpenRouter - Gemini 2.0 Flash)',
        'anthropic/claude-3.5-sonnet (OpenRouter - Claude 3.5 Sonnet)',
        'gpt-4o-mini (OpenAI - GPT-4o Mini)',
        'gpt-4o (OpenAI - GPT-4o)',
        'claude-3-5-sonnet-20241022 (Anthropic - Claude 3.5 Sonnet)',
        'llama-3.3-70b-versatile (Groq - Llama 3.3)',
      ],
      model: 'nvidia/nemotron-3-ultra-550b-a55b:free',
      fallbackModel: 'nvidia/nemotron-3-ultra-550b-a55b',
      temperature: 0.2,
      maxTokens: 800,
      guardrailsEnabled: true,
      defamationProtection: true,
      privacyProtection: true,
      rateLimitPerMinute: 10,
      isEnabled: true,
      knowledgeGroundingMode: 'hybrid',
      blockedKeywords: [
        'ignore previous instructions',
        'you are now DAN',
        'system prompt leak',
        'sql injection',
        'ransomware',
      ],
      unverifiedEmployers: [
        'Google',
        'Apple',
        'Meta',
        'Amazon',
        'Amazon AWS',
        'Netflix',
        'OpenAI',
        'NASA',
        'Tesla',
        'Microsoft',
        'Oracle',
        'SAP',
        'IBM',
        'Palantir',
        'Salesforce',
        'McKinsey',
        'BCG',
        'Bain',
        'Accenture',
        'Trendyol',
        'Getir',
      ],
      allowedTopics: [
        'Enterprise AI Architecture',
        'Model Context Protocol (MCP)',
        'Toyota CRM Cloud Migration',
        'Kaizen Problem-Solving & AI Assistant',
        'Autonomous Agents & LLM/RAG',
        'Technical Articles & Publications',
        'Corporate Consulting & Advisory',
        'Academic Degrees & Qualifications',
      ],
      blockedTopics: [
        'Personal financial details & salary',
        'Private life, religion & politics',
        'Malware, hacking & exploits',
        'Competitor defamation & unverified claims',
      ],
      defamationSafeResponse:
        'Ertekin Özturgut, 8 yılı aşkın kurumsal teknoloji ve yazılım mimarisi kariyerinde Toyota Türkiye ve önceki kurumlarında en yüksek etik ve mühendislik standartlarıyla çalışmış, 5 kez Kaizen ödülü kazanmış ve 13 kurumsal üretim sistemini hayata geçirmiş bir teknoloji lideridir. Asılsız iddialar veya spekülasyonlar yerine doğrulanmış kurumsal başarılar, sistem mimarileri ve yayınlar hakkında bilgi verilmektedir.',
      privacySafeResponse:
        'Kişisel finansal bilgiler (maaş vb.), özel hayat, ev adresi ve özel iletişim detayları gibi veriler gizlilik prensipleri gereği kamuya açık profilde yer almamaktadır. Profesyonel danışmanlık, kurumsal iş birlikleri ve teklifler için ertekinozturgut@gmail.com veya LinkedIn üzerinden doğrudan iletişime geçebilirsiniz.',
      generalRefusalMessage:
        'Bu soru Ertekin Özturgut’un profesyonel teknoloji liderliği, yapay zeka mimarisi, kurumsal sistemleri ve yayınları kapsamı dışındadır. Bu konularda yardımcı olmaktan memnuniyet duyarım.',
      additionalContextPrompt:
        'Ertekin Özturgut teknoloji ve mimari felsefesinde pragmatizmi ve ölçülebilir iş değerini savunur. Gösterişli yapay zeka demoları yerine deterministik sistemlerle hibrit çalışan dayanıklı kurumsal mimarilere odaklanır.',
    };
  },

  async getConfig(strapi: StrapiDocumentContext) {
    try {
      const config = await strapi
        .documents('api::ai-assistant.ai-assistant')
        .findFirst();
      return config ? { ...this.getDefaultConfig(), ...config } : this.getDefaultConfig();
    } catch {
      return this.getDefaultConfig();
    }
  },

  async updateConfig(strapi: StrapiDocumentContext, data: Record<string, unknown>) {
    const existing = await strapi
      .documents('api::ai-assistant.ai-assistant')
      .findFirst();
    if (existing && (existing as Record<string, unknown>).documentId) {
      return await strapi
        .documents('api::ai-assistant.ai-assistant')
        .update({
          documentId: (existing as Record<string, unknown>).documentId as string,
          data,
        });
    }
    return await strapi
      .documents('api::ai-assistant.ai-assistant')
      .create({
        data,
      });
  },
};

export default ({ strapi }: { strapi: StrapiDocumentContext }) => ({
  getConfig: () => aiAssistantService.getConfig(strapi),
  updateConfig: (data: Record<string, unknown>) => aiAssistantService.updateConfig(strapi, data),
});
