import mongoose from 'mongoose';

const wait = (ms) => new Promise((r) => setTimeout(r, ms));

export async function connectDB(uri, { retries = 5 } = {}) {
  mongoose.set('strictQuery', true);
  mongoose.connection.on('disconnected', () => console.warn('[db] disconnected'));
  mongoose.connection.on('reconnected', () => console.log('[db] reconnected'));
  mongoose.connection.on('error', (err) => console.error('[db] error:', err.message));

  for (let attempt = 1; attempt <= retries; attempt++) {
    try {
      await mongoose.connect(uri, { serverSelectionTimeoutMS: 10000 });
      console.log('[db] connected to "' + mongoose.connection.name + '"');
      return mongoose.connection;
    } catch (err) {
      console.error('[db] connection attempt ' + attempt + '/' + retries + ' failed: ' + err.message);
      if (attempt === retries) throw err;
      await wait(Math.min(2000 * attempt, 10000));
    }
  }
}

export const disconnectDB = () => mongoose.disconnect();
export const dbState = () => ['disconnected', 'connected', 'connecting', 'disconnecting'][mongoose.connection.readyState] || 'unknown';
