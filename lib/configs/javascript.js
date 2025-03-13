import eslintJs from '@eslint/js';
import { defineConfig } from 'eslint/config';
import importPlugin from 'eslint-plugin-import';

import eslintPrettier from './prettier.js';

/**
 * defineConfig 会 flat 一层 extends，并且将 files 字段赋值给所有 extends
 * 可以借助这个函数为所有插件添加 files 约束，防止语言之间的污染
 */
const javascriptConfig = defineConfig({
  extends: [eslintJs.configs.recommended, importPlugin.flatConfigs.recommended, ...eslintPrettier],
  files: ['**/*.{js,mjs,cjs,jsx}'],
  rules: {
    'import/order': [
      'warn',
      {
        groups: ['builtin', 'external', 'internal', ['parent', 'sibling'], 'object', 'type', 'index'],
        'newlines-between': 'always',
        pathGroupsExcludedImportTypes: ['builtin'],
        alphabetize: { order: 'asc', caseInsensitive: true },
        pathGroups: [
          {
            pattern: 'react**',
            group: 'external',
            position: 'before',
          },
          {
            pattern: '{@/**,@**}',
            group: 'internal',
            position: 'before',
          },
          {
            pattern: '**/*.{scss,json,svg,css,less}',
            group: 'index',
            position: 'after',
          },
        ],
      },
    ],
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
