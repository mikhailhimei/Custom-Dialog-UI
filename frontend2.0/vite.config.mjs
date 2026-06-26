import { defineConfig } from 'vite';
import path from 'node:path';

const root = path.resolve(process.cwd(), 'frontend2.0');
const staticDir = path.resolve(process.cwd(), 'custom_components/dialog_custom_ui/static');

export default defineConfig(({ command }) => ({
  root,
  server: {
    host: '127.0.0.1',
    port: 5173,
    strictPort: false,
  },
  build: {
    outDir: staticDir,
    emptyOutDir: false,
    sourcemap: command !== 'build',
    lib: {
      entry: path.resolve(root, 'src/panel-element.tsx'),
      formats: ['es'],
      fileName: () => 'dialog-custom-ui-panel.js',
    },
    rollupOptions: {
      output: {
        inlineDynamicImports: true,
        assetFileNames: 'dialog-custom-ui-panel.[ext]',
      },
    },
  },
}));
