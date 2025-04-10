import { ESLint } from 'eslint';
import { beforeAll, describe, test, expect } from 'vitest';

import { javascriptConfig } from '../lib/configs/javascript';

describe('Javascript ESLint Config Tests', () => {
  let eslint: ESLint;

  beforeAll(() => {
    eslint = new ESLint({
      overrideConfig: javascriptConfig,
    });
  });

  test('try-catch without error', async () => {
    const results = await eslint.lintText(`try {\n  // try block\n} catch {\n  // catch block\n}\n`);
    const errorMsgs = results.flatMap((result) => result.messages.map((msg) => msg.message));
    expect(errorMsgs.length).toEqual(0);
  });
});
