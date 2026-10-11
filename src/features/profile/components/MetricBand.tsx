import React from 'react';

export const MetricBand: React.FC = () => {
  const metrics = [
    {
      telemetryId: 'METRIC_01',
      value: '8+',
      unit: 'YEARS',
      label: 'ENTERPRISE TECHNOLOGY',
      subtext: 'Software & CRM Architecture',
      percentage: '92%',
      status: 'VERIFIED ARCHITECTURE',
    },
    {
      telemetryId: 'METRIC_02',
      value: 'FIRST',
      unit: '',
      label: 'PRODUCTION AI SYSTEM',
      subtext: 'Deployed in Toyota Türkiye',
      percentage: '100%',
      status: 'PIONEER DEPLOYMENT',
    },
    {
      telemetryId: 'METRIC_03',
      value: '200+',
      unit: '',
      label: 'PROJECTS ANALYSED',
      subtext: 'Multimodal Kaizen Intelligence',
      percentage: '88%',
      status: 'GLOBAL SCALE',
    },
    {
      telemetryId: 'METRIC_04',
      value: '6',
      unit: 'MEMBERS',
      label: 'CORE TEAM LEADERSHIP',
      subtext: 'AI & Solutions Squad',
      percentage: '95%',
      status: 'ACTIVE SQUAD',
    },
  ];

  return (
    <section aria-label="Impact Metrics Proof Band" className="border-b border-border-light bg-canvas-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-border-light">
          {metrics.map((m, idx) => (
            <div
              key={idx}
              className="py-10 px-6 sm:px-8 flex flex-col justify-between hover:bg-canvas/50 transition-colors group relative"
            >
              {/* Telemetry Header */}
              <div className="flex items-center justify-between font-mono text-[9px] text-ink-faint uppercase tracking-widest mb-4">
                <span>// {m.telemetryId}</span>
                <span className="inline-flex items-center gap-1 font-semibold text-ink group-hover:text-signal-contrast transition-colors">
                  <span className="w-1.5 h-1.5 rounded-full bg-signal" />
                  {m.status}
                </span>
              </div>

              {/* Big Display Metric */}
              <div className="flex items-baseline gap-2">
                <span className="font-mono text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-ink group-hover:translate-x-0.5 transition-transform">
                  {m.value}
                </span>
                {m.unit && (
                  <span className="font-mono text-sm font-semibold text-ink-muted">
                    {m.unit}
                  </span>
                )}
              </div>

              {/* Scale AI Telemetry Progress Indicator Bar */}
              <div className="w-full bg-border-light h-1 mt-4 rounded-none overflow-hidden">
                <div 
                  className="bg-dark group-hover:bg-signal h-full transition-all duration-500 ease-out"
                  style={{ width: m.percentage }}
                />
              </div>

              {/* Label & Description */}
              <div className="mt-4">
                <p className="font-mono text-xs uppercase tracking-widest text-ink font-semibold">
                  {m.label}
                </p>
                <p className="text-xs text-ink-muted mt-1 leading-relaxed">
                  {m.subtext}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
