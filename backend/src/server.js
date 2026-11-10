import { env } from './config/env.js';
import { connectDB, disconnectDB } from './config/db.js';
import { createApp } from './app.js';

async function start() {
  try {
    await connectDB(env.mongoUri);
  } catch (err) {
    console.error('[server] could not connect to MongoDB — exiting.', err.message);
    process.exit(1);
  }

  const server = createApp().listen(env.port, () => {
    console.log('[server] listening on port ' + env.port + ' (' + env.nodeEnv + ')');
  });

  const shutdown = (signal) => {
    console.log('[server] ' + signal + ' received, shutting down…');
    server.close(async () => {
      await disconnectDB().catch(() => {});
      process.exit(0);
    });
    setTimeout(() => process.exit(1), 10000).unref();
  };
  process.on('SIGINT', () => shutdown('SIGINT'));
  process.on('SIGTERM', () => shutdown('SIGTERM'));
  process.on('unhandledRejection', (r) => console.error('[server] unhandled rejection', r));
}

start();
