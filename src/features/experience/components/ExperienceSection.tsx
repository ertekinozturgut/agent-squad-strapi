import React from 'react';
import { Building2, Calendar, MapPin, Users, CheckCircle2 } from 'lucide-react';
import { ExperienceItem } from '../../../types/content.types';

export interface ExperienceSectionProps {
  experiences: ExperienceItem[];
}

interface CompanyGroup {
  company: string;
  totalPeriod: string;
  location: string;
  roles: ExperienceItem[];
}

export const ExperienceSection: React.FC<ExperienceSectionProps> = ({ experiences }) => {
  // Group experiences by company in chronological order
  const companyGroups: CompanyGroup[] = [
    {
      company: 'Toyota Türkiye Pazarlama ve Satış A.Ş.',
      totalPeriod: '4 years 11 months · 2021 – Present',
      location: 'Istanbul, Türkiye',
      roles: experiences.filter((e) => e.company.includes('Toyota')),
    },
    {
      company: 'Bakiciburada.com',
      totalPeriod: '2 years 9 months · 2019 – 2021',
      location: 'Istanbul, Turkey',
      roles: experiences.filter((e) => e.company.includes('Bakiciburada')),
    },
    {
      company: 'BePro Networks',
      totalPeriod: '1 year 4 months · 2017 – 2019',
      location: 'Istanbul, Turkey',
      roles: experiences.filter((e) => e.company.includes('BePro')),
    },
  ];

  return (
    <section id="experience" aria-label="Work Experience" className="py-24 sm:py-32 bg-canvas-white border-b border-border-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="inline-flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-signal rounded-none" />
            <span className="font-mono text-xs uppercase tracking-widest text-ink-muted">
              TRACK RECORD &amp; CAREER PROGRESSION
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-ink uppercase leading-[1.05]">
            Work Experience
          </h2>

          <p className="text-base sm:text-lg text-ink-muted font-normal leading-relaxed">
            Eight years of progressive engineering leadership: from hands-on full-stack development and enterprise CRM architectures to supervising production AI systems.
          </p>
        </div>

        {/* Company Groups */}
        <div className="space-y-12">
          {companyGroups.map((group) => (
            <div
              key={group.company}
              className="bg-white border border-border-light rounded-[2px] shadow-2xs overflow-hidden corner-crosshairs"
            >
              {/* Company Header Banner */}
              <div className="p-6 sm:p-8 bg-canvas border-b border-border-light flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-start sm:items-center gap-3.5">
                  <div className="w-10 h-10 rounded-[2px] bg-white border border-border-light flex items-center justify-center text-ink shrink-0 shadow-2xs">
                    <Building2 className="w-5 h-5 text-ink" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-ink tracking-tight">
                      {group.company}
                    </h3>
                    <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs font-mono text-ink-muted mt-1">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-ink-muted/80" />
                        {group.totalPeriod}
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-ink-muted/80" />
                        {group.location}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <span className="font-mono text-[11px] font-semibold text-ink bg-white border border-border-light px-2.5 py-1 rounded-[1px]">
                    {group.roles.length} {group.roles.length === 1 ? 'POSITION' : 'POSITIONS'}
                  </span>
                </div>
              </div>

              {/* Roles Timeline inside this company */}
              <div className="p-6 sm:p-8 space-y-10">
                {group.roles.map((role, roleIdx) => (
                  <div
                    key={role.id}
                    className={`relative ${
                      roleIdx < group.roles.length - 1 ? 'border-b border-border-light/60 pb-10' : ''
                    }`}
                  >
                    {/* Role Header */}
                    <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-3">
                      <div className="flex items-center gap-2.5">
                        <span
                          className={`w-2 h-2 rounded-none shrink-0 ${
                            role.isCurrent ? 'bg-signal' : 'bg-dark'
                          }`}
                        />
                        <h4 className="text-base sm:text-lg font-bold text-ink tracking-tight">
                          {role.role}
                        </h4>
                        {role.isCurrent && (
                          <span className="font-mono text-[10px] font-bold text-signal-contrast bg-signal/25 px-1.5 py-0.5 rounded-[1px] uppercase tracking-wider">
                            CURRENT ROLE
                          </span>
                        )}
                      </div>

                      <span className="font-mono text-xs text-ink-muted pl-4.5 sm:pl-0">
                        {role.period}
                      </span>
                    </div>

                    {/* Summary */}
                    <p className="text-xs sm:text-sm text-ink-muted leading-relaxed pl-4.5 mb-4 font-sans">
                      {role.summary}
                    </p>

                    {/* Team Managed callout if present */}
                    {role.teamManaged && (
                      <div className="ml-4.5 mb-4 inline-flex items-center gap-2 font-mono text-[11px] text-ink bg-canvas border border-border-light px-3 py-1 rounded-[1px]">
                        <Users className="w-3.5 h-3.5 text-ink-muted" />
                        <span className="font-bold">Team Leadership:</span>
                        <span>{role.teamManaged}</span>
                      </div>
                    )}

                    {/* Key Responsibilities & Deliverables */}
                    <div className="pl-4.5 space-y-2 mb-5">
                      <span className="font-mono text-[10px] uppercase tracking-wider text-ink-faint block">
                        KEY RESPONSIBILITIES &amp; DELIVERABLES
                      </span>
                      <ul className="space-y-2">
                        {role.achievements.map((ach, idx) => (
                          <li
                            key={idx}
                            className="flex items-start gap-2.5 text-xs sm:text-sm text-ink-muted leading-relaxed font-sans"
                          >
                            <CheckCircle2 className="w-3.5 h-3.5 text-signal mt-1 shrink-0" />
                            <span>{ach}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div className="pl-4.5 pt-3 border-t border-border-light/40 flex flex-wrap items-center gap-1.5">
                      <span className="font-mono text-[10px] uppercase tracking-wider text-ink-faint mr-1">
                        STACK:
                      </span>
                      {role.technologies.map((t) => (
                        <span
                          key={t}
                          className="font-mono text-[10px] text-ink bg-canvas border border-border-light px-2 py-0.5 rounded-[1px]"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
