export default ({ env }: { env: (key: string, defaultValue?: unknown) => unknown }) => ({
  host: env('HOST', '0.0.0.0') as string,
  port: Number(env('PORT', 1337)),
  app: {
    keys: (env('APP_KEYS', 'ertekin-app-key-1,ertekin-app-key-2') as string).split(','),
  },
  webhooks: {
    populateRelations: env('WEBHOOKS_POPULATE_RELATIONS', false) as boolean,
  },
});
