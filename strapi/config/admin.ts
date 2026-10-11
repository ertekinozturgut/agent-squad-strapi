export default ({ env }: { env: (key: string, defaultValue?: unknown) => string }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'ertekin-admin-jwt-secret-xyz789'),
  },
  apiToken: {
    salt: env('API_TOKEN_SALT', 'ertekin-api-token-salt-xyz789'),
  },
  transfer: {
    token: {
      salt: env('TRANSFER_TOKEN_SALT', 'ertekin-transfer-token-salt-xyz789'),
    },
  },
});
