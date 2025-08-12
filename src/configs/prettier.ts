import recommended from 'eslint-plugin-prettier/recommended';

import type { Linter } from 'eslint';

/**
 * prettier config 作为具体语言的公共配置
 * prettier 本身可以作为 js、ts、json、css、markdown 等多种语言的格式化工具，这里不做语言限制
 */
const prettierConfig: Linter.Config[] = [
  recommended,
  {
    rules: {
      'prettier/prettier': [
        'warn',
        {
          // 优先使用单引号
          singleQuote: true,
          printWidth: 110,
          // 需要分号
          semi: true,
          // 仅在 es5 中有效的结构尾随逗号
          trailingComma: 'es5',
        },
        {
          // 不读取 prettier 配置文件，统一走 eslint 配置
          usePrettierrc: false,
        },
      ],
    },
  },
];

export { prettierConfig };
export default prettierConfig;
