import isLocalLink from 'Utils/isLocalLink';

const localLinks = [
  '/about',
  '/foobar',
  '/test'
];

const nonLocalLinks = [
  'https://www.google.com',
  'https://www.github.com',
  'https://www.gitlab.com'
];

describe('utils/isLocalLink', () => {
  for (const [index, localLink] of localLinks.entries()) {
    it(`should identify a local link (${index + 1})`, () => {
      const result = isLocalLink(localLink);

      expect(result).toBe(true);
    });
  }

  for (const [index, nonLocalLink] of nonLocalLinks.entries()) {
    it(`should identify a non-local link (${index + 1})`, () => {
      const result = isLocalLink(nonLocalLink);

      expect(result).toBe(false);
    });
  }
});