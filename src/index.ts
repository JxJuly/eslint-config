import { defineConfig } from 'eslint/config';

import { cssConfig } from './configs/css';
import { javascriptConfig } from './configs/javascript';
import { packageJsonConfig } from './configs/package-json';
import { typescriptConfig } from './configs/typescript';

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
