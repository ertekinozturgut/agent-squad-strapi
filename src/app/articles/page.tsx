import React, { Suspense } from 'react';
import type { Metadata } from 'next';
import { contentRepository } from '../../services/contentRepository';
import { ArticleListContainer } from '../../features/articles';
import { SectionHeader } from '../../components/ui/SectionHeader';

export const metadata: Metadata = {
  title: 'Publications & Technical Essays',
  description:
    'Essays on Agentic AI, Model Context Protocol (MCP), Dynamics 365 CRM, and Kaizen engineering principles by Ertekin Özturgut.',
  openGraph: {
    title: 'Publications & Technical Essays | Ertekin Özturgut',
    description:
      'Field notes and architectural blueprints on agentic AI, Model Context Protocol (MCP), and enterprise systems.',
  },
};

export default async function ArticlesPage() {
  const articles = await contentRepository.getArticles();
  const categories = await contentRepository.getCategories();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16" data-section="DÜŞÜNCE LİDERLİĞİ">
      <SectionHeader
        tag="[PUBLICATIONS & THOUGHT LEADERSHIP]"
        title="Enterprise AI, Systems Architecture & Thought Leadership"
        description="Field notes, production architectural blueprints, Model Context Protocol (MCP) integrations, and CRM transformations."
      />

      <Suspense
        fallback={
          <div className="p-8 text-center text-xs font-mono text-titanium-400">
            Loading articles...
          </div>
        }
      >
        <ArticleListContainer
          initialArticles={articles}
          categories={categories}
        />
      </Suspense>
    </div>
  );
}
