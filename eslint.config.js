import { defineConfig } from 'eslint';

export default defineConfig({
  overrides: [
    {
      files: ['**/*.js', '**/*.ts'], // Adjust based on your file types
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
  // Directly include config objects you want to extend
  plugins: [
    'node', // Add your plugins here
  ],
  settings: {
    // Optional: Add any settings if necessary
  },
});
