import { describe, expect, it } from 'vitest';
import { slugify } from '../src/slugify.js';

describe('slugify', () => {
  it('lowercases words and joins them with a dash', () => {
    expect(slugify('Hello World')).toBe('hello-world');
  });

  it('trims leading and trailing separators', () => {
    expect(slugify('  padded  ')).toBe('padded');
  });

  it('keeps digits', () => {
    expect(slugify('Release 2.44')).toBe('release-2-44');
  });

  it('lowercases mixed-case words', () => {
    expect(slugify('MiXeD CaSe')).toBe('mixed-case');
  });
});
