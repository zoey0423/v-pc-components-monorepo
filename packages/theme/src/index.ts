// 主入口文件
export * from './tokens/colors'
export * from './tokens/spacing'

// 生成 CSS 变量的函数
export function generateCSSVariables() {
  return {
    // 从 tokens 生成 CSS 变量字符串
    '--color-primary': '#3b82f6',
    '--color-primary-hover': '#2563eb',
    '--spacing-sm': '8px',
    '--spacing-md': '16px',
    // ... 更多变量
  }
}