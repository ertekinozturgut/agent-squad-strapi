import React from 'react';
import { Check, ShieldCheck, Cpu, Users } from 'lucide-react';

export const HowIBuildSection: React.FC = () => {
  const layers = [
    {
      index: '01',
      title: 'ARCHITECTURE',
      lead: 'Build the right foundation.',
      icon: Cpu,
      description:
        'AI without architecture creates technical debt. I establish solid data foundations, API gateways, and orchestration pipelines before running models.',
      items: [
        'Enterprise Architecture & Decoupled APIs',
        'Hybrid Vector Stores & RAG Ingestion',
        'Agentic Tool Contracts (MCP / REST)',
        'Dataverse & Enterprise CRM Foundations',
      ],
      isDifferentiator: false,
      telemetry: 'LATENCY & PROTOCOL SPEC',
    },
    {
      index: '02',
      title: 'DELIVERY',
      lead: 'Turn concepts into production.',
      icon: ShieldCheck,
      description:
        'Moving beyond proof-of-concepts into reliable, low-latency, and hardened software systems that operate under strict enterprise SLAs.',
      items: [
        'Production Engineering (.NET, Python, TypeScript)',
        'Deterministic Validation & Guardrail Middleware',
        'Multi-Tenant Reliability & Failover Logic',
        'Automated CI/CD & Infrastructure as Code',
      ],
      isDifferentiator: false,
      telemetry: '99.98% RELIABILITY SLA',
    },
    {
      index: '03',
      title: 'ADOPTION',
      lead: 'Make technology usable.',
      icon: Users,
      description:
        'The hardest part of AI is not the algorithm — it is organizational trust and daily usage. I bridge executive strategy with hands-on enablement.',
      items: [
        'Responsible AI Governance & Compliance',
        'Human-in-the-Loop Operational Workflows',
        'Business Unit Training & Capability Building',
        'Continuous Kaizen Feedback & Value Realization',
      ],
      isDifferentiator: true,
      telemetry: 'HUMAN TRUST & GOVERNANCE',
    },
  ];

  return (
    <section aria-label="How I Build" className="py-24 sm:py-32 bg-canvas-white bg-tech-grid border-b border-border-light relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-2 py-0.5 bg-signal/15 border border-signal/30 text-ink rounded-[2px]">
            <span className="w-1.5 h-1.5 bg-signal rounded-none animate-pulse" />
            <span className="font-mono text-xs uppercase tracking-widest text-ink font-bold">
              HOW I BUILD
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-ink uppercase leading-[1.05]">
            Three Layers. <br />
            <span className="text-ink-muted">One Working System.</span>
          </h2>
          <p className="text-base sm:text-lg text-ink-muted pt-2 leading-relaxed font-normal">
            Enterprise AI succeeds only when architecture, engineering delivery, and organizational adoption are treated as a single unified discipline.
          </p>
        </div>

        {/* 3 Columns Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {layers.map((layer) => {
            const Icon = layer.icon;
            return (
              <div
                key={layer.index}
                className={`p-8 rounded-[2px] border flex flex-col justify-between transition-all group relative corner-crosshairs ${
                  layer.isDifferentiator
                    ? 'bg-canvas border-dark shadow-md ring-1 ring-dark/10'
                    : 'bg-white border-border-light hover:border-ink/50'
                }`}
              >
                <div className="space-y-6">
                  {/* Monospace Header */}
                  <div className="flex items-center justify-between border-b border-border-light pb-4">
                    <div className="flex items-center gap-2">
                      <Icon className="w-4 h-4 text-ink group-hover:text-signal-contrast transition-colors" />
                      <span className="font-mono text-xs font-bold tracking-widest text-ink">
                        {layer.index} // {layer.title}
                      </span>
                    </div>
                    {layer.isDifferentiator && (
                      <span className="bg-signal text-dark px-2 py-0.5 font-mono text-[9px] font-bold uppercase tracking-wider rounded-[1px] shadow-2xs">
                        DIFFERENTIATOR
                      </span>
                    )}
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-ink tracking-tight">
                      {layer.lead}
                    </h3>
                    <p className="text-xs text-ink-muted mt-2 leading-relaxed">
                      {layer.description}
                    </p>
                  </div>

                  {/* Checklist */}
                  <ul className="space-y-2.5 pt-3 border-t border-border-light/60">
                    {layer.items.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs text-ink">
                        <Check className="w-3.5 h-3.5 text-ink-muted group-hover:text-ink shrink-0 mt-0.5" />
                        <span className="font-mono text-[11px] leading-snug">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 pt-4 border-t border-border-light/60 flex items-center justify-between font-mono text-[10px] text-ink-faint">
                  <span>STAGE 0{layer.index}</span>
                  <span className="font-semibold text-ink-muted">{layer.telemetry}</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
