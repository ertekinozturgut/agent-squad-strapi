import { factories } from '@strapi/strapi';

export default factories.createCoreController('api::seo-setting.seo-setting', () => ({
  async find(ctx: { query?: Record<string, unknown> }) {
    ctx.query = {
      ...ctx.query,
      populate: ctx.query?.populate || '*',
    };
    return await super.find(ctx);
  },
}));
