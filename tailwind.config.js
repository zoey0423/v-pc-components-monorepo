/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './apps/docs-site/index.html',
    './apps/docs-site/src/**/*.{ts,tsx}',
    './packages/ui/src/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#3b82f6',
          50: '#eff6ff',
          100: '#dbeafe',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
        },
        // 使用更标准的命名
        'custom-bg': {
          primary: '#ffffff',
          secondary:  '#f9fafb',
          tertiary: '#f3f4f6',
        },
        'custom-text': {
          primary: '#111827',
          secondary: '#4b5563',
        },
        'custom-border': {
          primary: '#e5e7eb',
          secondary: '#d1d5db',
          focus:  '#3b82f6',
        },
      },
    },
  },
  plugins: [],
}