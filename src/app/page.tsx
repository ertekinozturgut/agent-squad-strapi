import React from 'react';
import { contentRepository } from '../services/contentRepository';
import { HeroSection, MetricBand, AboutSection, ManifestoSection } from '../features/profile';
import { CaseStudiesSection, WorkProjectCatalog } from '../features/case-studies';
import {
  HowIBuildSection,
  ProcessStepper,
  TechnicalFoundationTable,
  ConsultingAndTrainingSection,
} from '../features/competencies';
import {
  ExperienceSection,
  CareerEvolutionSection,
  RecognitionSection,
} from '../features/experience';
import { InsightsPreviewSection } from '../features/articles';
import { FinalCtaSection } from '../features/contact';
import { PersonJsonLd } from '../components/seo/JsonLd';

export default async function HomePage() {
  const profile = await contentRepository.getProfile();
  const caseStudies = await contentRepository.getCaseStudies();
  const experiences = await contentRepository.getExperiences();

  return (
    <div className="bg-canvas text-ink flex flex-col">
      <PersonJsonLd profile={profile} />

      {/* 1. Hero Section (60% Scale AI Editorial Typography / 40% System Architecture Visual) */}
      <HeroSection profile={profile} />

      {/* 2. Impact Metrics (4-Column Proof Band) */}
      <MetricBand />

      {/* 3. About Section (Executive narrative, trajectory & quick facts) */}
      <AboutSection />

      {/* 4. Academic Foundation & Education (Dark 4-Pillar Grid: Ankara, Istanbul Kultur, Marmara, Credentials) */}
      <ManifestoSection />

      {/* 5. Work Experience (Toyota Türkiye 4 positions, Bakiciburada Team Lead, BePro IT Consultant) */}
      <ExperienceSection experiences={experiences} />

      {/* 6. Career Evolution (2017 to 2026: Before AI, I built the systems AI depends on) */}
      <CareerEvolutionSection />

      {/* 7. Selected Systems & Full LinkedIn Project Directory */}
      <div>
        <CaseStudiesSection caseStudies={caseStudies} />

        {/* Complete LinkedIn Project Directory with Search & Filtering */}
        <section aria-label="Complete LinkedIn Project Directory" className="py-20 sm:py-28 bg-canvas-white border-b border-border-light">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 pb-6 border-b border-border-light gap-4">
              <div>
                <div className="inline-flex items-center gap-2 mb-2 px-2 py-0.5 bg-signal/15 border border-signal/30 text-ink rounded-[2px]">
                  <span className="w-1.5 h-1.5 bg-signal rounded-none animate-pulse" />
                  <span className="font-mono text-xs uppercase tracking-widest text-ink font-bold">
                    FULL SYSTEM CATALOG
                  </span>
                </div>
                <h3 className="text-3xl sm:text-4xl font-bold tracking-tight text-ink uppercase">
                  All Verified Enterprise Systems &amp; Kaizen Honors
                </h3>
              </div>
              <span className="font-mono text-xs text-ink-muted uppercase tracking-wider">
                [ 13 VERIFIED LINKEDIN PROJECTS // AUDITED ARCHITECTURES ]
              </span>
            </div>

            <WorkProjectCatalog caseStudies={caseStudies} />
          </div>
        </section>
      </div>

      {/* 8. Consulting & Corporate Training (Dedicated Offerings for Enterprise Clients & Enablement) */}
      <ConsultingAndTrainingSection />

      {/* 9. How I Build (3 Layers: Architecture, Delivery, Adoption) */}
      <HowIBuildSection />

      {/* 10. From Problem to Production (5-Step Operational Stepper) */}
      <ProcessStepper />

      {/* 11. Technical Foundation (Clean 4-Column Table Grid) */}
      <TechnicalFoundationTable />

      {/* 12. Recognition (3x First Place Kaizen Honors) */}
      <RecognitionSection />

      {/* 14. Insights / Field Notes (3 Editorial Cards linking to /insights) */}
      <div id="insights">
        <InsightsPreviewSection />
      </div>

      {/* 15. Final CTA & Inquiries (Dark Full-Screen Call to Action) */}
      <FinalCtaSection />
    </div>
  );
}
