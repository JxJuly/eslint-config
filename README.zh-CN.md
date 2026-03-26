# @july_cm/eslint-config

简体中文 | [English](./README.md)

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![NPM Version](https://img.shields.io/npm/v/%40july_cm%2Feslint-config)](https://www.npmjs.com/package/@july_cm/eslint-config)
[![codecov](https://codecov.io/gh/JxJuly/eslint-config/branch/main/graph/badge.svg?token=T1E32RHZB7)](https://codecov.io/gh/JxJuly/eslint-config)

July 的通用 ESLint 配置。

依赖 ESLint v10 或更高版本，仅兼容[扁平化配置](https://eslint.org/docs/latest/use/configure/configuration-files-new)（`eslint.config.js`）。

## 功能

- ✅ 开箱即用的 JavaScript ESLint 配置
- ✅ 开箱即用的 TypeScript ESLint 配置
- ✅ 开箱即用的 CSS ESLint 配置（支持 Tailwind CSS v4）
- ✅ 全面的 `package.json` 字段排序（覆盖所有 npm 标准字段 + 子字段排序）
- ✅ 通过 `eslint-plugin-simple-import-sort` 自动排序 import/export
- ✅ 集成 Prettier 格式化规则（无需单独安装 Prettier 扩展）

## 安装

```sh
npm install --save-dev eslint @july_cm/eslint-config
```

`@july_cm/eslint-config` 不会为你安装 ESLint，你必须自行安装。

## 快速开始

可以使用单独的语言配置，也可以直接使用 `recommended` 预设。

使用 `recommended` 时无需担心 `.ts` 文件被 `javascript` 规则命中——规则已按语言做了内部隔离。

```javascript
// eslint.config.js
import * as config from '@july_cm/eslint-config';

// 仅 JavaScript
export default config.javascript;

// 仅 TypeScript
export default config.typescript;

// 仅 CSS
export default config.css;

// 仅 package.json 排序
export default config.packageJson;

/**
 * recommended（包含以上所有配置）
 * - javascript
 * - typescript
 * - css
 * - package.json
 */
export default config.recommended;
```

⚠️ 若 `package.json` 中的 `type` 字段未设置为 `"module"`，需要将配置文件名改为 `eslint.config.mjs`。

## 自定义规则

可以使用 ESLint 的 `defineConfig` 扩展或覆盖规则：

```javascript
// eslint.config.js
import { recommended } from '@july_cm/eslint-config';
import { defineConfig, globalIgnores } from 'eslint/config';

export default defineConfig(
  globalIgnores(['dist']),
  recommended,
  {
    rules: {
      // 你的自定义规则
    },
  }
);
```

## 包含的配置

### JavaScript

- 继承 `@eslint/js` recommended 规则
- 自动排序 import 和 export
- Prettier 格式化（单引号、分号、80 字符宽度、ES5 尾逗号）
- 匹配文件：`**/*.{js,mjs,cjs,jsx}`

### TypeScript

- 继承 `@eslint/js` recommended + `typescript-eslint` recommended 规则
- 强制使用 `type` 导入（`@typescript-eslint/consistent-type-imports`）
- 自动排序 import 和 export
- Prettier 格式化
- 匹配文件：`**/*.{ts,tsx}`

### CSS

- 基于 `@eslint/css`，支持 Tailwind CSS v4 自定义语法
- Prettier 格式化
- 匹配文件：`**/*.css`

### package.json

- 将所有 npm 标准字段按逻辑分组排序：metadata → environment → entries → scripts → dependencies → publish
- 子字段排序：`exports`、`repository`、`bugs`、`engines`、`scripts` 等
- 依赖按字母升序排列

## 配合 Visual Studio Code 使用

1. 安装 [VS Code ESLint 扩展](https://github.com/microsoft/vscode-eslint)。

    确保 ESLint 被设置为默认格式化程序：

    ```json
    {
      "editor.defaultFormatter": "dbaeumer.vscode-eslint"
    }
    ```

    如果 Prettier 扩展在此工作区中处于活动状态，请禁用它——`@july_cm/eslint-config` 已集成 `eslint-plugin-prettier`，两者可以协同工作而不会冲突。

2. 保存时自动修复：

    ```json
    {
      "editor.codeActionsOnSave": {
        "source.fixAll.eslint": "explicit"
      },
      "eslint.validate": ["css", "json", "jsonc", "javascript", "javascriptreact", "typescript", "typescriptreact"]
    }
    ```

3. 调试：

    打开命令面板（Ctrl + Shift + P / Cmd + Shift + P）并运行：

    ```
    ESLint: Show Output Channel
    ```
