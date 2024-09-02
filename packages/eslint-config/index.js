import prettierConfig from "eslint-config-prettier"
import globals from "globals"

export default [
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node
      }
    }
  },
  prettierConfig
]
