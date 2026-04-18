import { defineConfig } from 'vite';
import path from 'node:path';

export default defineConfig({
  root: path.resolve(process.cwd(), 'frontend/dev'),
  server: {
    host: '127.0.0.1',
    port: 5173,
    strictPort: false,
  },
});
