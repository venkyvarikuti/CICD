// eslint.config.js (CommonJS style)
module.exports = {
    overrides: [
      {
        files: ['**/*.js', '**/*.ts'],
        parserOptions: {
          ecmaVersion: 2020,
          sourceType: 'module',
        },
        env: {
          node: true,
          es6: true,
        },
        rules: {
          'no-console': 'warn',
          'no-unused-vars': 'warn',
          'node/no-missing-require': 'error',
          'node/no-unpublished-require': 'error',
        },
      },
    ],
    plugins: [
      'node',
    ],
  };
  