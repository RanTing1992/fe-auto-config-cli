module.exports = {
    env: {
      browser: true,
      es2021: true,
    },
    extends: ['standard', 'prettier', 'plugin:@typescript-eslint/recommended'],
    overrides: [],
    plugins: ['@typescript-eslint'],
    parserOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
    rules: {},
  }