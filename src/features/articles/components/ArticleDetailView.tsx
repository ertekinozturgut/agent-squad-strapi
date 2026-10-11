import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Clock, Calendar, BookOpen } from 'lucide-react';
import { ArticleItem } from '../../../types/content.types';
import { SafeMarkdownRenderer } from '../../../components/ui/SafeMarkdownRenderer';

export interface ArticleDetailViewProps {
  article: ArticleItem;
}

export const ArticleDetailView: React.FC<ArticleDetailViewProps> = ({ article }) => {
  return (
    <div className="bg-[#0C0D0E] text-white min-h-screen">
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Back button */}
        <div className="mb-10">
          <Link
            href="/insights"
            className="inline-flex items-center gap-2 font-mono text-xs text-neutral-400 hover:text-signal transition-colors uppercase tracking-wider"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to All Insights</span>
          </Link>
        </div>

        {/* Meta header */}
        <header className="space-y-6 pb-10 border-b border-white/10">
          <div className="flex flex-wrap items-center gap-4">
            <span className="font-mono text-[11px] font-bold tracking-widest text-signal bg-signal/15 border border-signal/30 px-2.5 py-0.5 rounded-[1px] inline-block uppercase">
              {article.category.name}
            </span>
            {article.platform && (
              <span className="font-mono text-[11px] font-semibold text-neutral-300 bg-white/10 border border-white/20 px-2.5 py-0.5 rounded-[1px] inline-block uppercase">
                {article.platform === 'TeknoPost' ? 'Medium · TeknoPost' : `Published on ${article.platform}`}
              </span>
            )}
            <div className="flex items-center gap-3 text-xs font-mono text-neutral-400">
              <span className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-neutral-500" />
                {article.publishedAt}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-neutral-500" />
                {article.readTimeMinutes} MIN READ
              </span>
            </div>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.1] uppercase">
            {article.title}
          </h1>

          {article.subtitle && (
            <p className="text-lg sm:text-xl text-neutral-300 leading-relaxed font-normal pt-1">
              {article.subtitle}
            </p>
          )}

          {/* Author card */}
          <div className="flex items-center justify-between pt-6 border-t border-white/10 flex-wrap gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-[2px] bg-white/10 border border-white/20 flex items-center justify-center font-bold text-signal font-mono text-sm">
                EÖ
              </div>
              <div>
                <span className="text-sm font-semibold text-white block">
                  {article.author.name}
                </span>
                <span className="text-xs text-neutral-400 font-mono">
                  {article.author.role} @ Toyota Türkiye
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2 flex-wrap">
              {article.canonicalUrl && (
                <a
                  href={article.canonicalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-[2px] bg-white/10 border border-white/20 text-xs text-white hover:border-signal transition-all font-mono"
                >
                  <BookOpen className="w-3.5 h-3.5 text-signal" />
                  <span>
                    Read Original on {article.platform === 'TeknoPost' ? 'Medium' : (article.platform || 'Medium')} ↗
                  </span>
                </a>
              )}
              <a
                href="https://medium.com/@ertekinozturgut"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-[2px] bg-white/5 border border-white/10 text-xs text-neutral-300 hover:text-white hover:border-signal/50 transition-all font-mono"
              >
                <span className="hidden sm:inline">Medium Profile</span> ↗
              </a>
            </div>
          </div>
        </header>

        {/* Main body content safely parsed */}
        <div className="py-10">
          <SafeMarkdownRenderer content={article.content} />
        </div>

        {/* Tags & Footer */}
        <footer className="pt-10 border-t border-white/10 space-y-8">
          <div>
            <span className="font-mono text-xs uppercase tracking-wider text-neutral-400 block mb-3">
              Related Topics &amp; Tags
            </span>
            <div className="flex flex-wrap gap-2">
              {article.tags.map((tag) => (
                <span
                  key={tag}
                  className="font-mono text-[11px] text-neutral-300 bg-white/5 border border-white/10 px-2.5 py-1 rounded-[1px]"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>

          {/* Bottom CTA to Discuss */}
          <div className="p-8 rounded-[2px] bg-white/5 border border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-6 corner-crosshairs">
            <div>
              <h4 className="text-base font-bold text-white tracking-tight uppercase font-mono">
                Have an Enterprise AI Challenge in Mind?
              </h4>
              <p className="text-xs text-neutral-400 mt-1">
                Let’s connect to discuss enterprise AI architecture, governance frameworks, and system integration.
              </p>
            </div>
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-signal text-dark font-mono text-xs font-bold uppercase tracking-wider rounded-[2px] hover:bg-lime-400 transition-colors shrink-0"
            >
              <span>Get in Touch</span>
            </Link>
          </div>
        </footer>
      </article>
    </div>
  );
};
