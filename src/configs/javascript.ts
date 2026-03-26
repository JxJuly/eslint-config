import eslintJs from '@eslint/js';
import { defineConfig } from 'eslint/config';
import simpleImportSort from 'eslint-plugin-simple-import-sort';

import { prettierConfig } from './prettier';

/**
 * defineConfig 会 flat 一层 extends，并且将 files 字段赋值给所有 extends
 * 可以借助这个函数为所有插件添加 files 约束，防止语言之间的污染
 */
const javascriptConfig = defineConfig({
  extends: [eslintJs.configs.recommended, prettierConfig],
  plugins: {
    'simple-import-sort': simpleImportSort,
  },
  files: ['**/*.{js,mjs,cjs,jsx}'],
  languageOptions: {
    ecmaVersion: 'latest',
  },
  rules: {
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
  },
});

export { javascriptConfig };
export default javascriptConfig;
