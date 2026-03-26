import { defineConfig, globalIgnores } from 'eslint/config';

import { recommended } from './dist/index.js';

export default defineConfig(
  globalIgnores(['node_modules', './dist']),
  recommended
);
