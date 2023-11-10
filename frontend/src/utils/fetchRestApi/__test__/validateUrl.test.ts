import { describe, it, expect } from '@jest/globals';

import { validateUrl } from '../validateUrl';

describe('validateUrl', () => {
  it('should return true when the url is valid', () => {
    const url = 'https://localhost';
    expect(validateUrl(url)).toEqual(url);
  });

  it('should throw when the url is invalid', () => {
    expect(() => validateUrl('invalid')).toThrow('URL is invalid');
  });
});
