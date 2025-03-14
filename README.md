# @july_cm/eslint-config

This is my common ESlint configuration.

It depends on ESLint v9 or later and is only compatible with Flat Configuration.

❌ [legacy configuration](https://eslint.org/docs/latest/use/configure/configuration-files-deprecated) (legacy: `.eslintrc*`)

✅ [flat configuration](https://eslint.org/docs/latest/use/configure/configuration-files-new) (new: `eslint.config.js`)

## Installation

```sh
npm install --save-dev eslint @july_cm/eslint-config
```

`@july_cm/eslint-config` does not install ESLint for you. You must install these yourself.

## Language support

```javascript
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


## Abort `package.json` key order

The sorting functionality is implemented based on [eslint-plugin-jsonc](https://github.com/ota-meshi/eslint-plugin-jsonc) and [prettier](https://github.com/prettier/prettier).

```javascript
// root keys order
const order = ['name', 'version', 'author', 'scripts', 'dependencies', 'devDependencies'];

// dependencies package order
const pkg = {
  pathPattern: '^(?:dev|peer|optional|bundled)?[Dd]ependencies$',
  order: { type: 'asc' },
},
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