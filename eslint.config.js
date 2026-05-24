import js from '@eslint/js'
import eslintConfigPrettier from 'eslint-config-prettier'
import tseslint from '@typescript-eslint/eslint-plugin'
import tsparser from '@typescript-eslint/parser'
import prettier from 'eslint-plugin-prettier'
import simpleImportSort from 'eslint-plugin-simple-import-sort'
import tailwindcss from 'eslint-plugin-tailwindcss'
import globals from 'globals'

export default [
  {
    ignores: ['dist', 'node_modules', 'coverage', 'build'],
  },
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    languageOptions: {
      parser: tsparser,
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.es2021,
      },
    },
    plugins: {
      '@typescript-eslint': tseslint,
      prettier,
      'simple-import-sort': simpleImportSort,
      tailwindcss,
    },
    rules: {
      ...js.configs.recommended.rules,
      ...tseslint.configs.recommended.rules,
      'prettier/prettier': 'error',
      'simple-import-sort/imports': 'error',
      'simple-import-sort/exports': 'error',
      'tailwindcss/classnames-order': 'error',
      'tailwindcss/no-custom-classname': 'off',
    },
    settings: {
      tailwindcss: {
        callees: ['classnames', 'clsx', 'ctl'],
        config: 'tailwind.config.js',
      },
    },
  },
  eslintConfigPrettier,
]
