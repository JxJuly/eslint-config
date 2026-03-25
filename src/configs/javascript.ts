import eslintJs from '@eslint/js';
import { defineConfig } from 'eslint/config';
import simpleImportSort from 'eslint-plugin-simple-import-sort';

import { prettierConfig } from './prettier';

/**
 * defineConfig 会 flat 一层 extends，并且将 files 字段赋值给所有 extends
 * 可以借助这个函数为所有插件添加 files 约束，防止语言之间的污染
 */
const javascriptConfig = defineConfig({
  extends: [eslintJs.configs.recommended, ...prettierConfig],
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
  settings: {
    'import/resolver': {
      node: true,
      /**
       * https://github.com/import-js/eslint-plugin-import/issues/3140
       * eslint-plugin-import-node 解析器不支持 export 字段，所以不得不使用 eslint-plugin-import-typescript
       */
      typescript: true,
    },
  },
});

export { javascriptConfig };
export default javascriptConfig;
