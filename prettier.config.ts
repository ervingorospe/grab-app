import type { Config } from "prettier"

const config: Config = {
  semi: false, // No semicolons
  singleQuote: true, // Use single quotes
  tabWidth: 2, // Indentation size
  trailingComma: "es5", // Add trailing commas where valid in ES5
  bracketSpacing: true, // Space between brackets
  arrowParens: "always", // Always include parentheses around arrow functions
  plugins: ["prettier-plugin-tailwindcss"], // ✅ Tailwind CSS support
  tailwindFunctions: ["clsx", "classnames"], // Supports Tailwind utility functions
}

export default config