import eslintJs from '@eslint/js';

import { configMerge } from './config-merge.js';
import eslintPrettier from './prettier.js';

const configs = [eslintJs.configs.recommended, ...eslintPrettier];

const javascriptConfig = configMerge(configs, {
  files: ['**/*.{js,mjs,cjs,jsx}'],
});

export { javascriptConfig };
export default javascriptConfig;
