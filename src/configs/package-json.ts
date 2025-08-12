import { defineConfig } from 'eslint/config';
import eslintPluginJsonc from 'eslint-plugin-jsonc';

/**
 * defineConfig 会 flat 一层 extends，并且将 files 字段赋值给所有 extends
 * 可以借助这个函数为所有插件添加 files 约束，防止语言之间的污染
 */
const packageJsonConfig = defineConfig({
  extends: [...eslintPluginJsonc.configs['flat/prettier']],
  files: ['package.json'],
  rules: {
    'jsonc/sort-keys': [
      'warn',
      {
        pathPattern: '^$',
        order: [
          'name',
          'version',
          'author',
          'exports',
          'types',
          'main',
          'module',
          'scripts',
          'dependencies',
          'devDependencies',
        ],
      },
      {
        pathPattern: '^(?:dev|peer|optional|bundled)?[Dd]ependencies$',
        order: { type: 'asc' },
      },
      {
        pathPattern: 'exports',
        order: ['types', 'require', 'import'],
      },
    ],
  },
});

export { packageJsonConfig };
export default packageJsonConfig;
