import React, { Suspense } from 'react';
import type { Metadata } from 'next';
import { contentRepository } from '../../services/contentRepository';
import { ArticleListContainer } from '../../features/articles';
import { FinalCtaSection } from '../../features/contact';

export const metadata: Metadata = {
  title: 'Enterprise AI, Agentic Systems & Architecture — Insights',
  description:
    'Field notes, architecture teardowns, and essays on production AI, Model Context Protocol (MCP), CRM platforms, and organizational AI transformation by Ertekin Özturgut.',
};

export default async function InsightsPage() {
  const articles = await contentRepository.getArticles();
  const categories = await contentRepository.getCategories();

  return (
    <div className="bg-canvas text-ink flex flex-col">
      {/* Header */}
      <section className="pt-16 pb-12 border-b border-border-light bg-canvas-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-1.5 h-1.5 bg-signal rounded-none" />
            <span className="font-mono text-xs uppercase tracking-widest text-ink-muted">
              THINKING // FIELD NOTES
            </span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-ink uppercase leading-none">
            Insights
          </h1>
          <p className="mt-4 text-base sm:text-lg text-ink-muted max-w-2xl font-normal leading-relaxed">
            Observations, architectural lessons, and tactical playbooks on taking AI from proof-of-concept to reliable production in the enterprise.
          </p>
          <div className="mt-8 pt-6 border-t border-border-light/70 flex flex-wrap items-center gap-4 sm:gap-6 font-mono text-[11px] text-ink-muted uppercase tracking-wider">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              <span className="text-ink font-semibold">3 SITE ÖZELİNDE MİMARİ DENEME</span>
            </div>
            <span className="text-border-light hidden sm:inline">•</span>
            <a
              href="https://medium.com/@ertekinozturgut"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-ink transition-colors"
            >
              13 MEDIUM &amp; TEKNOPOST YAZISI ↗
            </a>
            <span className="text-border-light hidden sm:inline">•</span>
            <a
              href="https://www.linkedin.com/in/ertekinozturgut"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-ink transition-colors"
            >
              3 LINKEDIN YAYINI ↗
            </a>
            <span className="text-border-light hidden sm:inline">•</span>
            <span>.NET · AGENTIC AI · KAIZEN</span>
          </div>

        </div>
      </section>

      {/* Articles Container with Suspense */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Suspense
          fallback={
            <div className="p-12 text-center font-mono text-xs text-ink-muted">
              Loading insights...
            </div>
          }
        >
          <ArticleListContainer
            initialArticles={articles}
            categories={categories}
          />
        </Suspense>
      </div>

      {/* Final CTA */}
      <FinalCtaSection />
    </div>
  );
}
