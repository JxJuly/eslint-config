# @july_cm/eslint-config

This is my common ESlint configuration.

It depends on ESLint v9 or later and is only compatible with Flat Configuration.

❌ [legacy configuration](https://eslint.org/docs/latest/use/configure/configuration-files-deprecated) (legacy: `.eslintrc*`)

✅ [flat configuration](https://eslint.org/docs/latest/use/configure/configuration-files-new) (new: `eslint.config.js`)

## 功能 ｜ Features

- ✅ 开箱即用且轻量的 JavaScript ESLint 配置

- ✅ 开箱即用且轻量的 TypeScript ESLint 配置

- ✅ 开箱即用且轻量的 CSS ESLint 配置

- ✅ 支持 package.json 字段的排序，尤其是 dependencies 等字段

- ✅ 搭配 prettier 规则的代码风格检查

## Installation

```sh
npm install --save-dev eslint @july_cm/eslint-config
```

`@july_cm/eslint-config` does not install ESLint for you. You must install these yourself.

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

⚠️ 需要注意：若 `package.json` 中的 `type` 字段没有显示设置为 `module`，则文件名需要改为 `eslint.config.mjs`.

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


## Abort `package.json` key order

The sorting functionality is implemented based on [eslint-plugin-jsonc](https://github.com/ota-meshi/eslint-plugin-jsonc) and [prettier](https://github.com/prettier/prettier).

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

## With `Visual Studio Code`

1. Install [VS Code ESLint extension](https://github.com/microsoft/vscode-eslint).

    Check if there are other plugins set as the default formatter in the editor. If so, they need to be removed or replaced with ESLint:

    ```json
    {
      "editor.defaultFormatter": "dbaeumer.vscode-eslint",
    }
    ```

    If the Prettier extension is also active in this workspace, it should be disabled. This is because both will conflict with each other, leading to formatting issues.

    `@july_cm/eslint-config` has already integrated `eslint-plugin-prettier`, ensuring that both can work simultaneously without conflict.


2. Fix on save

    ```json
    {
      "editor.codeActionsOnSave": {
        "source.fixAll.eslint": "explicit"
      }
    }
    ```

3. Debug

    Open VSCode Command Panel(Ctrl + Shift + P / Cmd + Shift + P) and run:

    ```
    ESLint: Show Output Channel
    ```
    Fix errors if they exist.