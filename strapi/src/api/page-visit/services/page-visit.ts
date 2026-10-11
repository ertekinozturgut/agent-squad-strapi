import { factories } from '@strapi/strapi';
import * as crypto from 'crypto';

export interface HitPayload {
  path: string;
  pageTitle?: string;
  referrer?: string;
  userAgent?: string;
  ip?: string;
  durationSeconds?: number;
}

export interface StrapiAppContext {
  documents: (uid: string) => {
    create: (params: { data: Record<string, unknown> }) => Promise<unknown>;
    findMany: (params?: Record<string, unknown>) => Promise<Array<Record<string, unknown>>>;
    findFirst: (params?: Record<string, unknown>) => Promise<Record<string, unknown> | null>;
    update: (params: { documentId: string; data: Record<string, unknown> }) => Promise<unknown>;
  };
}

export default factories.createCoreService('api::page-visit.page-visit', ({ strapi }) => ({
  /**
   * Records a page visit with anonymized IP hash and increments article view counters if applicable
   */
  async recordHit(payload: HitPayload) {
    if (!payload.path) return null;

    // 1. Determine device family from user agent
    const ua = (payload.userAgent || '').toLowerCase();
    let device: 'desktop' | 'mobile' | 'tablet' = 'desktop';
    if (/tablet|ipad|playbook|silk/i.test(ua)) {
      device = 'tablet';
    } else if (/mobile|iphone|ipod|android|blackberry|mini|windows\sce|palm/i.test(ua)) {
      device = 'mobile';
    }

    // 2. Determine browser
    let browser = 'Unknown';
    if (ua.includes('firefox')) browser = 'Firefox';
    else if (ua.includes('edg')) browser = 'Edge';
    else if (ua.includes('chrome')) browser = 'Chrome';
    else if (ua.includes('safari')) browser = 'Safari';
    else if (ua.includes('opera') || ua.includes('opr')) browser = 'Opera';

    // 3. Anonymized IP hash (GDPR/KVKK compliant: SHA-256 with salt, raw IP is discarded immediately)
    const salt = process.env.ANALYTICS_SALT || 'ertekin-analytics-salt-2026';
    const rawIp = payload.ip || '127.0.0.1';
    const ipHash = crypto.createHash('sha256').update(`${rawIp}-${salt}`).digest('hex').slice(0, 16);

    const recordData = {
      path: payload.path.slice(0, 255),
      pageTitle: (payload.pageTitle || payload.path).slice(0, 255),
      referrer: (payload.referrer || 'Direct').slice(0, 255),
      device,
      browser,
      ipHash,
      durationSeconds: Math.min(payload.durationSeconds || 0, 86400),
      timestamp: new Date().toISOString(),
    };

    // Save page visit record
    const visit = await (strapi as unknown as StrapiAppContext)
      .documents('api::page-visit.page-visit')
      .create({
        data: recordData,
      });

    // 4. Increment article viewsCount if viewing an article
    if (payload.path.startsWith('/articles/')) {
      const slug = payload.path.replace('/articles/', '').split('?')[0].split('#')[0];
      if (slug) {
        try {
          const article = await (strapi as unknown as StrapiAppContext)
            .documents('api::article.article')
            .findFirst({
              filters: { slug },
            });
          if (article && article.documentId) {
            const currentViews = typeof article.viewsCount === 'number' ? article.viewsCount : 0;
            await (strapi as unknown as StrapiAppContext)
              .documents('api::article.article')
              .update({
                documentId: article.documentId as string,
                data: {
                  viewsCount: currentViews + 1,
                },
              });
          }
        } catch {
          // Graceful fallback if article count increment fails
        }
      }
    }

    return visit;
  },

  /**
   * Generates aggregate analytics overview
   */
  async getOverview() {
    const visits = (await (strapi as unknown as StrapiAppContext)
      .documents('api::page-visit.page-visit')
      .findMany({
        limit: 1000,
        sort: 'timestamp:desc',
      })) as Array<Record<string, unknown>>;

    const totalViews = visits.length;
    const uniqueIps = new Set(visits.map((v) => v.ipHash)).size;

    // Page frequency map
    const pageCounts: Record<string, { views: number; title: string }> = {};
    const deviceCounts: Record<string, number> = { desktop: 0, mobile: 0, tablet: 0 };
    const referrerCounts: Record<string, number> = {};

    for (const v of visits) {
      const p = (v.path as string) || '/';
      if (!pageCounts[p]) {
        pageCounts[p] = { views: 0, title: (v.pageTitle as string) || p };
      }
      pageCounts[p].views += 1;

      const dev = (v.device as string) || 'desktop';
      deviceCounts[dev] = (deviceCounts[dev] || 0) + 1;

      const ref = (v.referrer as string) || 'Direct';
      referrerCounts[ref] = (referrerCounts[ref] || 0) + 1;
    }

    const topPages = Object.entries(pageCounts)
      .map(([path, data]) => ({ path, views: data.views, title: data.title }))
      .sort((a, b) => b.views - a.views)
      .slice(0, 10);

    const topReferrers = Object.entries(referrerCounts)
      .map(([referrer, count]) => ({ referrer, count }))
      .sort((a, b) => b.count - a.count)
      .slice(0, 5);

    return {
      totalViews,
      uniqueVisitors: uniqueIps,
      deviceDistribution: deviceCounts,
      topPages,
      topReferrers,
      lastUpdated: new Date().toISOString(),
    };
  },
}));
