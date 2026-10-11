'use client';

import React, { useState, useRef, useEffect } from 'react';
import {
  Send,
  RotateCcw,
  Sparkles,
  Bot,
  ShieldAlert,
  Loader2,
  ChevronDown,
} from 'lucide-react';

interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  guardrailTriggered?: boolean;
  timestamp: string;
}

const INITIAL_GREETING: ChatMessage = {
  id: 'greeting',
  role: 'assistant',
  content:
    'Merhaba! Ben Ertekin Özturgut’un resmi yapay zeka asistanıyım. Toyota Türkiye’deki üretim seviyesi yapay zeka projeleri, Kaizen ödülleri, Model Context Protocol (MCP) mimarisi ve teknik yayınları hakkında sorularınızı yanıtlayabilirim.',
  timestamp: 'Şimdi',
};

const SUGGESTED_PROMPTS = [
  'Toyota’daki ilk üretim yapay zeka sistemi nedir?',
  'Kaizen maratonundaki ödüllü projeleri nelerdir?',
  'Model Context Protocol (MCP) ve Agentic AI uzmanlığı',
  'Kurumsal danışmanlık veya eğitim için nasıl ulaşabilirim?',
];

export const FloatingChatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([INITIAL_GREETING]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
      inputRef.current?.focus();
    }
  }, [isOpen, messages, isLoading]);

  const handleSend = async (textToSend?: string) => {
    const text = (textToSend || inputValue).trim();
    if (!text || isLoading) return;

    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      content: text,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    const newMessages = [...messages, userMessage];
    setMessages(newMessages);
    setInputValue('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          messages: newMessages.map((m) => ({
            role: m.role,
            content: m.content,
          })),
        }),
      });

      const data = await response.json();

      const assistantMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content:
          data.reply ||
          'Üzgünüm, şu anda yanıt oluşturulamadı. Lütfen doğrudan ertekinozturgut@gmail.com ile iletişime geçiniz.',
        guardrailTriggered: data.guardrailTriggered,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };

      setMessages((prev) => [...prev, assistantMessage]);
    } catch {
      const errorMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content:
          'Bağlantı hatası oluştu. Lütfen internet bağlantınızı kontrol edip tekrar deneyiniz.',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleReset = () => {
    setMessages([INITIAL_GREETING]);
    setInputValue('');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 font-sans">
      {/* 1. Floating Toggle Button */}
      {!isOpen && (
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className="group flex items-center gap-3 px-4 py-3 bg-[#0C0D0E] text-white border border-signal/40 hover:border-signal rounded-[2px] shadow-xl hover:shadow-2xl transition-all corner-crosshairs cursor-pointer"
          aria-label="AI Asistanı Aç"
        >
          <div className="relative flex items-center justify-center">
            <Bot className="w-5 h-5 text-signal group-hover:scale-110 transition-transform" />
            <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          </div>
          <div className="flex flex-col items-start text-left">
            <span className="font-mono text-[11px] font-bold tracking-widest text-signal uppercase flex items-center gap-1">
              AI ASİSTAN <Sparkles className="w-2.5 h-2.5" />
            </span>
            <span className="text-[10px] text-neutral-400 font-mono">Nemotron Ultra · Dinamik CV</span>
          </div>
        </button>
      )}

      {/* 2. Expandable Chat Window */}
      {isOpen && (
        <div className="w-[92vw] sm:w-[410px] h-[580px] max-h-[85vh] bg-[#0C0D0E] text-white border border-white/20 rounded-[2px] shadow-2xl flex flex-col overflow-hidden corner-crosshairs">
          {/* Header */}
          <div className="p-3.5 bg-[#141618] border-b border-white/10 flex items-center justify-between shrink-0">
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-[2px] bg-white/10 border border-signal/40 flex items-center justify-center">
                <Bot className="w-4 h-4 text-signal" />
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <h4 className="text-xs font-bold font-mono text-white tracking-wider uppercase">
                    ERTEKİN ÖZTURGUT
                  </h4>
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                </div>
                <span className="text-[10px] text-neutral-400 font-mono block">
                  AI Knowledge Agent · Guardrail Korumalı
                </span>
              </div>
            </div>

            <div className="flex items-center gap-1 text-neutral-400">
              <button
                type="button"
                onClick={handleReset}
                title="Sohbeti Sıfırla"
                className="p-1.5 hover:text-white hover:bg-white/10 rounded-[2px] transition-colors"
              >
                <RotateCcw className="w-3.5 h-3.5" />
              </button>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                title="Kapat"
                className="p-1.5 hover:text-white hover:bg-white/10 rounded-[2px] transition-colors"
              >
                <ChevronDown className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Messages Body */}
          <div className="flex-1 p-4 overflow-y-auto space-y-4 text-xs font-sans scrollbar-thin">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex flex-col ${
                  msg.role === 'user' ? 'items-end' : 'items-start'
                }`}
              >
                {/* Role and time tag */}
                <div className="flex items-center gap-1.5 mb-1 text-[10px] font-mono text-neutral-500">
                  <span>{msg.role === 'user' ? 'Siz' : 'Ertekin AI'}</span>
                  <span>•</span>
                  <span>{msg.timestamp}</span>
                </div>

                {/* Bubble */}
                <div
                  className={`p-3 rounded-[2px] max-w-[90%] leading-relaxed ${
                    msg.role === 'user'
                      ? 'bg-white/15 text-white border border-white/20'
                      : 'bg-[#141618] text-neutral-200 border border-white/10'
                  }`}
                >
                  {msg.guardrailTriggered && (
                    <div className="flex items-center gap-1 text-[10px] font-mono text-amber-400 pb-1 mb-1 border-b border-amber-400/30">
                      <ShieldAlert className="w-3 h-3 text-amber-400" />
                      <span>GÜVENLİK PROTOKOLÜ AKTİF</span>
                    </div>
                  )}
                  <p className="whitespace-pre-wrap">{msg.content}</p>
                </div>
              </div>
            ))}

            {/* Loading Indicator */}
            {isLoading && (
              <div className="flex items-center gap-2 text-neutral-400 font-mono text-xs p-2 bg-[#141618] rounded-[2px] border border-white/10 max-w-[200px]">
                <Loader2 className="w-3.5 h-3.5 animate-spin text-signal" />
                <span>Yanıt taranıyor...</span>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Suggested Quick Prompts */}
          {messages.length <= 2 && !isLoading && (
            <div className="px-3 pb-2 pt-1 border-t border-white/5 shrink-0">
              <span className="text-[10px] font-mono text-neutral-500 block mb-1.5 uppercase">
                Örnek Sorular:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {SUGGESTED_PROMPTS.map((prompt) => (
                  <button
                    key={prompt}
                    type="button"
                    onClick={() => handleSend(prompt)}
                    className="text-[10px] font-mono text-neutral-300 bg-white/5 border border-white/10 hover:border-signal hover:text-white px-2 py-1 rounded-[1px] text-left transition-colors"
                  >
                    {prompt}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Footer Input */}
          <div className="p-3 bg-[#141618] border-t border-white/10 shrink-0">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSend();
              }}
              className="flex items-center gap-2"
            >
              <input
                ref={inputRef}
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Ertekin'in sistemleri veya CV'si hakkında sorun..."
                maxLength={1000}
                disabled={isLoading}
                className="flex-1 bg-[#0C0D0E] border border-white/20 focus:border-signal text-white placeholder-neutral-500 text-xs px-3 py-2 rounded-[2px] outline-none font-mono transition-colors"
              />
              <button
                type="submit"
                disabled={isLoading || !inputValue.trim()}
                className="px-3 py-2 bg-signal text-dark hover:bg-lime-400 disabled:opacity-40 disabled:hover:bg-signal font-bold rounded-[2px] transition-colors cursor-pointer"
                aria-label="Gönder"
              >
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>
            <div className="flex items-center justify-between text-[9px] font-mono text-neutral-500 mt-1.5">
              <span>OpenRouter Nemotron Ultra · Ground-truth</span>
              <span>{inputValue.length}/1000</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
