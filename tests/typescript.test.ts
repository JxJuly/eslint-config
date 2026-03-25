import { ESLint } from 'eslint';
import { beforeAll, describe, expect, test } from 'vitest';

import { typescript } from '../src';

describe('Typescript ESLint Config Tests', () => {
  let eslint: ESLint;

  beforeAll(() => {
    eslint = new ESLint({
      overrideConfigFile: true,
      overrideConfig: typescript,
      fix: true,
    });
  });

  test('valid sorted imports', async () => {
    const code = `import { a } from 'a';
import { b } from 'b';

console.log(a, b);
`;
    const results = await eslint.lintText(code, { filePath: 'test.ts' });
    const errorMsgs = results.flatMap((result) => result.messages.map((msg) => msg.message));
    expect(errorMsgs.length).toEqual(0);
  });

  test('invalid unsorted imports', async () => {
    const code = `import { b } from 'b';
import { a } from 'a';

console.log(a, b);
`;
    const eslintNoFix = new ESLint({
      overrideConfigFile: true,
      overrideConfig: typescript,
      fix: false,
    });
    const results = await eslintNoFix.lintText(code, { filePath: 'test.ts' });
    const errorMsgs = results.flatMap((result) => result.messages.map((msg) => msg.message));
    expect(errorMsgs.some((msg) => msg.includes('Run autofix to sort these imports'))).toBe(true);
  });

  test('autofix unsorted imports', async () => {
    const code = `import { b } from 'b';
import { a } from 'a';

console.log(a, b);
`;
    const results = await eslint.lintText(code, { filePath: 'test.ts' });
    expect(results[0].output).toBe(`import { a } from 'a';\nimport { b } from 'b';\n\nconsole.log(a, b);\n`);
  });

  test('autofix mixed imports with side effects', async () => {
    const code = `import 'index.css';
import { b } from 'b';
import 'style.css';
import { a } from 'a';

console.log(a, b);
`;
    const results = await eslint.lintText(code, { filePath: 'test.ts' });
    expect(results[0].output).toBe(
      `import 'index.css';\nimport 'style.css';\n\nimport { a } from 'a';\nimport { b } from 'b';\n\nconsole.log(a, b);\n`
    );
  });

  test('valid sorted exports', async () => {
    const code = `export { a } from 'a';
export { b } from 'b';
`;
    const results = await eslint.lintText(code, { filePath: 'test.ts' });
    const errorMsgs = results.flatMap((result) => result.messages.map((msg) => msg.message));
    expect(errorMsgs.length).toEqual(0);
  });

  test('invalid unsorted exports', async () => {
    const code = `export { b } from 'b';
export { a } from 'a';
`;
    const eslintNoFix = new ESLint({
      overrideConfigFile: true,
      overrideConfig: typescript,
      fix: false,
    });
    const results = await eslintNoFix.lintText(code, { filePath: 'test.ts' });
    const errorMsgs = results.flatMap((result) => result.messages.map((msg) => msg.message));
    expect(errorMsgs.length).toBeGreaterThan(0);
    expect(errorMsgs.some((msg) => msg.includes('Run autofix to sort these exports'))).toBe(true);
  });

  test('autofix unsorted exports', async () => {
    const code = `export { b } from 'b';
export { a } from 'a';
`;
    const results = await eslint.lintText(code, { filePath: 'test.ts' });
    expect(results[0].output).toBe(`export { a } from 'a';\nexport { b } from 'b';\n`);
  });
});
