import { ESLint } from 'eslint';
import { describe, beforeAll, test, expect } from 'vitest';

import { cssConfig } from '../lib/configs/css';

describe('CSS ESLint Config Tests', () => {
  let eslint: ESLint;

  beforeAll(() => {
    eslint = new ESLint({
      overrideConfig: cssConfig,
    });
  });

  test('block duplicate properties', async () => {
    const results = await eslint.lintText(`.text-classname {}`);
    const errorMsgs = results.flatMap((result) => result.messages.map((msg) => msg.message));
    expect(errorMsgs.length).toEqual(1);
  });
});
