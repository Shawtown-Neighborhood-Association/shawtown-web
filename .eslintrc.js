const OFF = 0;
const WARN = 1;
const ERROR = 2;

module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:jsx-a11y/recommended'
  ],
  rules: {
    '@typescript-eslint/explicit-function-return-type': OFF,
    'no-only-tests/no-only-tests': ERROR,
    'react/prop-types': OFF,
    'react-hooks/rules-of-hooks': ERROR,
    'react-hooks/exhaustive-deps': WARN,
    'react/button-has-type': ERROR
  },
  env: {
    browser: true,
    jest: true,
    node: true,
    es6: true
  },
  plugins: ['no-only-tests', 'react-hooks'],
  settings: {
    react: {
      version: 'detect'
    }
  }
};
