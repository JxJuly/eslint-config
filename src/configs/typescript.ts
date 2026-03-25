import eslintJs from '@eslint/js';
import { defineConfig } from 'eslint/config';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import { configs as tsEslint } from 'typescript-eslint';

import { prettierConfig } from './prettier';
/**
 * defineConfig 会 flat 一层 extends，并且将 files 字段赋值给所有 extends
 * 可以借助这个函数为所有插件添加 files 约束，防止语言之间的污染
 */
const typescriptConfig = defineConfig({
  extends: [eslintJs.configs.recommended, tsEslint.stylistic, prettierConfig],
  plugins: {
    'simple-import-sort': simpleImportSort,
  },
  files: ['**/*.{ts,tsx}'],
  rules: {
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
    '@typescript-eslint/consistent-type-imports': [
      'error',
      { disallowTypeAnnotations: true, prefer: 'type-imports' },
    ],
    '@typescript-eslint/no-explicit-any': ['warn'],
  },
});

export { typescriptConfig };
export default typescriptConfig;
