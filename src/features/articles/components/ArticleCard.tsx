import React from 'react';
import Link from 'next/link';
import { Clock, ArrowRight, ArrowUpRight, Calendar } from 'lucide-react';
import { ArticleItem } from '../../../types/content.types';

export interface ArticleCardProps {
  article: ArticleItem;
}

export const ArticleCard: React.FC<ArticleCardProps> = ({ article }) => {
  const isSiteExclusive = article.source === 'site' || article.platform === 'Site';
  const isLinkedIn = article.source === 'linkedin' || article.platform === 'LinkedIn';
  const isMedium =
    article.source === 'medium' ||
    article.platform === 'Medium' ||
    article.platform === 'TeknoPost';

  const isExternal = (isLinkedIn || isMedium) && Boolean(article.canonicalUrl);
  const targetUrl = isExternal && article.canonicalUrl ? article.canonicalUrl : `/insights/${article.slug}`;

  const ctaLabel = isSiteExclusive
    ? 'Read In-Depth'
    : isLinkedIn
    ? 'Read on LinkedIn'
    : isMedium
    ? 'Read on Medium'
    : 'Read Article';

  return (
    <article className="bg-white border border-border-light p-6 sm:p-8 rounded-[2px] shadow-2xs hover:border-ink transition-all flex flex-col justify-between group corner-crosshairs relative">
      <div className="space-y-4">
        {/* Category & Platform & Read Time */}
        <div className="flex items-center justify-between gap-2 border-b border-border-light/60 pb-3">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="font-mono text-[11px] font-bold tracking-widest text-signal-contrast bg-signal/25 px-2 py-0.5 rounded-[1px] inline-block uppercase">
              {article.category.name}
            </span>

            {/* Platform Badge */}
            {isSiteExclusive ? (
              <span className="font-mono text-[10px] font-bold uppercase px-1.5 py-0.5 rounded-[1px] border bg-emerald-50 text-emerald-800 border-emerald-300">
                Site Özelinde
              </span>
            ) : isLinkedIn ? (
              <span className="font-mono text-[10px] font-bold uppercase px-1.5 py-0.5 rounded-[1px] border bg-blue-50 text-blue-700 border-blue-200">
                LinkedIn
              </span>
            ) : (
              <span className="font-mono text-[10px] font-semibold uppercase px-1.5 py-0.5 rounded-[1px] border bg-neutral-100 text-neutral-800 border-neutral-200">
                {article.platform === 'TeknoPost' ? 'Medium · TeknoPost' : 'Medium'}
              </span>
            )}
          </div>

          <div className="flex items-center gap-1 text-[11px] font-mono text-ink-muted shrink-0">
            <Clock className="w-3 h-3 text-ink-muted/80" />
            <span>{article.readTimeMinutes} MIN READ</span>
          </div>
        </div>

        {/* Title */}
        {isExternal ? (
          <a
            href={targetUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="block group-hover:text-dark transition-colors"
          >
            <h3 className="text-lg sm:text-xl font-bold text-ink tracking-tight line-clamp-2 leading-snug">
              {article.title}
            </h3>
          </a>
        ) : (
          <Link href={targetUrl} className="block group-hover:text-dark transition-colors">
            <h3 className="text-lg sm:text-xl font-bold text-ink tracking-tight line-clamp-2 leading-snug">
              {article.title}
            </h3>
          </Link>
        )}

        {/* Excerpt */}
        <p className="text-xs sm:text-sm text-ink-muted line-clamp-3 leading-relaxed font-sans">
          {article.excerpt}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 pt-1">
          {article.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="text-[10px] font-mono text-ink bg-canvas border border-border-light px-2 py-0.5 rounded-[1px]"
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="pt-4 mt-6 border-t border-border-light/60 flex items-center justify-between font-mono text-xs">
        <div className="flex items-center gap-1.5 text-[11px] text-ink-muted">
          <Calendar className="w-3 h-3" />
          <span>{article.publishedAt}</span>
        </div>

        {isExternal ? (
          <a
            href={targetUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 font-bold text-ink hover:text-dark border-b border-ink pb-0.5 group-hover:translate-x-0.5 transition-transform"
          >
            <span>{ctaLabel}</span>
            <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        ) : (
          <Link
            href={targetUrl}
            className="inline-flex items-center gap-1 font-bold text-ink hover:text-dark border-b border-ink pb-0.5 group-hover:translate-x-0.5 transition-transform"
          >
            <span>{ctaLabel}</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </Link>
        )}
      </div>
    </article>
  );
};
