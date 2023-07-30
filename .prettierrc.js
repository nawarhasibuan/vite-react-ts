// prettier.config.js, .prettierrc.js, prettier.config.mjs, or .prettierrc.mjs

/** @type {import("prettier").Options} */
const config = {
  trailingComma: 'es5',
  tabWidth: 2,
  semi: true,
  singleQuote: true,
  bracketSpacing: true,
  jsxBracketSameLine: false,
  plugins: ['prettier-plugin-tailwindcss'],
  tailwindConfig: 'tailwind.config.js',
};

export default config;
