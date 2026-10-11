import { factories } from '@strapi/strapi';

export interface TrackingKoaContext {
  request?: {
    body?: Record<string, unknown>;
    headers?: Record<string, string | string[] | undefined>;
    ip?: string;
  };
  status?: number;
  body?: unknown;
}

export interface StrapiServiceContext {
  service: (uid: string) => {
    recordHit: (data: Record<string, unknown>) => Promise<unknown>;
    getOverview: () => Promise<unknown>;
  };
}

export default factories.createCoreController('api::page-visit.page-visit', ({ strapi }) => ({
  /**
   * Records a page hit
   */
  async hit(ctx: unknown) {
    const context = ctx as TrackingKoaContext;
    const body = context.request?.body || {};
    const path = typeof body.path === 'string' ? body.path : '';
    if (!path) {
      context.status = 400;
      context.body = { error: { message: 'Path is required for page tracking' } };
      return context.body;
    }

    const forwardedFor = context.request?.headers?.['x-forwarded-for'];
    const ip = forwardedFor ? String(forwardedFor).split(',')[0].trim() : context.request?.ip || '127.0.0.1';
    const userAgent = (context.request?.headers?.['user-agent'] as string) || '';

    const payload = {
      path,
      pageTitle: typeof body.pageTitle === 'string' ? body.pageTitle : path,
      referrer: typeof body.referrer === 'string' ? body.referrer : (context.request?.headers?.['referer'] as string) || 'Direct',
      durationSeconds: typeof body.durationSeconds === 'number' ? body.durationSeconds : 0,
      userAgent,
      ip,
    };

    const record = await (strapi as unknown as StrapiServiceContext)
      .service('api::page-visit.page-visit')
      .recordHit(payload);

    context.body = { success: true, recorded: Boolean(record) };
    return context.body;
  },

  /**
   * Retrieves aggregate visitor and page view overview
   */
  async overview(ctx: unknown) {
    const context = ctx as TrackingKoaContext;
    const data = await (strapi as unknown as StrapiServiceContext)
      .service('api::page-visit.page-visit')
      .getOverview();
    context.body = { data };
    return context.body;
  },
}));
