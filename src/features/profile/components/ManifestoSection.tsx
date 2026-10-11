import React from 'react';
import { GraduationCap, Award } from 'lucide-react';

export const ManifestoSection: React.FC = () => {
  const educationItems = [
    {
      num: '01',
      institution: 'Ankara University',
      degree: "Master's Degree",
      field: 'Informatics',
      period: 'Sep 2024 – Jun 2026',
      description:
        'Graduate studies focusing on advanced informatics, distributed data architectures, systems modeling, and algorithmic computation.',
      telemetry: 'POSTGRADUATE · IN PROGRESS',
      gpa: null,
    },
    {
      num: '02',
      institution: 'Istanbul Kultur University',
      degree: "Bachelor's Degree",
      field: 'Industrial Engineering',
      period: '2018 – 2023',
      description:
        'Operations research, mathematical optimization, statistical modeling, systems engineering, and workflow architecture.',
      telemetry: 'UNDERGRADUATE · SYSTEMS ENG',
      gpa: '2.92 / 4.00',
    },
    {
      num: '03',
      institution: 'Marmara University',
      degree: 'Associate Degree',
      field: 'Computer Programming',
      period: '2016 – 2018',
      description:
        'Core software engineering fundamentals, object-oriented programming, data structures, and relational database systems.',
      telemetry: 'HONOR STUDENT · CS FOUNDATION',
      gpa: '3.33 / 4.00',
    },
    {
      num: '04',
      institution: 'Professional Credentials',
      degree: 'Executive & Technical',
      field: 'Agile, CRM & Leadership',
      period: 'Continuous',
      description:
        'Certified in Agile Project Management & Scrum Methodology, Enterprise CRM Architecture, and Ethical Leadership & Governance.',
      telemetry: 'SCRUM · CRM · ENTERPRISE LEADERSHIP',
      gpa: null,
    },
  ];

  return (
    <section
      id="academic-foundation"
      aria-label="Academic Foundation and Education"
      className="py-24 sm:py-36 bg-dark text-white border-y border-border-dark relative overflow-hidden bg-tech-grid-dark"
    >
      {/* Subtle radial emerald/lime glow */}
      <div 
        aria-hidden="true" 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-signal/5 rounded-full blur-[140px] pointer-events-none" 
      />

      {/* Coordinate stamps */}
      <div className="absolute top-4 left-6 hidden lg:block font-mono text-[9px] uppercase tracking-widest text-neutral-600 select-none">
        [ACADEMIC_FOUNDATION // FORMAL_EDUCATION]
      </div>
      <div className="absolute top-4 right-6 hidden lg:block font-mono text-[9px] uppercase tracking-widest text-neutral-600 select-none">
        [DISCIPLINE: INFORMATICS // SYSTEMS_ENGINEERING]
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 mb-6 px-2.5 py-1 bg-white/5 border border-white/10 rounded-[2px]">
          <span className="w-2 h-2 bg-signal rounded-none animate-pulse" />
          <span className="font-mono text-xs uppercase tracking-widest text-neutral-300 font-semibold">
            ACADEMIC FOUNDATION
          </span>
        </div>

        {/* Large Statement / Thesis */}
        <div className="max-w-5xl space-y-8">
          <h2 className="text-3xl sm:text-5xl lg:text-7xl font-bold tracking-tight text-white uppercase leading-[0.95]">
            Academic Foundation <br />
            <span className="text-neutral-400">&amp; Education.</span>
          </h2>

          <p className="text-xl sm:text-2xl text-neutral-300 font-light leading-relaxed max-w-3xl border-l-2 border-signal pl-6">
            Formal engineering and informatics education bridging computational theory, mathematical optimization, and enterprise software execution.
          </p>
        </div>

        {/* 4 Supporting Pillars Grid */}
        <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-12 border-t border-border-dark">
          {educationItems.map((p) => (
            <div 
              key={p.num} 
              className="p-6 bg-[#141518] border border-white/10 rounded-[2px] space-y-4 hover:border-signal/50 hover:bg-[#181A1F] transition-all group corner-crosshairs flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs text-signal font-bold tracking-widest block">
                    {p.num} //
                  </span>
                  <span className="font-mono text-[10px] text-neutral-400">
                    {p.period}
                  </span>
                </div>

                <div>
                  <h3 className="font-mono text-sm font-semibold tracking-wider text-white uppercase group-hover:text-signal transition-colors flex items-center gap-2">
                    {p.num === '04' ? (
                      <Award className="w-3.5 h-3.5 text-signal shrink-0" />
                    ) : (
                      <GraduationCap className="w-3.5 h-3.5 text-signal shrink-0" />
                    )}
                    <span>{p.institution}</span>
                  </h3>
                  <div className="text-xs text-neutral-200 font-medium mt-1">
                    {p.degree}
                  </div>
                  <div className="text-[11px] text-neutral-400 font-mono mt-0.5">
                    {p.field}
                  </div>
                </div>
                
                <p className="text-xs text-neutral-400 leading-relaxed pt-1">
                  {p.description}
                </p>
              </div>

              <div className="pt-3 border-t border-white/5 font-mono text-[9px] text-neutral-500 uppercase tracking-wider flex items-center justify-between">
                <span>{p.telemetry}</span>
                {p.gpa && (
                  <span className="text-signal font-semibold">GPA {p.gpa}</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
