import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@vcredit-sys-components/ui': path.resolve(
        __dirname,
        '../../packages/ui/src',
      ),
      '@vcredit-sys-components/utils': path.resolve(
        __dirname,
        '../../packages/utils/src',
      ),
      '@vcredit-sys-components/types': path.resolve(
        __dirname,
        '../../packages/types/src',
      ),
      '@vcredit-sys-components/theme': path.resolve(
        __dirname,
        '../../packages/theme/src',
      ),
    },
  },
})
