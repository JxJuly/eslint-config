import { defineConfig } from 'eslint/config';

import { recommended } from './lib/index.mjs';

export default defineConfig(recommended, {
  ignores: ['node_modules', './lib'],
});
