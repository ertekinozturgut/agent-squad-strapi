/**
 * Strapi v5 Article Controller
 * Thin controller pattern: validates inputs, delegates to service, sanitizes response.
 */

import { factories } from '@strapi/strapi';

export interface ControllerContext {
  params: Record<string, string>;
  request: {
    body: Record<string, unknown>;
    query: Record<string, string>;
  };
  query: Record<string, string>;
  badRequest: (msg: string) => unknown;
  send: (data: unknown, status?: number) => unknown;
}

export interface StrapiApp {
  service: (uid: string) => {
    getPlatformOverview: () => Promise<unknown>;
    findArticlesByPlatform: (platform: string, limit: number) => Promise<unknown[]>;
    calculateReadTime: (content: string) => number;
    extractTableOfContents: (content: string) => unknown[];
  };
}

export const articleController = {
  /**
   * Returns high-level platform statistics (Site vs Medium vs LinkedIn)
   */
  async getPlatformOverview(ctx: ControllerContext, strapi: StrapiApp) {
    const stats = await strapi.service('api::article.article').getPlatformOverview();
    return ctx.send({ data: stats });
  },

  /**
   * Retrieves articles by platform
   */
  async findByPlatform(ctx: ControllerContext, strapi: StrapiApp) {
    const { platform } = ctx.params;
    if (!platform || !['site', 'medium', 'linkedin'].includes(platform.toLowerCase())) {
      return ctx.badRequest('Invalid platform. Supported platforms: site, medium, linkedin');
    }

    const limit = ctx.query.limit ? parseInt(ctx.query.limit, 10) : 20;
    const articles = await strapi
      .service('api::article.article')
      .findArticlesByPlatform(platform.toLowerCase(), limit);

    return ctx.send({ data: articles, meta: { count: articles.length, platform } });
  },

  /**
   * Utility endpoint for CMS editors to estimate read time before publishing
   */
  async estimateReadTime(ctx: ControllerContext, strapi: StrapiApp) {
    const { content } = ctx.request.body || {};
    if (!content || typeof content !== 'string') {
      return ctx.badRequest('Content is required to calculate read time');
    }

    const readTimeMinutes = strapi.service('api::article.article').calculateReadTime(content);
    const toc = strapi.service('api::article.article').extractTableOfContents(content);

    return ctx.send({
      data: {
        readTimeMinutes,
        tableOfContents: toc,
      },
    });
  },
};

export default factories.createCoreController('api::article.article', ({ strapi }) => ({
  async find(ctx: { query?: Record<string, unknown> }) {
    ctx.query = {
      ...ctx.query,
      populate: ctx.query?.populate || '*',
    };
    return await super.find(ctx);
  },

  async findOne(ctx: { params?: Record<string, string>; query?: Record<string, unknown> }) {
    if (ctx.params?.id === 'platforms') {
      return articleController.getPlatformOverview(ctx as unknown as ControllerContext, strapi as unknown as StrapiApp);
    }
    ctx.query = {
      ...ctx.query,
      populate: ctx.query?.populate || '*',
    };
    return await super.findOne(ctx);
  },

  async getPlatformOverview(ctx: unknown) {
    return articleController.getPlatformOverview(ctx as ControllerContext, strapi as unknown as StrapiApp);
  },

  async findByPlatform(ctx: unknown) {
    return articleController.findByPlatform(ctx as ControllerContext, strapi as unknown as StrapiApp);
  },

  async estimateReadTime(ctx: unknown) {
    return articleController.estimateReadTime(ctx as ControllerContext, strapi as unknown as StrapiApp);
  },
}));
