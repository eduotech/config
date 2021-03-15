module.exports = {
  extends: ['airbnb', 'airbnb/hooks', 'prettier'],
  env: {
    es2020: true,
    node: true,
    browser: true,
    jest: true,
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 11,
    sourceType: 'module',
  },
  settings: {
    react: { version: 'detect' },
  },
  rules: {
    'import/prefer-default-export': 'off',
  },
};
