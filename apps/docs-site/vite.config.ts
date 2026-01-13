import { defineConfig, type PluginOption } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  // `tailwindcss()` 当前类型返回的是一组插件，和 Vite 内部的 Plugin 类型
  // 在类型层面不完全兼容，这里显式断言为 PluginOption[] 解决 TS 类型冲突
  plugins: [react(), tailwindcss()] as PluginOption[],
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
