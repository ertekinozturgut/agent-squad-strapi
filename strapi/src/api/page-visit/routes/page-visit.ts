/**
 * Strapi v5 Page Visit & Analytics Routes
 */

export default {
  routes: [
    {
      method: 'POST',
      path: '/analytics/hit',
      handler: 'page-visit.hit',
      config: {
        auth: false,
      },
    },
    {
      method: 'GET',
      path: '/analytics/overview',
      handler: 'page-visit.overview',
      config: {
        auth: false,
      },
    },
    {
      method: 'GET',
      path: '/page-visits',
      handler: 'page-visit.find',
      config: {
        auth: false,
      },
    },
    {
      method: 'GET',
      path: '/page-visits/:id',
      handler: 'page-visit.findOne',
      config: {
        auth: false,
      },
    },
  ],
};
