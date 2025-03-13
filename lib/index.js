import { defineConfig } from 'eslint/config';

import { javascriptConfig } from './configs/javascript.js';
import { packageJsonConfig } from './configs/package.js';
import { typescriptConfig } from './configs/typescript.js';

export const recommended = defineConfig(javascriptConfig, typescriptConfig, packageJsonConfig);
export { javascriptConfig as javascript, typescriptConfig as typescript, packageJsonConfig as packageJson };
