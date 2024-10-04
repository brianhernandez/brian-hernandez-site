// @ts-check
import js from '@eslint/js'
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt([
  {
    plugins: {
    },
    rules: {
    },
    languageOptions: {
    },
  },
  // eslintPluginPrettierRecommended,
]).prepend(js.configs.recommended)
