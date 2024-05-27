import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import pluginVue from 'eslint-plugin-vue';
import eslint from '@eslint/js';
import eslintConfigPrettier from 'eslint-config-prettier';
import vueParser from 'vue-eslint-parser';

/**
 * tseslint.config is an optional helper: https://typescript-eslint.io/packages/typescript-eslint#config
 */
export default tseslint.config(
  {
    languageOptions: {
      globals: globals.browser,
      // parser: 'vue-eslint-parser', // parser for eslint-plugin-vue plugin to parse .vue files (https://eslint.vuejs.org/user-guide/#how-to-use-a-custom-parser)
      parser: vueParser, // https://typescript-eslint.io/troubleshooting/#i-am-running-into-errors-when-parsing-typescript-in-my-vue-files
      parserOptions: {
        // project: true, // indicates to find the closest tsconfig.json for each source file (https://typescript-eslint.io/getting-started/typed-linting/)
        // tsconfigRootDir: import.meta.dirname, // tells our parser the absolute path of your project's root directory (https://typescript-eslint.io/getting-started/typed-linting/)
        parser: tseslint.parser, // parser for typescript-eslint plugin (https://typescript-eslint.io/troubleshooting/#i-am-running-into-errors-when-parsing-typescript-in-my-vue-files)
        // parser: "@typescript-eslint/parser",
        extraFileExtensions: ['.vue'],
      },
    },
  },

  /**
   * typescript-eslint configuration: https://typescript-eslint.io/users/configs/#recommended-configurations
   */
  eslint.configs.recommended,
  // ...tseslint.configs.recommendedTypeChecked,
  // ...tseslint.configs.stylisticTypeChecked,

  /**
   * prettier: https://github.com/prettier/eslint-config-prettier
   */
  eslintConfigPrettier,

  /**
   * eslint-plugin-vue configuration: https://eslint.vuejs.org/user-guide/#bundle-configurations-eslint-config-js
   */
  pluginJs.configs.recommended,
  ...pluginVue.configs['flat/recommended']
);
