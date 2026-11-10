import 'dotenv/config';

function required(key) {
  const value = process.env[key];
  if (!value) throw new Error('Missing required environment variable: ' + key + ' (see .env.example)');
  return value;
}

export const env = Object.freeze({
  nodeEnv: process.env.NODE_ENV || 'development',
  isProd: process.env.NODE_ENV === 'production',
  port: Number(process.env.PORT) || 5000,
  mongoUri: required('MONGODB_URI'),
  corsOrigins: (process.env.CORS_ORIGINS || 'http://localhost:5173')
    .split(',').map((s) => s.trim().replace(/\/$/, '')).filter(Boolean),
  adminApiKey: process.env.ADMIN_API_KEY || '',
  trustProxy: process.env.TRUST_PROXY === 'true',
});
