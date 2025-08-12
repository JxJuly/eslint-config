import css from '@eslint/css';
import { defineConfig } from 'eslint/config';
import prettier from 'eslint-plugin-prettier';

const cssConfig = defineConfig([
  {
    // extends: ['css/recommended'],
    files: ['**/*.css'],
    plugins: { css, prettier },
    language: 'css/css',
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
