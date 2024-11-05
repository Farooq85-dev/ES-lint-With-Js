/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    rules: {
      "no-unused-vars": "error",
      "no-undef": "error",
      "no-console": "error",
      "semi": ["error", "always"],
      "eqeqeq": "error",
      "curly": ["error", "all"],
      "quotes": ["warn", "single"],
      "no-trailing-spaces": "warn"
    },
  },
];
