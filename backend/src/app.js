import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import morgan from 'morgan';
import { env } from './config/env.js';
import enquiryRoutes from './routes/enquiryRoutes.js';
import healthRoutes from './routes/healthRoutes.js';
import { notFound } from './middleware/notFound.js';
import { errorHandler } from './middleware/errorHandler.js';

export function createApp() {
  const app = express();
  if (env.trustProxy) app.set('trust proxy', 1);
  app.disable('x-powered-by');

  app.use(helmet());
  app.use(cors({
    origin(origin, cb) {
      // Allow same-origin / server-to-server (no Origin header) and configured frontends.
      if (!origin || env.corsOrigins.includes(origin)) return cb(null, true);
      cb(new Error('CORS: origin not allowed — ' + origin));
    },
    methods: ['GET', 'POST', 'PATCH', 'DELETE'],
    allowedHeaders: ['Content-Type', 'x-admin-key'],
    maxAge: 600,
  }));
  app.use(express.json({ limit: '20kb' }));
  app.use(morgan(env.isProd ? 'combined' : 'dev'));

  app.get('/', (_req, res) => res.json({ success: true, name: "N'kisi Global Consulting API" }));
  app.use('/api/health', healthRoutes);
  app.use('/api/enquiries', enquiryRoutes);

  app.use(notFound);
  app.use(errorHandler);
  return app;
}
