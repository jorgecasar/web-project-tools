module.exports = {
  arrowParens: 'avoid',
  bracketSpacing: true,
  endOfLine: 'auto',
  printWidth: 80,
  proseWrap: 'always',
  semi: false,
  singleQuote: true,
  trailingComma: 'all',
  tabWidth: 2,
  useTabs: false,
  overrides: [
    {
      files: 'package*.json',
      options: {
        printWidth: 1000,
      },
    },
    {
      files: '*.yml',
      options: {
        singleQuote: false,
      },
    },
  ],
}
