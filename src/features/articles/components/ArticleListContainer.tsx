'use client';

import React, { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { Search, X, BookOpen, Layers } from 'lucide-react';
import { ArticleItem, CategoryItem } from '../../../types/content.types';
import { ArticleCard } from './ArticleCard';
import { Button } from '../../../components/ui/Button';

export interface ArticleListContainerProps {
  initialArticles: ArticleItem[];
  categories: CategoryItem[];
}

export const ArticleListContainer: React.FC<ArticleListContainerProps> = ({
  initialArticles,
  categories,
}) => {
  const searchParams = useSearchParams();
  const initialCategory = searchParams?.get('category') || 'all';
  const initialPlatform = searchParams?.get('platform') || 'all';
  const initialQuery = searchParams?.get('q') || '';

  const [selectedPlatform, setSelectedPlatform] = useState<string>(initialPlatform);
  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory);
  const [searchQuery, setSearchQuery] = useState<string>(initialQuery);

  // Sync state changes with URL query string without page reload
  useEffect(() => {
    const params = new URLSearchParams();
    if (selectedPlatform && selectedPlatform !== 'all') {
      params.set('platform', selectedPlatform);
    }
    if (selectedCategory && selectedCategory !== 'all') {
      params.set('category', selectedCategory);
    }
    if (searchQuery && searchQuery.trim().length > 0) {
      params.set('q', searchQuery.trim());
    }

    const queryString = params.toString();
    const newPath = queryString ? `/insights?${queryString}` : '/insights';
    if (typeof window !== 'undefined') {
      window.history.replaceState(null, '', newPath);
    }
  }, [selectedPlatform, selectedCategory, searchQuery]);

  // Platform counts
  const platformCounts = useMemo(() => {
    const site = initialArticles.filter(
      (a) => a.source === 'site' || a.platform === 'Site'
    ).length;
    const medium = initialArticles.filter(
      (a) => a.source === 'medium' || a.platform === 'Medium' || a.platform === 'TeknoPost'
    ).length;
    const linkedin = initialArticles.filter(
      (a) => a.source === 'linkedin' || a.platform === 'LinkedIn'
    ).length;

    return {
      all: initialArticles.length,
      site,
      medium,
      linkedin,
    };
  }, [initialArticles]);

  const filteredArticles = useMemo(() => {
    return initialArticles.filter((article) => {
      // Platform filter
      let matchesPlatform = true;
      if (selectedPlatform === 'site') {
        matchesPlatform = article.source === 'site' || article.platform === 'Site';
      } else if (selectedPlatform === 'medium') {
        matchesPlatform =
          article.source === 'medium' ||
          article.platform === 'Medium' ||
          article.platform === 'TeknoPost';
      } else if (selectedPlatform === 'linkedin') {
        matchesPlatform = article.source === 'linkedin' || article.platform === 'LinkedIn';
      }

      // Category filter
      const matchesCategory =
        selectedCategory === 'all' || article.category.slug === selectedCategory;

      // Search filter
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        q.length === 0 ||
        article.title.toLowerCase().includes(q) ||
        article.excerpt.toLowerCase().includes(q) ||
        article.tags.some((t) => t.toLowerCase().includes(q));

      return matchesPlatform && matchesCategory && matchesSearch;
    });
  }, [initialArticles, selectedPlatform, selectedCategory, searchQuery]);

  return (
    <div className="space-y-8">
      {/* 1. Platform Source Filter Tabs */}
      <div className="flex items-center justify-between flex-wrap gap-3 pb-4 border-b border-border-light">
        <div className="flex items-center gap-2">
          <Layers className="w-3.5 h-3.5 text-signal" />
          <span className="font-mono text-xs uppercase tracking-widest text-ink font-bold">
            Platform Kaynağı:
          </span>
        </div>

        <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
          <button
            type="button"
            onClick={() => setSelectedPlatform('all')}
            className={`px-3 py-1.5 rounded-[2px] text-xs font-mono transition-all shrink-0 ${
              selectedPlatform === 'all'
                ? 'bg-dark text-white font-bold shadow-xs'
                : 'bg-white border border-border-light text-ink-muted hover:text-ink hover:border-ink'
            }`}
          >
            Tüm Platformlar ({platformCounts.all})
          </button>

          <button
            type="button"
            onClick={() => setSelectedPlatform('site')}
            className={`px-3 py-1.5 rounded-[2px] text-xs font-mono transition-all shrink-0 ${
              selectedPlatform === 'site'
                ? 'bg-emerald-800 text-white font-bold shadow-xs'
                : 'bg-white border border-border-light text-emerald-800 hover:border-emerald-600'
            }`}
          >
            Site Özelinde ({platformCounts.site})
          </button>

          <button
            type="button"
            onClick={() => setSelectedPlatform('medium')}
            className={`px-3 py-1.5 rounded-[2px] text-xs font-mono transition-all shrink-0 ${
              selectedPlatform === 'medium'
                ? 'bg-neutral-900 text-white font-bold shadow-xs'
                : 'bg-white border border-border-light text-neutral-800 hover:border-neutral-500'
            }`}
          >
            Medium &amp; TeknoPost ({platformCounts.medium})
          </button>

          <button
            type="button"
            onClick={() => setSelectedPlatform('linkedin')}
            className={`px-3 py-1.5 rounded-[2px] text-xs font-mono transition-all shrink-0 ${
              selectedPlatform === 'linkedin'
                ? 'bg-blue-700 text-white font-bold shadow-xs'
                : 'bg-white border border-border-light text-blue-700 hover:border-blue-400'
            }`}
          >
            LinkedIn ({platformCounts.linkedin})
          </button>
        </div>
      </div>

      {/* 2. Controls: Search and Topics */}
      <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
        {/* Category Topic Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
          <button
            type="button"
            onClick={() => setSelectedCategory('all')}
            className={`px-3 py-1.5 rounded-[2px] text-xs font-mono transition-all shrink-0 ${
              selectedCategory === 'all'
                ? 'bg-ink text-white font-bold shadow-xs'
                : 'bg-white border border-border-light text-ink-muted hover:text-ink hover:border-ink'
            }`}
          >
            Tüm Konular
          </button>
          {categories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setSelectedCategory(cat.slug)}
              className={`px-3 py-1.5 rounded-[2px] text-xs font-mono transition-all shrink-0 ${
                selectedCategory === cat.slug
                  ? 'bg-ink text-white font-bold shadow-xs'
                  : 'bg-white border border-border-light text-ink-muted hover:text-ink hover:border-ink'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Search Input */}
        <div className="relative min-w-[280px]">
          <Search className="w-4 h-4 text-ink-muted absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search insights, architecture or tags..."
            className="w-full pl-9 pr-8 py-2 rounded-[2px] bg-white border border-border-light text-xs text-ink placeholder-ink-muted/60 focus:border-ink outline-none transition-all font-mono shadow-2xs"
          />
          {searchQuery && (
            <button
              type="button"
              onClick={() => setSearchQuery('')}
              className="absolute right-2.5 top-1/2 -translate-y-1/2 text-ink-muted hover:text-ink"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          )}
        </div>
      </div>

      {/* 3. Articles Grid or Empty State */}
      {filteredArticles.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredArticles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      ) : (
        /* Empty State */
        <div className="p-12 text-center bg-white border border-border-light rounded-[2px] space-y-4 max-w-lg mx-auto shadow-2xs">
          <div className="w-12 h-12 rounded-[2px] bg-canvas border border-border-light flex items-center justify-center text-ink mx-auto">
            <BookOpen className="w-6 h-6" />
          </div>
          <div>
            <h4 className="text-base font-bold text-ink tracking-tight">
              No Insights Found Matching Your Query
            </h4>
            <p className="text-xs text-ink-muted mt-1 font-mono">
              Try a different search term or reset the active filters.
            </p>
          </div>
          <Button
            size="sm"
            variant="outline"
            onClick={() => {
              setSelectedPlatform('all');
              setSelectedCategory('all');
              setSearchQuery('');
            }}
          >
            Reset Filters
          </Button>
        </div>
      )}
    </div>
  );
};
