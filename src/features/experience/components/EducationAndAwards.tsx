import React from 'react';
import { Trophy, GraduationCap, Award } from 'lucide-react';
import { AwardItem, EducationItem } from '../../../types/content.types';
import { SectionHeader } from '../../../components/ui/SectionHeader';
import { Card } from '../../../components/ui/Card';
import { Badge } from '../../../components/ui/Badge';

export interface EducationAndAwardsProps {
  awards: AwardItem[];
  education: EducationItem[];
}

export const EducationAndAwards: React.FC<EducationAndAwardsProps> = ({ awards, education }) => {
  return (
    <section className="py-20 border-t border-surface-border/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Awards Column */}
          <div className="space-y-6">
            <SectionHeader
              tag="[HONORS & AWARDS]"
              title="Toyota Kaizen & Innovation Honors"
              description="First-place honors and global representation earned across continuous improvement and problem-solving marathons."
            />

            <div className="space-y-4">
              {awards.map((award) => (
                <Card key={award.id} hoverable className="space-y-3">
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-amber-950/40 border border-amber-800/40 flex items-center justify-center shrink-0 text-amber-400">
                        <Trophy className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="text-base font-bold text-white tracking-tight leading-snug">
                          {award.title}
                        </h4>
                        <p className="text-xs text-titanium-400 font-mono mt-0.5">
                          {award.competition} • {award.year}
                        </p>
                      </div>
                    </div>

                    <Badge
                      variant={award.rank === '1st Place' ? 'amber' : 'crimson'}
                      size="sm"
                    >
                      {award.rank}
                    </Badge>
                  </div>

                  <p className="text-xs text-titanium-300 leading-relaxed pl-[52px]">
                    {award.impactDescription}
                  </p>
                </Card>
              ))}
            </div>
          </div>

          {/* Education Column */}
          <div className="space-y-6">
            <SectionHeader
              tag="[ACADEMIC BACKGROUND]"
              title="Education & Engineering Foundations"
              description="MSc in Informatics, analytical foundation in Industrial Engineering, and software engineering roots."
            />

            <div className="space-y-4">
              {education.map((edu) => (
                <Card key={edu.id} hoverable className="space-y-3">
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-surface-border flex items-center justify-center shrink-0 text-brand-cobalt">
                        <GraduationCap className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="text-base font-bold text-white tracking-tight">
                          {edu.institution}
                        </h4>
                        <p className="text-sm font-medium text-titanium-300 mt-0.5">
                          {edu.degree} — {edu.fieldOfStudy}
                        </p>
                      </div>
                    </div>

                    <span className="font-mono text-xs text-titanium-400 bg-surface-border px-2.5 py-1 rounded shrink-0">
                      {edu.graduationYear}
                    </span>
                  </div>

                  {edu.gpa && (
                    <div className="text-xs font-mono text-titanium-400 flex items-center gap-1.5 pl-[52px]">
                      <Award className="w-3.5 h-3.5 text-brand-crimson" />
                      <span>GPA: {edu.gpa}</span>
                    </div>
                  )}

                  {edu.highlights && edu.highlights.length > 0 && (
                    <ul className="space-y-1 pl-[52px]">
                      {edu.highlights.map((h, i) => (
                        <li key={i} className="text-xs text-titanium-400 leading-relaxed">
                          • {h}
                        </li>
                      ))}
                    </ul>
                  )}
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
