import { defineConfig } from "eslint/config";
import eslintConfigPrettier from "eslint-config-prettier/flat";
import eslintPluginAstro from "eslint-plugin-astro";

export default defineConfig([
  eslintConfigPrettier,
  eslintPluginAstro.configs.recommended,
  {
    rules: {},
  },
]);
