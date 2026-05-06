#!/usr/bin/env node
import { build } from 'esbuild';
import path from 'node:path';

const args = new Set(process.argv.slice(2));
const watch = args.has('--watch');
const modeArg = [...args].find((arg) => arg.startsWith('--mode='));
const mode = modeArg ? modeArg.split('=')[1] : 'development';
const production = mode === 'production';

const root = process.cwd();
const outdir = path.join(root, 'custom_components', 'dialog_custom_ui', 'static');

const shared = {
  bundle: true,
  format: 'esm',
  target: ['es2022'],
  platform: 'browser',
  minifyWhitespace: production,
  minifySyntax: production,
  minifyIdentifiers: false,
  sourcemap: production ? false : 'inline',
  legalComments: 'none',
  define: {
    'process.env.NODE_ENV': JSON.stringify(production ? 'production' : 'development'),
    __DEV__: JSON.stringify(!production),
  },
  logLevel: 'info',
};

const contexts = [
  {
    entryPoints: [path.join(root, 'frontend', 'src', 'dialog-custom-ui-panel.jsx')],
    outfile: path.join(outdir, 'dialog-custom-ui-panel.js'),
  },
  {
    entryPoints: [path.join(root, 'frontend', 'src', 'dialog-custom-ui-timer-alarm.jsx')],
    outfile: path.join(outdir, 'dialog-custom-ui-timer-alarm.js'),
  },
];

if (watch) {
  const { context } = await import('esbuild');
  const active = await Promise.all(contexts.map((config) => context({ ...shared, ...config })));
  await Promise.all(active.map((ctx) => ctx.watch()));
  console.log(`[dialog-custom-ui] watch mode started (${mode})`);
} else {
  await Promise.all(contexts.map((config) => build({ ...shared, ...config })));
  console.log(`[dialog-custom-ui] build finished (${mode})`);
}
