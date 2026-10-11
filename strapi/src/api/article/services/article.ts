/**
 * Strapi v5 Article Service (Document Service API)
 * Handles business logic, platform queries, reading time computation, and TOC generation.
 */

export interface StrapiContext {
  documents: (uid: string) => {
    findMany: (params?: Record<string, unknown>) => Promise<Record<string, unknown>[]>;
    findOne: (params?: Record<string, unknown>) => Promise<Record<string, unknown> | null>;
    count: (params?: Record<string, unknown>) => Promise<number>;
    create: (params: Record<string, unknown>) => Promise<Record<string, unknown>>;
    update: (params: Record<string, unknown>) => Promise<Record<string, unknown>>;
    delete: (params: Record<string, unknown>) => Promise<unknown>;
  };
}

export interface PlatformStats {
  platform: 'site' | 'medium' | 'linkedin';
  displayName: string;
  totalArticles: number;
  averageReadTimeMinutes: number;
  externalLinksCount: number;
}

export interface TableOfContentItem {
  id: string;
  title: string;
  level: number;
}

export const articleService = {
  /**
   * Calculates estimated reading time based on 200 words per minute
   */
  calculateReadTime(content: string): number {
    if (!content || typeof content !== 'string') return 1;
    const words = content.trim().split(/\s+/).filter(Boolean).length;
    return Math.max(1, Math.ceil(words / 200));
  },

  /**
   * Extracts structured Table of Contents from Markdown headings
   */
  extractTableOfContents(content: string): TableOfContentItem[] {
    if (!content || typeof content !== 'string') return [];
    const headingRegex = /^(#{2,3})\s+(.+)$/gm;
    const toc: TableOfContentItem[] = [];
    let match: RegExpExecArray | null;

    while ((match = headingRegex.exec(content)) !== null) {
      const level = match[1].length;
      const title = match[2].trim();
      const id = title
        .toLowerCase()
        .replace(/[^\w\s-]/g, '')
        .replace(/\s+/g, '-');
      toc.push({ id, title, level });
    }

    return toc;
  },

  /**
   * Validates canonical URL structure against specified platform
   */
  validateCanonicalUrl(platform: string, url?: string): { isValid: boolean; message?: string } {
    if (platform === 'Medium' || platform === 'TeknoPost') {
      if (!url || !url.includes('medium.com')) {
        return {
          isValid: false,
          message: 'Medium platform requires a canonicalUrl pointing to medium.com or teknopost',
        };
      }
    }

    if (platform === 'LinkedIn') {
      if (!url || !url.includes('linkedin.com')) {
        return {
          isValid: false,
          message: 'LinkedIn platform requires a canonicalUrl pointing to linkedin.com',
        };
      }
    }

    return { isValid: true };
  },

  /**
   * Gets aggregate overview across Site, Medium, and LinkedIn platforms using Strapi v5 Document Service API
   */
  async getPlatformOverview(strapi: StrapiContext): Promise<PlatformStats[]> {
    const articles = await strapi.documents('api::article.article').findMany({
      status: 'published',
    });

    const platforms: Array<{ key: 'site' | 'medium' | 'linkedin'; name: string }> = [
      { key: 'site', name: 'Site Özelinde (Architecture Essays)' },
      { key: 'medium', name: 'Medium & TeknoPost' },
      { key: 'linkedin', name: 'LinkedIn Thought Leadership' },
    ];

    return platforms.map((p) => {
      const matching = articles.filter(
        (a) => a.source === p.key || (p.key === 'medium' && (a.platform === 'Medium' || a.platform === 'TeknoPost'))
      );
      const total = matching.length;
      const totalReadTime = matching.reduce((acc, curr) => {
        const minutes = typeof curr.readTimeMinutes === 'number' ? curr.readTimeMinutes : 5;
        return acc + minutes;
      }, 0);
      const avgReadTime = total > 0 ? Math.round(totalReadTime / total) : 0;
      const externalLinks = matching.filter((a) => Boolean(a.canonicalUrl)).length;

      return {
        platform: p.key,
        displayName: p.name,
        totalArticles: total,
        averageReadTimeMinutes: avgReadTime,
        externalLinksCount: externalLinks,
      };
    });
  },

  /**
   * Finds published articles filtered by platform
   */
  async findArticlesByPlatform(
    strapi: StrapiContext,
    platform: 'site' | 'medium' | 'linkedin',
    limit = 20
  ) {
    return await strapi.documents('api::article.article').findMany({
      filters: {
        source: { $eq: platform },
      },
      status: 'published',
      populate: ['category'],
      sort: { publishedAtCustom: 'desc' },
      limit,
    });
  },
};

type CreateCoreServiceFn = (uid: string, custom?: (opts: { strapi: StrapiContext }) => Record<string, unknown>) => unknown;

let createCoreService: CreateCoreServiceFn | null = null;
try {
  createCoreService = require('@strapi/strapi').factories.createCoreService;
} catch {
  // vitest test environment fallback
}

const defaultExport = createCoreService
  ? createCoreService('api::article.article', ({ strapi }) => ({
      calculateReadTime: articleService.calculateReadTime,
      extractTableOfContents: articleService.extractTableOfContents,
      validateCanonicalUrl: articleService.validateCanonicalUrl,
      getPlatformOverview: () => articleService.getPlatformOverview(strapi as unknown as StrapiContext),
      findArticlesByPlatform: (platform: 'site' | 'medium' | 'linkedin', limit?: number) =>
        articleService.findArticlesByPlatform(strapi as unknown as StrapiContext, platform, limit),
    }))
  : ({ strapi }: { strapi: StrapiContext }) => ({
      calculateReadTime: articleService.calculateReadTime,
      extractTableOfContents: articleService.extractTableOfContents,
      validateCanonicalUrl: articleService.validateCanonicalUrl,
      getPlatformOverview: () => articleService.getPlatformOverview(strapi),
      findArticlesByPlatform: (platform: 'site' | 'medium' | 'linkedin', limit?: number) =>
        articleService.findArticlesByPlatform(strapi, platform, limit),
    });

export default defaultExport;
