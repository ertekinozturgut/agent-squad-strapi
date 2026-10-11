/**
 * Strapi v5 Lifecycle Hooks for Article Content Type
 * Automates slug creation, reading time calculation, TOC extraction, and platform normalization.
 */

import { articleService } from '../../services/article';

export interface ArticleData {
  title?: string;
  slug?: string;
  content?: string;
  readTimeMinutes?: number;
  tableOfContents?: unknown;
  canonicalUrl?: string;
  source?: string;
  platform?: string;
  [key: string]: unknown;
}

export interface LifecycleEvent {
  action: string;
  params: {
    data: ArticleData;
    where?: Record<string, unknown>;
  };
}

export function slugify(text: string): string {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/[\s\W-]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

export const articleLifecycles = {
  beforeCreate(event: LifecycleEvent) {
    const { data } = event.params;
    if (!data) return;

    // 1. Auto-generate slug if missing
    if (!data.slug && data.title) {
      data.slug = slugify(data.title);
    }

    // 2. Auto-compute read time if not provided
    if (!data.readTimeMinutes && data.content) {
      data.readTimeMinutes = articleService.calculateReadTime(data.content);
    }

    // 3. Auto-extract table of contents if not provided
    if (!data.tableOfContents && data.content) {
      data.tableOfContents = articleService.extractTableOfContents(data.content);
    }

    // 4. Normalize source & platform based on canonicalUrl
    if (data.canonicalUrl) {
      if (data.canonicalUrl.includes('medium.com')) {
        data.source = 'medium';
        if (!data.platform) data.platform = 'Medium';
      } else if (data.canonicalUrl.includes('linkedin.com')) {
        data.source = 'linkedin';
        data.platform = 'LinkedIn';
      }
    } else if (!data.source) {
      data.source = 'site';
      data.platform = 'Site';
    }
  },

  beforeUpdate(event: LifecycleEvent) {
    const { data } = event.params;
    if (!data) return;

    // Recalculate read time and TOC if content changed
    if (data.content) {
      data.readTimeMinutes = articleService.calculateReadTime(data.content);
      data.tableOfContents = articleService.extractTableOfContents(data.content);
    }

    // Update slug if title changed but slug wasn't explicitly supplied
    if (data.title && !data.slug) {
      data.slug = slugify(data.title);
    }
  },
};

export default articleLifecycles;
