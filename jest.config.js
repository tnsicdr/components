module.exports = {
  transform: {
    '.(ts|tsx|js|jsx)': ['jest-esbuild', {
      jsx: 'automatic'
    }],
  },
  testRegex: '(/__tests__/.*|\\.(test|spec))\\.(ts|tsx|js|jsx)$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  testEnvironment: 'jsdom',
};
