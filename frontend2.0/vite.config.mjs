import { defineConfig } from 'vite';
import path from 'node:path';

export default defineConfig({
  root: path.resolve(process.cwd(), 'frontend2.0'),
  server: {
    host: '127.0.0.1',
    port: 5173,
    strictPort: false,
  },
});
