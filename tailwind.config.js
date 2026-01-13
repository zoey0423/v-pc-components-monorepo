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
            hover: '#2563eb',
            active: '#1d4ed8',
          },
          text: {
            primary: '#111827',
            secondary: '#4b5563',
          },
          bg: {
            primary: '#ffffff',
            secondary: '#f9fafb',
            tertiary: '#f3f4f6',
          },
          border: {
            primary: '#e5e7eb',
            secondary: '#d1d5db',
            focus: '#3b82f6',
          },
        },
        borderRadius: {
          sm: '2px',
          DEFAULT: '4px',
          md: '6px',
          lg: '8px',
        },
        boxShadow: {
          sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
          DEFAULT:
            '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
          md:
            '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        },
      },
    },
    plugins: [],
  }