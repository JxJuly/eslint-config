import recommended from 'eslint-plugin-prettier/recommended';

const prettierConfig = [
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
          // 不读取 prettier 配置文件，统一走 eslint 配置
          usePrettierrc: false,
        },
      ],
    },
  },
];

export { prettierConfig };
export default prettierConfig;
