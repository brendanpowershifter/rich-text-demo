module.exports = {
  env: {
    browser: true,
    es6: true,
    jest: true,
    "cypress/globals": true,
  },
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: "module",
  },
  plugins: ["react", "@typescript-eslint", "prettier", "cypress"],
  extends: [
    "plugin:react/recommended",
    "airbnb",
    "plugin:prettier/recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:import/typescript",
    "plugin:cypress/recommended",
  ],
  settings: {
    "import/resolver": {
      typescript: {},
    },
  },
  rules: {
    "prettier/prettier": "error",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/no-unused-vars": "off",
    "react/jsx-filename-extension": [
      1,
      { extensions: [".js", ".jsx", ".tsx"] },
    ],
    "@typescript-eslint/member-delimiter-style": [
      1,
      {
        multiline: {
          delimiter: "none",
          requireLast: false,
        },
        singleline: {
          delimiter: "semi",
          requireLast: false,
        },
      },
    ],
    "react/prop-types": [0],
    "import/extensions": ["error", "never"],
    "react/jsx-props-no-spreading": [0],
    "import/no-extraneous-dependencies": [
      "error",
      {
        devDependencies: [
          "**/*.test.js",
          "**/*.spec.js",
          "**/*.test.tsx",
          "**/*.test.ts",
          "**/*.spec.tsx",
          "cypress/**/*.js",
          "**/stories/**/*.tsx",
          "**/Stories/**/*.tsx",
          "**/*.stories.tsx",
          "src/Utils/TestUtils/**/*.ts",
          "src/Utils/TestUtils/**/*.tsx",
          "src/Utils/StorybookUtils/**/*.ts",
          "src/Utils/StorybookUtils/**/*.tsx",
        ],
      },
    ],
    "react/jsx-uses-react": "off",
    "react/react-in-jsx-scope": "off",
    camelcase: ["warn"],
  },
};
