import React from 'react';
import { Sparkles, Terminal, Database, Users } from 'lucide-react';
import { CompetencyCategory } from '../../../types/content.types';
import { SectionHeader } from '../../../components/ui/SectionHeader';
import { Card } from '../../../components/ui/Card';
import { Badge } from '../../../components/ui/Badge';

export interface CompetenciesSectionProps {
  competencies: CompetencyCategory[];
}

export const CompetenciesSection: React.FC<CompetenciesSectionProps> = ({ competencies }) => {
  const iconList = [
    <Sparkles key="ai" className="w-5 h-5 text-brand-cobalt" />,
    <Database key="crm" className="w-5 h-5 text-emerald-400" />,
    <Terminal key="dev" className="w-5 h-5 text-brand-crimson" />,
    <Users key="lead" className="w-5 h-5 text-amber-400" />,
  ];

  return (
    <section id="competencies" className="py-20 border-t border-surface-border/60 bg-background-secondary/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          tag="[CORE COMPETENCY MATRIX]"
          title="Strategic AI, Enterprise CRM & Software Engineering"
          description="From agentic architectures to large-scale CRM modernizations; combining production engineering with agile squad leadership."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {competencies.map((cat, idx) => (
            <Card key={cat.category} hoverable className="space-y-5">
              <div className="flex items-center gap-3 border-b border-surface-border/60 pb-3">
                <div className="w-10 h-10 rounded-lg bg-surface-border flex items-center justify-center shrink-0">
                  {iconList[idx % iconList.length]}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white tracking-tight">
                    {cat.category}
                  </h3>
                  <p className="text-xs text-titanium-400 font-mono mt-0.5">
                    {cat.description}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {cat.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="p-3 rounded-lg bg-surface-border/30 border border-surface-border/80 flex flex-col justify-between space-y-1.5"
                  >
                    <div className="flex items-start justify-between gap-1.5">
                      <span className="text-xs font-semibold text-white tracking-tight">
                        {skill.name}
                      </span>
                      {skill.highlight && (
                        <Badge variant="crimson" size="sm">
                          Focus
                        </Badge>
                      )}
                    </div>

                    {skill.context && (
                      <span className="text-[11px] text-titanium-400 leading-tight">
                        {skill.context}
                      </span>
                    )}

                    <div className="pt-1 flex items-center justify-between text-[10px] font-mono text-titanium-500">
                      <span>Proficiency:</span>
                      <span className="text-titanium-300 font-semibold">{skill.level}</span>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
