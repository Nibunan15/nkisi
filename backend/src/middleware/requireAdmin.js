import crypto from 'node:crypto';
import { env } from '../config/env.js';
import { ApiError } from '../utils/ApiError.js';

// Protects enquiry management endpoints with a shared secret header (x-admin-key).
export function requireAdmin(req, _res, next) {
  if (!env.adminApiKey) return next(new ApiError(503, 'Admin API is disabled (ADMIN_API_KEY not set).'));
  const given = Buffer.from(String(req.get('x-admin-key') || ''));
  const expected = Buffer.from(env.adminApiKey);
  const ok = given.length === expected.length && crypto.timingSafeEqual(given, expected);
  return ok ? next() : next(ApiError.unauthorized());
}
