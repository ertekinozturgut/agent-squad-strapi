export default [
  'strapi::logger',
  'strapi::errors',
  {
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          'connect-src': ["'self'", 'https:'],
          'img-src': [
            "'self'",
            'data:',
            'blob:',
            'media.licdn.com',
            'images.unsplash.com',
            'https://ertekinozturgut.com',
          ],
          'media-src': ["'self'", 'data:', 'blob:'],
          'script-src': ["'self'", "'unsafe-inline'"],
          'frame-src': ["'self'"],
          upgradeInsecureRequests: null,
        },
      },
      xssFilter: true,
      noSniff: true,
      frameguard: {
        action: 'sameorigin',
      },
      hsts: {
        maxAge: 31536000,
        includeSubDomains: true,
        preload: true,
      },
    },
  },
  {
    name: 'strapi::cors',
    config: {
      origin: [
        'http://localhost:3000',
        'http://127.0.0.1:3000',
        'http://localhost:1337',
        'http://127.0.0.1:1337',
        'https://ertekinozturgut.com',
        'https://www.ertekinozturgut.com',
      ],
      methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'HEAD', 'OPTIONS'],
      headers: ['Content-Type', 'Authorization', 'Origin', 'Accept', 'X-Requested-With'],
      keepHeaderOnError: true,
    },
  },
  {
    name: 'strapi::poweredBy',
    config: {
      enabled: false,
      poweredBy: '',
    },
  },
  {
    name: 'strapi::query',
    config: {
      maxDepth: 10,
    },
  },
  {
    name: 'strapi::body',
    config: {
      enableUnprocessed: true,
      jsonLimit: '10mb',
      formLimit: '10mb',
      textLimit: '10mb',
      multipart: true,
    },
  },
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
