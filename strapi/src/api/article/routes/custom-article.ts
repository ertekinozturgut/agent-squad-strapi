/**
 * Strapi v5 Custom Article Routes
 * Exposes endpoints for platform overview, platform filtering, and editorial tools.
 */

export default {
  routes: [
    {
      method: 'GET',
      path: '/articles/overview/platforms',
      handler: 'api::article.article.getPlatformOverview',
      config: {
        auth: false,
      },
    },
    {
      method: 'GET',
      path: '/articles/by-platform/:platform',
      handler: 'api::article.article.findByPlatform',
      config: {
        auth: false,
      },
    },
    {
      method: 'POST',
      path: '/articles/estimate-read-time',
      handler: 'api::article.article.estimateReadTime',
      config: {
        auth: false,
      },
    },
  ],
};
