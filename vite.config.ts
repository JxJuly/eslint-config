import { defineConfig } from 'vite';

import pkg from './package.json';

const config = defineConfig({
  build: {
    outDir: './lib',
    minify: false,
    lib: {
      formats: ['es', 'cjs'],
      entry: './src/index.ts',
      fileName: (format) => `index.${format === 'es' ? 'm' : 'c'}js`,
    },
    rollupOptions: {
      external: [...Object.keys(pkg.dependencies), 'eslint/config', 'eslint-plugin-prettier/recommended'],
      output: {
        exports: 'named'
      }
    },
  },
});

export default config;
