import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  return {
    plugins: [react()],
    server: {
      port: 5173,
      // In development, /api is proxied to the Express server so no CORS setup is needed locally.
      proxy: { '/api': { target: env.VITE_DEV_API_PROXY || 'http://localhost:5000', changeOrigin: true } },
    },
    build: { outDir: 'dist', sourcemap: false, chunkSizeWarningLimit: 1500 },
  };
});
