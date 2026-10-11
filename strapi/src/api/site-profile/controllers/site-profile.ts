import { factories } from '@strapi/strapi';

export default factories.createCoreController('api::site-profile.site-profile', () => ({
  async find(ctx: { query?: Record<string, unknown> }) {
    ctx.query = {
      ...ctx.query,
      populate: ctx.query?.populate || '*',
    };
    return await super.find(ctx);
  },
}));
