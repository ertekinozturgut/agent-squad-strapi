import React from 'react';
import type { Metadata } from 'next';
import { ArrowUpRight, GraduationCap, Award, Globe } from 'lucide-react';
import {
  ExperienceSection,
  CareerEvolutionSection,
  RecognitionSection,
} from '../../features/experience';
import { FinalCtaSection } from '../../features/contact';
import { contentRepository } from '../../services/contentRepository';
import { Button } from '../../components/ui/Button';

export const metadata: Metadata = {
  title: 'About Ertekin Özturgut — Enterprise AI Leader & Architect',
  description:
    'Professional narrative, work experiences, leadership philosophy, career progression, academic background, and honors of Ertekin Özturgut.',
};

export default async function AboutPage() {
  const experiences = await contentRepository.getExperiences();
  const education = [
    {
      institution: 'Ankara University',
      degree: "Master's Degree",
      fieldOfStudy: 'Informatics',
      period: 'Jun 2026',
    },
    {
      institution: 'Istanbul Kultur University',
      degree: "Bachelor's Degree",
      fieldOfStudy: 'Industrial Engineering',
      period: '2018 – 2023',
      gpa: '2.92 / 4.00',
    },
    {
      institution: 'Marmara University',
      degree: 'Associate Degree',
      fieldOfStudy: 'Computer Programming',
      period: '2016 – 2018',
      gpa: '3.33 / 4.00',
    },
  ];
  const certifications = await contentRepository.getCertifications();
  const languages = await contentRepository.getLanguages();

  return (
    <div className="bg-canvas text-ink flex flex-col">
      {/* Header & Storyline */}
      <section className="pt-16 pb-16 border-b border-border-light bg-canvas-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-1.5 h-1.5 bg-signal rounded-none" />
            <span className="font-mono text-xs uppercase tracking-widest text-ink-muted">
              BACKGROUND &amp; PERSPECTIVE
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-ink uppercase leading-none">
            About Ertekin
          </h1>

          <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-8 space-y-6 text-base sm:text-lg text-ink-muted leading-relaxed font-normal">
              <p className="text-xl sm:text-2xl text-ink font-semibold leading-snug">
                Enterprise AI & Digital Transformation Leader who can still build.
              </p>

              <p>
                My trajectory in technology spans over eight years of hands-on software engineering, enterprise CRM architecture, and digital process automation. Before deploying large language models, I built the high-availability transactional backbones they rely on: distributed .NET backends, Microsoft Dynamics 365 migrations, and centralized API gateways.
              </p>

              <p>
                As Next-Generation Digital Solutions Unit Supervisor at Toyota Türkiye, I lead the evaluation, governance, and delivery of production-grade AI systems and intelligent workflows. From delivering the organization’s first live AI assistant to architecting agentic systems with the Model Context Protocol (MCP), my focus is simple: deploying AI where it generates verified operational leverage, and choosing deterministic engineering everywhere else.
              </p>

              <div className="pt-2">
                <div className="border-l-2 border-signal pl-4 py-2 text-ink font-mono text-xs sm:text-sm uppercase tracking-wider bg-canvas rounded-r-[2px] border border-border-light">
                  Software Engineering → Enterprise Platforms → Architecture → Production AI → AI Transformation
                </div>
              </div>
            </div>

            {/* Quick Facts Sidebar */}
            <div className="lg:col-span-4 bg-white border border-border-light p-6 rounded-[2px] space-y-5 font-mono text-xs shadow-2xs">
              <div className="border-b border-border-light pb-3">
                <span className="text-[10px] text-ink-faint uppercase tracking-wider block">CURRENT POST</span>
                <span className="font-bold text-ink">Next-Gen Digital Solutions Supervisor</span>
                <span className="block text-ink-muted text-[11px] mt-0.5">Toyota Türkiye Pazarlama ve Satış A.Ş.</span>
              </div>

              <div className="border-b border-border-light pb-3">
                <span className="text-[10px] text-ink-faint uppercase tracking-wider block">LOCATION</span>
                <span className="font-bold text-ink">Istanbul, Türkiye</span>
              </div>

              <div className="border-b border-border-light pb-3">
                <span className="text-[10px] text-ink-faint uppercase tracking-wider block">CORE FOCUS</span>
                <span className="font-bold text-ink">Agentic AI · CRM Architecture · AI Adoption</span>
              </div>

              <div className="border-b border-border-light pb-3">
                <span className="text-[10px] text-ink-faint uppercase tracking-wider block">EXPERIENCE</span>
                <span className="font-bold text-ink">8+ Years Enterprise Tech</span>
              </div>

              <div className="pt-2">
                <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="w-full block">
                  <Button size="sm" variant="dark" className="w-full justify-center" rightIcon={<ArrowUpRight className="w-3.5 h-3.5" />}>
                    Download Resume
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Work Experience by Companies and Roles */}
      <ExperienceSection experiences={experiences} />

      {/* Career Evolution 2017 to 2026 */}
      <CareerEvolutionSection />

      {/* Education Section */}
      <section aria-label="Education Background" className="py-20 bg-canvas border-b border-border-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-1.5 h-1.5 bg-signal rounded-none" />
            <span className="font-mono text-xs uppercase tracking-widest text-ink-muted">
              ACADEMIC FOUNDATION
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-ink uppercase mb-12">
            Education
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {education.map((edu) => (
              <div
                key={edu.institution}
                className="bg-white border border-border-light p-6 sm:p-8 rounded-[2px] flex flex-col justify-between shadow-2xs hover:border-ink transition-all relative"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between border-b border-border-light pb-3 font-mono text-xs">
                    <div className="flex items-center gap-2 text-ink font-semibold">
                      <GraduationCap className="w-4 h-4 text-ink" />
                      <span>{edu.institution}</span>
                    </div>
                    <span className="text-ink-faint">{edu.period}</span>
                  </div>

                  <h3 className="font-bold text-base sm:text-lg text-ink">
                    {edu.degree}
                  </h3>

                  <p className="text-xs text-ink-muted font-mono">
                    {edu.fieldOfStudy}
                  </p>
                </div>

                {edu.gpa && (
                  <div className="pt-4 mt-4 border-t border-border-light/60 flex items-center justify-between font-mono text-xs">
                    <span className="text-ink-faint text-[10px] uppercase tracking-wider">ACADEMIC RECORD</span>
                    <span className="font-semibold text-ink">GPA: {edu.gpa}</span>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Certifications & Languages from CV */}
          <div className="mt-12 pt-12 border-t border-border-light grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Certifications Card */}
            <div className="bg-white border border-border-light p-6 sm:p-8 rounded-[2px] space-y-4 shadow-2xs">
              <div className="flex items-center gap-2 border-b border-border-light pb-3 font-mono text-xs text-ink font-semibold">
                <Award className="w-4 h-4 text-ink" />
                <span className="uppercase tracking-wider">CERTIFICATIONS</span>
              </div>
              <ul className="space-y-2.5 font-mono text-xs text-ink">
                {certifications.map((cert) => (
                  <li key={cert} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-signal rounded-none shrink-0" />
                    <span>{cert}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Languages Card */}
            <div className="bg-white border border-border-light p-6 sm:p-8 rounded-[2px] space-y-4 shadow-2xs">
              <div className="flex items-center gap-2 border-b border-border-light pb-3 font-mono text-xs text-ink font-semibold">
                <Globe className="w-4 h-4 text-ink" />
                <span className="uppercase tracking-wider">LANGUAGES</span>
              </div>
              <ul className="space-y-2.5 font-mono text-xs text-ink">
                {languages.map((lang) => (
                  <li key={lang.language} className="flex items-center justify-between">
                    <span className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-ink rounded-none shrink-0" />
                      <span className="font-semibold">{lang.language}</span>
                    </span>
                    <span className="text-ink-muted text-[11px]">{lang.proficiency}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Recognition Section */}
      <RecognitionSection />

      {/* Final CTA */}
      <FinalCtaSection />
    </div>
  );
}
