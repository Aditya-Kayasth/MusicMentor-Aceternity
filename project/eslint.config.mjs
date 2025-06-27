import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),

  {
    // Override specific rules to reduce strictness
    rules: {
      "@typescript-eslint/no-explicit-any": "off", // allow `any`
      "no-var": "warn", // allow `var` but warn
      "react-hooks/exhaustive-deps": "warn", // warn on missing deps instead of error
      "@typescript-eslint/explicit-module-boundary-types": "off", // allow implicit return types
    },
  },
];

export default eslintConfig;
