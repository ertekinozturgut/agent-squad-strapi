import React from 'react';
import type { Metadata } from 'next';
import { contentRepository } from '../../services/contentRepository';
import { CaseStudiesSection, WorkProjectCatalog } from '../../features/case-studies';
import { FinalCtaSection } from '../../features/contact';

export const metadata: Metadata = {
  title: 'Selected AI & Enterprise Systems',
  description:
    'Production AI systems, intelligent automation and enterprise architecture case studies by Ertekin Özturgut at Toyota Türkiye.',
};

export default async function WorkPage() {
  const caseStudies = await contentRepository.getCaseStudies();

  return (
    <div className="bg-canvas text-ink flex flex-col">
      {/* Work Page Header */}
      <section className="pt-16 pb-12 border-b border-border-light bg-canvas-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-1.5 h-1.5 bg-signal rounded-none" />
            <span className="font-mono text-xs uppercase tracking-widest text-ink-muted">
              PORTFOLIO OF SYSTEMS
            </span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-ink uppercase leading-none">
            Selected Systems
          </h1>
          <p className="mt-4 text-base sm:text-lg text-ink-muted max-w-2xl font-normal leading-relaxed">
            Real enterprise problems solved with production-grade AI systems, CRM modernizations, and intelligent automation workflows.
          </p>
        </div>
      </section>

      {/* Case Studies Section */}
      <CaseStudiesSection caseStudies={caseStudies} />

      {/* Complete LinkedIn Enterprise Systems Directory */}
      <section aria-label="Complete LinkedIn Portfolio Directory" className="py-20 bg-canvas-white border-b border-border-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 pb-6 border-b border-border-light gap-4">
            <div>
              <div className="inline-flex items-center gap-2 mb-2">
                <span className="w-1.5 h-1.5 bg-signal rounded-none" />
                <span className="font-mono text-xs uppercase tracking-widest text-ink-muted">
                  FULL SYSTEM CATALOG
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-ink uppercase">
                All Enterprise Projects &amp; Kaizen Honors
              </h2>
            </div>
            <span className="font-mono text-xs text-ink-muted uppercase tracking-wider">
              [ 13 VERIFIED LINKEDIN PROJECTS // PRODUCTION AUDITED ]
            </span>
          </div>

          <WorkProjectCatalog caseStudies={caseStudies} />
        </div>
      </section>

      {/* Final CTA */}
      <FinalCtaSection />
    </div>
  );
}
