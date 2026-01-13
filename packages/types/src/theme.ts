// 主题模式
export type ThemeMode = 'light' | 'dark'

// 主题配置
export interface ThemeConfig {
  mode: ThemeMode
  primaryColor?:  string
  borderRadius?: number
  fontSize?: number
}

// 主题上下文
export interface ThemeContextType {
  theme: ThemeConfig
  setTheme: (theme:  Partial<ThemeConfig>) => void
  toggleMode: () => void
}