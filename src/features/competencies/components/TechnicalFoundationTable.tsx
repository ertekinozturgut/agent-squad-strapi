import React from 'react';

export const TechnicalFoundationTable: React.FC = () => {
  const columns = [
    {
      category: 'AI SYSTEMS',
      technologies: [
        'Large Language Models (LLM)',
        'Retrieval-Augmented Generation (RAG)',
        'Autonomous AI Agents',
        'Model Context Protocol (MCP)',
        'Vector Databases & Embeddings',
        'Small Language Models (SLM)',
      ],
    },
    {
      category: 'ENTERPRISE',
      technologies: [
        'Microsoft Dynamics 365',
        'Microsoft Dataverse',
        'CRM Architecture',
        'Legacy Modernization',
        'Enterprise API Gateways',
        'Service Bus & Integrations',
      ],
    },
    {
      category: 'ENGINEERING',
      technologies: [
        '.NET / C# Architecture',
        'Python & Fast Inference',
        'TypeScript / Next.js',
        'SQL & Distributed Data',
        'REST / SOAP Protocols',
        'Clean Architecture & DDD',
      ],
    },
    {
      category: 'AUTOMATION',
      technologies: [
        'n8n Orchestration',
        'Power Automate',
        'Microsoft Copilot Studio',
        'Event-Driven Workflows',
        'Azure AI Services',
        'Process Intelligence',
      ],
    },
  ];

  return (
    <section aria-label="Technical Foundation" className="py-24 sm:py-32 bg-canvas-white border-b border-border-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-3">
          <div className="inline-flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-signal rounded-none" />
            <span className="font-mono text-xs uppercase tracking-widest text-ink-muted">
              SYSTEM CAPABILITIES
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-ink uppercase leading-[1.05]">
            Technical Foundation
          </h2>
          <p className="text-base text-ink-muted font-normal leading-relaxed pt-1">
            Technology is never the goal; it is the infrastructural substrate that makes resilient enterprise systems possible.
          </p>
        </div>

        {/* 4-Column Clean Table (No logo cloud) */}
        <div className="border border-border-light bg-white rounded-[2px] overflow-hidden shadow-2xs">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-border-light">
            {columns.map((col) => (
              <div key={col.category} className="p-6 sm:p-8 flex flex-col">
                <div className="border-b border-border-light pb-3 mb-5">
                  <h3 className="font-mono text-xs font-bold uppercase tracking-widest text-ink">
                    {col.category}
                  </h3>
                </div>

                <ul className="space-y-3 font-mono text-xs text-ink-muted">
                  {col.technologies.map((tech) => (
                    <li key={tech} className="flex items-center gap-2 hover:text-ink transition-colors">
                      <span className="w-1 h-1 bg-signal rounded-none shrink-0" />
                      <span className="leading-snug">{tech}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="bg-canvas border-t border-border-light p-4 text-center font-mono text-[11px] text-ink-faint">
            ARCHITECTURAL PRINCIPLE: PRODUCTION RELIABILITY · ZERO-TRUST SECURITY · GOVERNED APIS
          </div>
        </div>

      </div>
    </section>
  );
};
