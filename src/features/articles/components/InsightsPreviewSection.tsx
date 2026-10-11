import React from 'react';
import Link from 'next/link';
import { ArrowRight, ArrowUpRight } from 'lucide-react';

export const InsightsPreviewSection: React.FC = () => {
  const articles = [
    {
      category: 'AI AUTOMATION',
      title: 'n8n vs Copilot Studio: Lego or Ready-Made Furniture?',
      readTime: '7 MIN READ',
      href: '/articles/n8n-vs-copilot-studio-lego-or-ready-made-furniture',
      date: '2026-07-26',
    },
    {
      category: 'AI AGENTS',
      title: 'Building a Smart AI Agent for Search and Email Automation in n8n',
      readTime: '6 MIN READ',
      href: '/articles/building-smart-ai-agent-search-email-automation-n8n',
      date: '2025-12-14',
    },
    {
      category: '.NET & SQL',
      title: 'Efficient Techniques for Bulk Data / Multiple Row Insert in C#',
      readTime: '7 MIN READ',
      href: '/articles/efficient-techniques-for-bulk-data-multiple-row-insert-in-csharp',
      date: '2023-10-15',
    },
  ];


  return (
    <section aria-label="Field Notes and Thinking" className="py-24 sm:py-32 bg-canvas-white border-b border-border-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 pb-6 border-b border-border-light gap-4">
          <div>
            <div className="inline-flex items-center gap-2 mb-2">
              <span className="w-1.5 h-1.5 bg-signal rounded-none" />
              <span className="font-mono text-xs uppercase tracking-widest text-ink-muted">
                THINKING
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-ink uppercase">
              Field Notes
            </h2>
          </div>
          <Link
            href="/insights"
            className="inline-flex items-center gap-1.5 font-mono text-xs text-ink font-semibold uppercase tracking-wider hover:text-dark group"
          >
            <span>All Articles</span>
            <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>

        {/* 3 Editorial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((art) => (
            <Link
              key={art.title}
              href={art.href}
              className="bg-white border border-border-light p-8 rounded-[2px] flex flex-col justify-between hover:border-ink transition-all group shadow-2xs"
            >
              <div className="space-y-4">
                <span className="font-mono text-[11px] font-bold tracking-widest text-signal-contrast bg-signal/25 px-2 py-0.5 rounded-[1px] inline-block">
                  {art.category}
                </span>

                <h3 className="text-lg sm:text-xl font-bold text-ink tracking-tight group-hover:text-dark transition-colors leading-snug">
                  {art.title}
                </h3>
              </div>

              <div className="mt-8 pt-4 border-t border-border-light/60 flex items-center justify-between font-mono text-xs text-ink-muted group-hover:text-ink">
                <span>{art.readTime}</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
};
