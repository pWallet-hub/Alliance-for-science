import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  assetsInclude: ['**/*.JPG', '**/*.JPEG', '**/*.PNG', '**/*.GIF', '**/*.WEBP'],
  server: {
    proxy: {
      '/gallery-proxy': {
        target: 'https://gallery.afs-rwanda.org/api/v1',
        changeOrigin: true,
        secure: true,
        rewrite: (path) => path.replace(/^\/gallery-proxy/, ''),
      },
    },
  },
});