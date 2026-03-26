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
          // metadata
          'name',
          'version',
          'private',
          'description',
          'keywords',
          'license',
          'author',
          'contributors',
          'funding',
          'homepage',
          'repository',
          'bugs',
          // environment
          'type',
          'engines',
          'packageManager',
          'os',
          'cpu',
          'devEngines',
          // entries
          'exports',
          'main',
          'module',
          'browser',
          'types',
          'bin',
          'man',
          'directories',
          'files',
          // scripts
          'scripts',
          'config',
          // dependencies
          'dependencies',
          'devDependencies',
          'peerDependencies',
          'peerDependenciesMeta',
          'optionalDependencies',
          'bundleDependencies',
          'overrides',
          // publish
          'publishConfig',
          'workspaces',
        ],
      },
      {
        pathPattern: '^(?:dev|peer|optional|bundled)?[Dd]ependencies(?:Meta)?$',
        order: { type: 'asc' },
      },
      {
        pathPattern: '^(?:overrides|resolutions)$',
        order: { type: 'asc' },
      },
      {
        pathPattern: '^exports(?:\\..+)?$',
        order: ['types', 'import', 'require', 'default'],
      },
      {
        pathPattern: '^publishConfig$',
        order: ['registry', 'access', 'tag'],
      },
      {
        pathPattern: '^repository$',
        order: ['type', 'url', 'directory'],
      },
      {
        pathPattern: '^bugs$',
        order: ['url', 'email'],
      },
      {
        pathPattern: '^engines$',
        order: ['node', 'npm', 'pnpm'],
      },
      {
        pathPattern: '^(?:devEngines)$',
        order: ['runtime', 'packageManager', 'os', 'cpu', 'libc'],
      },
      {
        pathPattern: '^directories$',
        order: ['bin', 'man', 'lib', 'doc', 'test'],
      },
      {
        pathPattern: '^scripts$',
        order: [
          'preinstall',
          'install',
          'postinstall',
          'prepare',
          'prepack',
          'postpack',
          'prepublishOnly',
          'dev',
          'build',
          'start',
          'test',
          'lint',
        ],
      },
    ],
  },
});

export { packageJsonConfig };
export default packageJsonConfig;
