# @july_cm/eslint-config

[简体中文](./README.zh-CN.md) | English

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![NPM Version](https://img.shields.io/npm/v/%40july_cm%2Feslint-config)](https://www.npmjs.com/package/@july_cm/eslint-config)
[![codecov](https://codecov.io/gh/JxJuly/eslint-config/branch/main/graph/badge.svg?token=T1E32RHZB7)](https://codecov.io/gh/JxJuly/eslint-config)

Shared ESLint config for July's projects.

Requires ESLint v10 or later, only compatible with [flat configuration](https://eslint.org/docs/latest/use/configure/configuration-files-new) (`eslint.config.js`).

## Features

- ✅ Out-of-the-box JavaScript ESLint configuration
- ✅ Out-of-the-box TypeScript ESLint configuration
- ✅ Out-of-the-box CSS ESLint configuration (with Tailwind CSS v4 support)
- ✅ Comprehensive `package.json` field sorting (all npm standard fields + sub-field ordering)
- ✅ Automatic import/export sorting via `eslint-plugin-simple-import-sort`
- ✅ Integrated Prettier formatting rules (no need for a separate Prettier extension)

## Installation

```sh
npm install --save-dev eslint @july_cm/eslint-config
```

`@july_cm/eslint-config` does not install ESLint for you. You must install it yourself.

## Quick Start

You can use individual language configurations or the `recommended` preset directly.

When using `recommended`, you don't need to worry about `.ts` files being matched by `javascript` rules — rules are internally isolated per language.

```javascript
// eslint.config.js
import * as config from '@july_cm/eslint-config';

// only javascript
export default config.javascript;

// only typescript
export default config.typescript;

// only css
export default config.css;

// only package.json sorting
export default config.packageJson;

/**
 * recommended (includes all of the above)
 * - javascript
 * - typescript
 * - css
 * - package.json
 */
export default config.recommended;
```

⚠️ If the `type` field in `package.json` is not set to `"module"`, rename the config file to `eslint.config.mjs`.

## Custom Rules

You can extend or override rules using ESLint's `defineConfig`:

```javascript
// eslint.config.js
import { recommended } from '@july_cm/eslint-config';
import { defineConfig, globalIgnores } from 'eslint/config';

export default defineConfig(
  globalIgnores(['dist']),
  recommended,
  {
    rules: {
      // your custom rules
    },
  }
);
```

## Included Configurations

### JavaScript

- Extends `@eslint/js` recommended rules
- Auto-sorts imports and exports
- Prettier formatting (single quotes, semicolons, 80 char width, ES5 trailing commas)
- Files: `**/*.{js,mjs,cjs,jsx}`

### TypeScript

- Extends `@eslint/js` recommended + `typescript-eslint` recommended rules
- Enforces `type` imports (`@typescript-eslint/consistent-type-imports`)
- Auto-sorts imports and exports
- Prettier formatting
- Files: `**/*.{ts,tsx}`

### CSS

- Powered by `@eslint/css` with Tailwind CSS v4 custom syntax support
- Prettier formatting
- Files: `**/*.css`

### package.json

- Sorts all npm standard fields into logical groups: metadata → environment → entries → scripts → dependencies → publish
- Sub-field ordering for `exports`, `repository`, `bugs`, `engines`, `scripts`, etc.
- Dependencies sorted alphabetically

## With Visual Studio Code

1. Install the [VS Code ESLint extension](https://github.com/microsoft/vscode-eslint).

    Make sure ESLint is set as the default formatter:

    ```json
    {
      "editor.defaultFormatter": "dbaeumer.vscode-eslint"
    }
    ```

    If the Prettier extension is active in this workspace, disable it — `@july_cm/eslint-config` already integrates `eslint-plugin-prettier` so both work together without conflict.

2. Enable fix on save:

    ```json
    {
      "editor.codeActionsOnSave": {
        "source.fixAll.eslint": "explicit"
      },
      "eslint.validate": ["css", "json", "jsonc", "javascript", "javascriptreact", "typescript", "typescriptreact"]
    }
    ```

3. Debug:

    Open the Command Palette (Ctrl + Shift + P / Cmd + Shift + P) and run:

    ```
    ESLint: Show Output Channel
    ```
