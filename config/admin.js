module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'defaultSecretForDevelopment123456789'),
  },
  apiToken: {
    salt: env('API_TOKEN_SALT', 'defaultSaltForApiTokens123456789'),
  },
  transfer: {
    token: {
      salt: env('TRANSFER_TOKEN_SALT', 'defaultSaltForTransferTokens123456789'),
    },
  },
  flags: {
    nps: env.bool('FLAG_NPS', true),
    promoteEE: env.bool('FLAG_PROMOTE_EE', true),
  },
});