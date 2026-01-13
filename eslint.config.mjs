import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

export default [
  {
    ignores: ['dist', 'node_modules', '**/*.config.js', '**/*.config.ts', '**/*.config.mjs', 'pnpm-lock.yaml'],
  },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
  },
  // apps/docs-site 配置
  {
    files: ['apps/docs-site/**/*.{ts,tsx}'],
    languageOptions: {
      parserOptions: {
        tsconfigRootDir: path.join(__dirname, 'apps/docs-site'),
        project: ['./tsconfig.app.json', './tsconfig.node.json'],
      },
    },
  },
  // packages/ui 配置
  {
    files: ['packages/ui/**/*.{ts,tsx}'],
    languageOptions: {
      parserOptions: {
        tsconfigRootDir: path.join(__dirname, 'packages/ui'),
        project: ['./tsconfig.json'],
      },
    },
  },
  // packages/theme 配置
  {
    files: ['packages/theme/**/*.{ts,tsx}'],
    languageOptions: {
      parserOptions: {
        tsconfigRootDir: path.join(__dirname, 'packages/theme'),
        project: ['./tsconfig.json'],
      },
    },
  },
  // packages/types 配置
  {
    files: ['packages/types/**/*.{ts,tsx}'],
    languageOptions: {
      parserOptions: {
        tsconfigRootDir: path.join(__dirname, 'packages/types'),
        project: ['./tsconfig.json'],
      },
    },
  },
  // packages/utils 配置
  {
    files: ['packages/utils/**/*.{ts,tsx}'],
    languageOptions: {
      parserOptions: {
        tsconfigRootDir: path.join(__dirname, 'packages/utils'),
        project: ['./tsconfig.json'],
      },
    },
  },
  // React 相关配置
  {
    files: ['**/*.{jsx,tsx}'],
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
    },
  },
]

