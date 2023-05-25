module.exports = {
  "root": true,
  "env": {
    "node": true,
    "vue/setup-compiler-macros": true
  },
  "extends": [
    "plugin:vue/vue3-essential",
    "eslint:recommended"
  ],
  "parserOptions": {
    "parser": "@babel/eslint-parser"
  },
  "rules": {},
  overrides: [
    {
      files: [
        '**/__tests__/*.{j,t}s?(x)',
        '**/tests/unit/**/*.spec.{j,t}s?(x)',
        '**/*spec.[j,t]s?(x)'
      ],
      env: {
        jest: true
      }
    },
    {
      files: [
        '**/__tests__/*.{j,t}s?(x)',
        '**/tests/unit/**/*.spec.{j,t}s?(x)'
      ],
      env: {
        jest: true
      }
    }
  ],
};
