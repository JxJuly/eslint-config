# @july_cm/eslint-config

简体中文 | [English](./README.md)

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![NPM Version](https://img.shields.io/npm/v/%40july_cm%2Feslint-config)](https://www.npmjs.com/package/@july_cm/eslint-config)
[![codecov](https://codecov.io/gh/JxJuly/eslint-config/branch/main/graph/badge.svg?token=T1E32RHZB7)](https://codecov.io/gh/JxJuly/eslint-config)

这是我的通用 ESLint 配置。

它依赖于 ESLint v9 或更高版本，并且仅兼容扁平化配置。

❌ [传统配置](https://eslint.org/docs/latest/use/configure/configuration-files-deprecated) (legacy: `.eslintrc*`)

✅ [扁平化配置](https://eslint.org/docs/latest/use/configure/configuration-files-new) (new: `eslint.config.js`)

## 功能

- ✅ 开箱即用且轻量的 JavaScript ESLint 配置

- ✅ 开箱即用且轻量的 TypeScript ESLint 配置

- ✅ 开箱即用且轻量的 CSS ESLint 配置

- ✅ 支持 package.json 字段的排序，尤其是 dependencies 等字段

- ✅ 搭配 Prettier 规则的代码风格检查

## 安装

```sh
npm install --save-dev eslint @july_cm/eslint-config
```

`@july_cm/eslint-config` 不会为你安装 ESLint，你必须自己安装。

## 快速开始

扁平化的配置，可以使用指定的编程语言配置或者直接使用推荐配置。

直接使用 `recommended` 也无需担心 `.ts` 文件被 `javascript` 规则命中，本包内部已经做了规则的隔离，以保证规则和性能的稳定。

```javascript
// eslint.config.js
const * as config from '@july_cm/eslint-config';

// only javascript
export default config.javascript;

// only typescript
export default config.typescript;

/**
 * recommended
 * - javascript
 * - typescript
 * - package.json
 */
export default config.recommended;
```

⚠️ 需要注意：若 `package.json` 中的 `type` 字段没有显示设置为 `module`，则文件名需要改为 `eslint.config.mjs`。

## 自定义规则

支持自定义规则或者配置，建议使用 ESLint 官方的函数 `defineConfig` 作为合并函数：

```javascript
// eslint.config.js
import { recommended } from '@july_cm/eslint-config';
import { defineConfig } from 'eslint/config';

export default defineConfig(recommended, {
  ignores: ["dist"],
  rules: {}
})
```


## 中止 `package.json` 键排序

排序功能基于 [eslint-plugin-jsonc](https://github.com/ota-meshi/eslint-plugin-jsonc) 和 [prettier](https://github.com/prettier/prettier) 实现。

```javascript
[{
  pathPattern: '^$',
  order: ['name', 'version', 'author', 'exports', 'types', 'main', 'module', 'scripts', 'dependencies', 'devDependencies'],
},
{
  pathPattern: '^(?:dev|peer|optional|bundled)?[Dd]ependencies$',
  order: { type: 'asc' },
},
{
  pathPattern: 'exports',
  order: ['types', 'require', 'import']
}]
```

## 配合 `Visual Studio Code` 使用

1. 安装 [VS Code ESLint 扩展](https://github.com/microsoft/vscode-eslint)。

    检查编辑器中是否有其他插件被设置为默认格式化程序。如果有，需要将它们移除或替换为 ESLint：

    ```json
    {
      "editor.defaultFormatter": "dbaeumer.vscode-eslint",
    }
    ```

    如果 Prettier 扩展在此工作区中也处于活动状态，应该禁用它。这是因为两者会相互冲突，导致格式化问题。

    `@july_cm/eslint-config` 已经集成了 `eslint-plugin-prettier`，确保两者可以同时工作而不会冲突。


2. 保存时自动修复

    ```json
    {
      "editor.codeActionsOnSave": {
        "source.fixAll.eslint": "explicit"
      },
      // ESLint 默认不对 css, json, jsonc 进行校验，需要手动添加
      "eslint.validate": ["css", "json", "jsonc", "javascript", "javascriptreact", "typescript", "typescriptreact"]
    }
    ```

3. 调试

    打开 VSCode 命令面板（Ctrl + Shift + P / Cmd + Shift + P）并运行：

    ```
    ESLint: Show Output Channel
    ```
    如果存在错误，请修复它们。
