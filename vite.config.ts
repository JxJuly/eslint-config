import { defineConfig } from 'vite';

import pkg from './package.json';

const deps = [
  ...Object.keys(pkg.dependencies),
  ...Object.keys(pkg.peerDependencies),
];

const config = defineConfig({
  build: {
    outDir: './dist',
    minify: false,
    lib: {
      formats: ['es', 'cjs'],
      entry: './src/index.ts',
      fileName: (format) => `index.${format === 'es' ? '' : 'c'}js`,
    },
    rolldownOptions: {
      external: (id) =>
        deps.some((dep) => id === dep || id.startsWith(`${dep}/`)),
      output: {
        exports: 'named',
      },
    },
  },
});

export default config;
