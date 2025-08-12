import { defineConfig } from 'eslint/config';

import { cssConfig } from './configs/css.js';
import { javascriptConfig } from './configs/javascript.js';
import { packageJsonConfig } from './configs/package.js';
import { typescriptConfig } from './configs/typescript.js';

export const recommended = defineConfig(javascriptConfig, typescriptConfig, packageJsonConfig, cssConfig);
export const javascript = javascriptConfig;
export const typescript = typescriptConfig;
export const packageJson = packageJsonConfig;
export const css = cssConfig;

export default {
  recommended,
  javascript,
  typescript,
  packageJson,
  css,
};
