/** @type {import('dependency-cruiser').IConfiguration} */
module.exports = {
  forbidden: [
    {
      name: 'no-ui-direct-service-call',
      comment: 'R-ARCH-006: UI bileşenleri doğrudan API servislerini çağıramaz; Hooks katmanı üzerinden geçmelidir.',
      severity: 'error',
      from: { path: '^src/(components|features/[^/]+/components)' },
      to: { path: '^src/(services|features/[^/]+/services)' }
    },
    {
      name: 'no-cross-feature-private-import',
      comment: 'R-ARCH-007: Bir feature başka bir feature\'ın iç dosyalarına doğrudan erişemez, sadece index.ts barrel üzerinden erişebilir.',
      severity: 'error',
      from: { path: '^src/features/([^/]+)/' },
      to: {
        path: '^src/features/([^/]+)/',
        pathNot: '^src/features/\\1/|index\\.ts$'
      }
    },
    {
      name: 'no-direct-db-in-strapi-controller',
      comment: 'R-STRAPI-001: Strapi Controller katmanı doğrudan veritabanı sürücülerine (knex, pg vb.) erişemez; Document Service veya Service katmanını kullanmalıdır.',
      severity: 'error',
      from: { path: '^backend/src/api/[^/]+/controllers' },
      to: { path: '(knex|pg|mysql|sqlite3)' }
    },
    {
      name: 'no-server-secret-in-client',
      comment: 'R-SEC-004: İstemci bileşenlerine backend gizli anahtarları ve veritabanı değişkenleri import edilemez.',
      severity: 'error',
      from: { path: '^src/(components|features|hooks)' },
      to: { path: '(STRAPI_ADMIN_API_TOKEN|DATABASE_PASSWORD|JWT_SECRET)' }
    },
    {
      name: 'no-circular-dependencies',
      comment: 'R-ARCH-010: Modüller arasında döngüsel bağımlılık (circular dependency) bulunamaz.',
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
