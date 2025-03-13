import eslintJs from '@eslint/js';
import { defineConfig } from 'eslint/config';
import eslintPluginImport from 'eslint-plugin-import';
import tsEslint from 'typescript-eslint';

import eslintPrettier from './prettier.js';
/**
 * defineConfig 会 flat 一层 extends，并且将 files 字段赋值给所有 extends
 * 可以借助这个函数为所有插件添加 files 约束，防止语言之间的污染
 */
const typescriptConfig = defineConfig({
  extends: [
    eslintJs.configs.recommended,
    ...tsEslint.configs.recommended,
    ...tsEslint.configs.stylistic,
    eslintPluginImport.flatConfigs.recommended,
    eslintPluginImport.flatConfigs.typescript,
    ...eslintPrettier,
  ],
  files: ['**/*.{ts,tsx}'],
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
      typescript: true,
    },
  },
});

export { typescriptConfig };
export default typescriptConfig;
