module.exports = {
  extends: ["@open-wc/eslint-config", "plugin:prettier/recommended"],
  plugins: ["html", "jsdoc", "prettier"],
  parser: "@typescript-eslint/parser",
  ignorePatterns: ["**/docs/*", "**/coverage/*", "**/storybook-static/*"],
  rules: {
    "import/prefer-default-export": "off",
    "import/extensions": ["error", "always", { ignorePackages: true }],
    "import/no-extraneous-dependencies": [
      "error",
      {
        devDependencies: [
          "**/test/**/*.js",
          "**/*.config.{js,mjs,cjs}",
          "**/*.conf.{js,mjs,cjs}"
        ]
      }
    ]
  }
};
