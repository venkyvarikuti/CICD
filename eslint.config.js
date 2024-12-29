// eslint.config.js
module.exports = {
    extends: [
      'eslint:recommended', // Enable recommended rules from ESLint
      'plugin:node/recommended', // Node.js-specific linting rules
    ],
    parserOptions: {
      ecmaVersion: 2020, // Supports ES2020 features like optional chaining
      sourceType: 'module', // For using ECMAScript modules (import/export)
    },
    env: {
      node: true, // Recognizes Node.js global variables and Node-specific rules
      es6: true, // Supports ES6 syntax
    },
    rules: {
      'no-console': 'warn', // Warns when using `console.log`
      'no-unused-vars': 'warn', // Warns when a variable is declared but not used
      'node/no-missing-require': 'error', // Ensures required modules are correctly imported
      'node/no-unpublished-require': 'error', // Ensures unpublished modules are not required
    },
  };
  