import { defineConfig } from 'eslint/config';
import eslintPluginJsonc from 'eslint-plugin-jsonc';

/**
 * defineConfig 会 flat 一层 extends，并且将 files 字段赋值给所有 extends
 * 可以借助这个函数为所有插件添加 files 约束，防止语言之间的污染
 */
const packageJsonConfig = defineConfig({
  extends: [...eslintPluginJsonc.configs['flat/prettier']],
  rules: {
    'jsonc/sort-keys': [
      'warn',
      {
        pathPattern: '^$',
        order: ['name', 'version', 'author', 'scripts', 'dependencies', 'devDependencies'],
      },
      {
        pathPattern: '^(?:dev|peer|optional|bundled)?[Dd]ependencies$',
        order: { type: 'asc' },
      },
    ],
  },
});

export { packageJsonConfig };
export default packageJsonConfig;
