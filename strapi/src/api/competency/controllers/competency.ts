import { factories } from '@strapi/strapi';

export default factories.createCoreController('api::competency.competency', () => ({
  async find(ctx: { query?: Record<string, unknown> }) {
    ctx.query = {
      ...ctx.query,
      populate: ctx.query?.populate || '*',
    };
    return await super.find(ctx);
  },
  async findOne(ctx: { query?: Record<string, unknown> }) {
    ctx.query = {
      ...ctx.query,
      populate: ctx.query?.populate || '*',
    };
    return await super.findOne(ctx);
  },
}));
