/** @type {import('dependency-cruiser').IConfiguration} */
module.exports = {
  forbidden: [
    {
      name: 'no-ui-direct-service-call',
      comment: 'R-ARCH-001: UI bileşenleri doğrudan API servislerini çağıramaz; Hooks katmanı üzerinden geçmelidir.',
      severity: 'error',
      from: { path: '(^|.*/)(components|features/[^/]+/components)' },
      to: { path: '(^|.*/)(services|features/[^/]+/services)' }
    },
    {
      name: 'no-direct-axios-in-components',
      comment: 'R-ARCH-001 / contract.yaml: UI bileşenleri doğrudan axios veya fetch çağıramaz; service veya custom hook katmanını kullanmalıdır.',
      severity: 'error',
      from: { path: '(^|.*/)(components|features/[^/]+/components)' },
      to: { path: '^axios$' }
    },
    {
      name: 'no-strapi-in-frontend',
      comment: 'R-ARCH-003: Frontend katmanı doğrudan backend Strapi paketlerini (@strapi/strapi vb.) import edemez.',
      severity: 'error',
      from: { path: '(^|.*/)(src|frontend|client)/.*' },
      to: { path: '^@strapi/' }
    },
    {
      name: 'no-cross-feature-private-import',
      comment: 'R-ARCH-002: Bir feature başka bir feature\'ın iç dosyalarına doğrudan erişemez, sadece public barrel index.ts üzerinden erişebilir.',
      severity: 'error',
      from: { path: '(^|.*/)features/([^/]+)/' },
      to: {
        path: '(^|.*/)features/([^/]+)/',
        pathNot: '(^|.*/)features/$2/|index\\.ts$'
      }
    },
    {
      name: 'no-direct-db-in-strapi-controller',
      comment: 'R-STRAPI-003: Strapi Controller katmanı doğrudan veritabanı sürücülerine (knex, pg vb.) erişemez; Document Service veya Service katmanını kullanmalıdır.',
      severity: 'error',
      from: { path: '(^|.*/)api/[^/]+/controllers' },
      to: { path: '(knex|pg|mysql|sqlite3)' }
    },
    {
      name: 'no-server-secret-in-client',
      comment: 'R-SEC-002: İstemci bileşenlerine backend gizli anahtarları ve veritabanı değişkenleri import edilemez.',
      severity: 'error',
      from: { path: '(^|.*/)(components|features|hooks)' },
      to: { path: '(STRAPI_ADMIN_API_TOKEN|DATABASE_PASSWORD|JWT_SECRET)' }
    },
    {
      name: 'no-circular-dependencies',
      comment: 'R-ARCH-005: Modüller arasında döngüsel bağımlılık (circular dependency) bulunamaz.',
      severity: 'error',
      from: {},
      to: { circular: true }
    }
  ],
  options: {
    doNotFollow: {
      path: 'node_modules'
    },
    tsPreCompilationDeps: true,
    enhancedResolveOptions: {
      exportsFields: ['exports'],
      conditionNames: ['import', 'require', 'node', 'default']
    }
  }
};
