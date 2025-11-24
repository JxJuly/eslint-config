import { ESLint } from 'eslint';

import { beforeAll, describe, test, expect } from 'vitest';

import { packageJson } from '../src';

describe('Package.json ESLint Config Tests', () => {
  let eslint: ESLint;

  beforeAll(() => {
    eslint = new ESLint({
      overrideConfigFile: true,
      overrideConfig: packageJson,
    });
  });

  test('exports order: types -> import -> require should pass (ESM-first)', async () => {
    const good = `{
      "exports": {
        "types": "./index.d.ts",
        "import": "./index.mjs",
        "require": "./index.cjs"
      }
    }`;

    const results = await eslint.lintText(good, { filePath: 'package.json' });
    const messages = results.flatMap((r) => r.messages);
    const sortMessages = messages.filter((m) => m.ruleId === 'jsonc/sort-keys');
    expect(sortMessages.length).toBe(0);
  });

  test('exports order wrong should warn jsonc/sort-keys', async () => {
    const bad = `{
      "exports": {
        "require": "./index.cjs",
        "import": "./index.mjs",
        "types": "./index.d.ts"
      }
    }`;

    const results = await eslint.lintText(bad, { filePath: 'package.json' });
    const messages = results.flatMap((r) => r.messages);
    const sortMessages = messages.filter((m) => m.ruleId === 'jsonc/sort-keys');
    expect(sortMessages.length).toBeGreaterThan(0);
  });

  test('dependencies ascending order passes (scoped & popular packages)', async () => {
    const goodDeps = `{
      "dependencies": {
        "@types/react": "18.2.0",
        "lodash": "4.17.21",
        "react": "18.2.0"
      }
    }`;

    const goodResults = await eslint.lintText(goodDeps, { filePath: 'package.json' });
    const goodMsgs = goodResults.flatMap((r) => r.messages).filter((m) => m.ruleId === 'jsonc/sort-keys');
    expect(goodMsgs.length).toBe(0);
  });

  test('dependencies descending order warns jsonc/sort-keys (scoped & popular packages)', async () => {
    const badDeps = `{
      "dependencies": {
        "react": "18.2.0",
        "lodash": "4.17.21",
        "@types/react": "18.2.0"
      }
    }`;

    const badResults = await eslint.lintText(badDeps, { filePath: 'package.json' });
    const badMsgs = badResults.flatMap((r) => r.messages).filter((m) => m.ruleId === 'jsonc/sort-keys');
    expect(badMsgs.length).toBeGreaterThan(0);
  });
});