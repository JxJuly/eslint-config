import css from '@eslint/css';
import { defineConfig } from 'eslint/config';
import prettier from 'eslint-plugin-prettier';
import { tailwind4 } from 'tailwind-csstree';

const cssConfig = defineConfig([
  {
    files: ['**/*.css'],
    plugins: { css, prettier },
    language: 'css/css',
    languageOptions: {
      customSyntax: tailwind4,
    },
    rules: {
      'css/no-empty-blocks': 'error',
      'prettier/prettier': [
        'warn',
        {
          tabWidth: 2,
        },
        {
          usePrettierrc: false,
        },
      ],
    },
  },
]);

export { cssConfig };
export default cssConfig;
