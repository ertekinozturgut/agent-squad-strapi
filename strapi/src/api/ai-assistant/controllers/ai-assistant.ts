/**
 * Strapi v5 AI Assistant Controller
 */

export interface ControllerContext {
  request: {
    body: Record<string, unknown>;
  };
  send: (data: unknown, status?: number) => unknown;
  badRequest: (msg: string) => unknown;
}

export interface StrapiAiApp {
  service: (uid: string) => {
    getConfig: () => Promise<unknown>;
    updateConfig: (data: Record<string, unknown>) => Promise<unknown>;
  };
}

export default ({ strapi }: { strapi: StrapiAiApp }) => ({
  async find(ctx: ControllerContext) {
    const config = await strapi.service('api::ai-assistant.ai-assistant').getConfig();
    return ctx.send({ data: config });
  },

  async update(ctx: ControllerContext) {
    const body = ctx.request.body;
    if (!body) {
      return ctx.badRequest('Configuration payload is required');
    }
    const updated = await strapi.service('api::ai-assistant.ai-assistant').updateConfig(body);
    return ctx.send({ data: updated });
  },

  async getConfig(ctx: ControllerContext) {
    const config = await strapi.service('api::ai-assistant.ai-assistant').getConfig();
    return ctx.send({ data: config });
  },

  async updateConfig(ctx: ControllerContext) {
    const body = ctx.request.body;
    if (!body) {
      return ctx.badRequest('Configuration payload is required');
    }
    const updated = await strapi.service('api::ai-assistant.ai-assistant').updateConfig(body);
    return ctx.send({ data: updated });
  },
});
