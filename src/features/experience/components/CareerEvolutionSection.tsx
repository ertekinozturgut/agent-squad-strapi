import React from 'react';
import { ArrowRight } from 'lucide-react';

export const CareerEvolutionSection: React.FC = () => {
  const milestones = [
    {
      year: '2017',
      stage: 'SOFTWARE ENGINEERING',
      summary: 'Backend architecture, algorithms, .NET & SQL foundations.',
    },
    {
      year: '2019',
      stage: 'FULL-STACK & CRM',
      summary: 'Enterprise platform delivery, Dynamics CRM, business data flows.',
    },
    {
      year: '2021',
      stage: 'ENTERPRISE INTEGRATION',
      summary: 'Microservices, REST/SOAP APIs, ESB middleware & system consolidation.',
    },
    {
      year: '2024',
      stage: 'ARCHITECTURE & TRANSFORMATION',
      summary: 'Platform architecture leadership, Kaizen process re-engineering.',
    },
    {
      year: '2025',
      stage: 'PRODUCTION AI',
      summary: 'Toyota Türkiye’s first live production AI assistant & multimodal systems.',
    },
    {
      year: '2026',
      stage: 'AGENTIC AI & TRANSFORMATION',
      summary: 'Autonomous agents, MCP protocols, enterprise governance & adoption.',
    },
  ];

  return (
    <section aria-label="Career Evolution" className="py-24 sm:py-32 bg-canvas border-b border-border-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="inline-flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-signal rounded-none" />
            <span className="font-mono text-xs uppercase tracking-widest text-ink-muted">
              THE FOUNDATION
            </span>
          </div>
          
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-ink uppercase leading-[1.02]">
            Before AI, <br />
            I Built The Systems <br />
            <span className="text-ink-muted">AI Depends On.</span>
          </h2>

          <p className="font-mono text-xs text-ink-muted uppercase tracking-wider pt-2">
            Software Engineering → Enterprise Platforms → Architecture → Production AI → AI Transformation
          </p>
        </div>

        {/* 6-Phase Evolution Flow */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {milestones.map((m, idx) => (
            <div
              key={m.year}
              className={`p-6 sm:p-8 rounded-[2px] border transition-all flex flex-col justify-between ${
                idx >= 4
                  ? 'bg-canvas-white border-dark/80 shadow-xs'
                  : 'bg-white border-border-light'
              }`}
            >
              <div>
                <div className="flex items-center justify-between border-b border-border-light pb-3 mb-4 font-mono">
                  <span className="text-lg font-bold text-ink">{m.year}</span>
                  <span className="text-[10px] text-ink-faint uppercase">
                    PHASE 0{idx + 1}
                  </span>
                </div>

                <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-ink mb-2">
                  {m.stage}
                </h3>

                <p className="text-xs text-ink-muted leading-relaxed">
                  {m.summary}
                </p>
              </div>

              <div className="mt-6 pt-3 border-t border-border-light/60 flex items-center justify-between font-mono text-[10px] text-ink-faint">
                <span>PROGRESSION</span>
                {idx < milestones.length - 1 ? (
                  <ArrowRight className="w-3.5 h-3.5 text-ink-muted" />
                ) : (
                  <span className="bg-signal text-dark px-1.5 font-bold uppercase rounded-[1px]">
                    CURRENT
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
