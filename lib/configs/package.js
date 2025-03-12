import eslintPluginJsonc from 'eslint-plugin-jsonc';

import { configMerge } from './config-merge.js';

const configs = [
  ...eslintPluginJsonc.configs['flat/prettier'],
  {
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
  },
];

const packageJsonConfig = configMerge(configs, {
  files: ['package.json'],
});

export { packageJsonConfig };
export default packageJsonConfig;
