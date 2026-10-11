import React from 'react';

export const LeadershipSection: React.FC = () => {
  const pillars = [
    {
      index: '01',
      title: 'STRATEGY',
      focus: 'AI Roadmap & Prioritization',
      description:
        'Identifying high-ROI enterprise use-cases, aligning executive ambition with technical feasibility, and prioritizing production value over exploratory hype.',
    },
    {
      index: '02',
      title: 'GOVERNANCE',
      focus: 'Responsible Standards & Safety',
      description:
        'Establishing deterministic guardrails, zero-trust data boundaries, model evaluation benchmarks, and compliance policies for enterprise-wide deployment.',
    },
    {
      index: '03',
      title: 'DELIVERY',
      focus: 'Cross-Functional Leadership',
      description:
        'Directing dedicated engineering squads (software, data, CRM, AI), setting clean architectural standards, and driving high-velocity sprint execution.',
    },
    {
      index: '04',
      title: 'ENABLEMENT',
      focus: 'Training & Capability Building',
      description:
        'Demystifying AI for operational business units, conducting hands-on enablement workshops, and embedding continuous Kaizen improvement into daily workflows.',
    },
  ];

  return (
    <section aria-label="Leadership Pillars" className="py-24 sm:py-32 bg-canvas-white border-b border-border-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="inline-flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-signal rounded-none" />
            <span className="font-mono text-xs uppercase tracking-widest text-ink-muted">
              LEADERSHIP & TRANSFORMATION
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-ink uppercase leading-[1.05]">
            Building AI Systems <br />
            <span className="text-ink-muted">Is Only Half The Challenge.</span>
          </h2>

          <p className="text-base sm:text-lg text-ink-muted font-normal leading-relaxed pt-1">
            Enterprise AI succeeds when architecture, governance, people and business processes evolve together.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((p) => (
            <div
              key={p.index}
              className="p-6 sm:p-8 bg-white border border-border-light rounded-[2px] flex flex-col justify-between hover:border-ink transition-all shadow-2xs"
            >
              <div className="space-y-4">
                <span className="font-mono text-xs font-bold text-signal-contrast bg-signal/25 px-2 py-0.5 rounded-[1px] inline-block">
                  PILLAR {p.index}
                </span>

                <div>
                  <h3 className="font-mono text-sm font-bold uppercase tracking-wider text-ink">
                    {p.title}
                  </h3>
                  <p className="font-mono text-[11px] text-ink-faint mt-0.5">
                    {p.focus}
                  </p>
                </div>

                <p className="text-xs text-ink-muted leading-relaxed pt-2 border-t border-border-light/60">
                  {p.description}
                </p>
              </div>

              <div className="mt-8 pt-3 border-t border-border-light/60 font-mono text-[10px] text-ink-faint">
                ORGANISATIONAL IMPACT
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
