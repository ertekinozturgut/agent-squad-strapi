/**
 * Strapi v5 AI Assistant Routes
 */

export default {
  routes: [
    {
      method: 'GET',
      path: '/ai-assistant',
      handler: 'ai-assistant.find',
      config: {
        auth: false,
      },
    },
    {
      method: 'PUT',
      path: '/ai-assistant',
      handler: 'ai-assistant.update',
      config: {
        policies: [],
      },
    },
    {
      method: 'GET',
      path: '/ai-assistant/config',
      handler: 'ai-assistant.getConfig',
      config: {
        auth: false,
      },
    },
    {
      method: 'PUT',
      path: '/ai-assistant/config',
      handler: 'ai-assistant.updateConfig',
      config: {
        policies: [],
      },
    },
  ],
};
