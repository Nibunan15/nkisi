import mongoose from 'mongoose';
import { env } from '../config/env.js';

// eslint-disable-next-line no-unused-vars
export function errorHandler(err, req, res, _next) {
  let status = err.status || err.statusCode || 500;
  let message = err.message || 'Internal server error';
  let errors = err.errors && Array.isArray(err.errors) ? err.errors : undefined;

  if (err instanceof mongoose.Error.ValidationError) {
    status = 422;
    message = 'Please check the highlighted fields.';
    errors = Object.values(err.errors).map((e) => ({ field: e.path, message: e.message }));
  } else if (err instanceof mongoose.Error.CastError) {
    status = 400;
    message = 'Invalid ' + err.path;
  } else if (err.type === 'entity.parse.failed') {
    status = 400;
    message = 'Malformed JSON body';
  } else if (err.type === 'entity.too.large') {
    status = 413;
    message = 'Request body is too large';
  } else if (err.message && err.message.startsWith('CORS')) {
    status = 403;
  }

  if (status >= 500) {
    console.error('[error]', req.method, req.originalUrl, err);
    if (env.isProd) message = 'Internal server error';
  }

  res.status(status).json({ success: false, message, ...(errors ? { errors } : {}) });
}
