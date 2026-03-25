import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";

export default defineConfig([
  // 1. Configuração recomendada do ESLint (equivalente ao antigo extends)
  js.configs.recommended,

  // 2. Suas configurações personalizadas e regras
  {
    files: ["**/*.{js,mjs,cjs}"],
    languageOptions: {
      globals: {
        ...globals.browser,
      },
    },
    rules: {
      "semi": ["error", "always"],
      "quotes": ["error", "single"],
      // Você pode adicionar ou sobrescrever outras regras aqui
    },
  },

  // 3. Configuração específica para CommonJS
  {
    files: ["**/*.js"],
    languageOptions: {
      sourceType: "commonjs",
    },
  },
]);