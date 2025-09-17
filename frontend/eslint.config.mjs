import js from "@eslint/js";
import globals from "globals";
import pluginReact from "eslint-plugin-react";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    files: ["**/*.{js,jsx}"],
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: "module",
      globals: {
        ...globals.browser,
        jest: true,
        describe: true,
        test: true,
        expect: true,
      },
    },
    plugins: {
      js,
      react: pluginReact,
    },
    rules: {
      // 可根據需要調整
    },
    extends: ["js/recommended"],
  },
  pluginReact.configs.flat.recommended,
]);
