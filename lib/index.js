import { defineConfig } from 'eslint/config';

import { javascriptConfig } from './configs/javascript.js';
import { packageJsonConfig } from './configs/package.js';
import { typescriptConfig } from './configs/typescript.js';

export const recommended = defineConfig(javascriptConfig, typescriptConfig, packageJsonConfig);
export const javascript = javascriptConfig;
export const typescript = typescriptConfig;
export const packageJson = packageJsonConfig;

export default {
  recommended,
  javascript,
  typescript,
  packageJson,
};
