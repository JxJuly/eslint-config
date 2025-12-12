# @july_cm/eslint-config

[简体中文](./README.zh-CN.md) | English

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![NPM Version](https://img.shields.io/npm/v/%40july_cm%2Feslint-config)](https://www.npmjs.com/package/@july_cm/eslint-config)
[![codecov](https://codecov.io/gh/JxJuly/eslint-config/branch/main/graph/badge.svg?token=T1E32RHZB7)](https://codecov.io/gh/JxJuly/eslint-config)

This is my common ESlint configuration.

It depends on ESLint v9 or later and is only compatible with Flat Configuration.

❌ [legacy configuration](https://eslint.org/docs/latest/use/configure/configuration-files-deprecated) (legacy: `.eslintrc*`)

✅ [flat configuration](https://eslint.org/docs/latest/use/configure/configuration-files-new) (new: `eslint.config.js`)

## Features

- ✅ Out-of-the-box and lightweight JavaScript ESLint configuration

- ✅ Out-of-the-box and lightweight TypeScript ESLint configuration

- ✅ Out-of-the-box and lightweight CSS ESLint configuration

- ✅ Support for package.json field sorting, especially dependencies and other fields

- ✅ Code style checking with Prettier rules

## Installation

```sh
npm install --save-dev eslint @july_cm/eslint-config
```

`@july_cm/eslint-config` does not install ESLint for you. You must install these yourself.

## Quick Start

Flat configuration allows you to use specific programming language configurations or directly use the recommended configuration.

When using `recommended` directly, you don't need to worry about `.ts` files being matched by `javascript` rules. This package has internally isolated the rules to ensure stable rules and performance.

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

⚠️ Note: If the `type` field in `package.json` is not explicitly set to `module`, the filename needs to be changed to `eslint.config.mjs`.

## Custom Rules

Custom rules or configurations are supported. It is recommended to use ESLint's official `defineConfig` function as the merge function:

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
      },
      // ESLint does not validate css, json, jsonc by default, needs to be added manually
      "eslint.validate": ["css", "json", "jsonc", "javascript", "javascriptreact", "typescript", "typescriptreact"]
    }
    ```

3. Debug

    Open VSCode Command Panel(Ctrl + Shift + P / Cmd + Shift + P) and run:

    ```
    ESLint: Show Output Channel
    ```
    Fix errors if they exist.