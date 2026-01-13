export const colors = {
  // 基础色彩 - 蓝色系
  blue: {
    50: '#eff6ff',
    100: '#dbeafe',
    200: '#bfdbfe',
    300: '#93c5fd',
    400: '#60a5fa',
    500: '#3b82f6',
    600: '#2563eb',
    700: '#1d4ed8',
    800: '#1e40af',
    900: '#1e3a8a'
  },
  
  // 灰色系
  gray: {
    50: '#f9fafb',
    100: '#f3f4f6',
    200: '#e5e7eb',
    300: '#d1d5db',
    400: '#9ca3af',
    500: '#6b7280',
    600: '#4b5563',
    700: '#374151',
    800: '#1f2937',
    900: '#111827'
  },
  
  // 功能色彩
  green: {
    50: '#ecfdf5',
    500: '#10b981',
    600: '#059669'
  },
  
  red: {
    50: '#fef2f2',
    500: '#ef4444',
    600: '#dc2626'
  },
  
  yellow: {
    50: '#fffbeb',
    500: '#f59e0b',
    600: '#d97706'
  }
}

// 语义化色彩令牌
export const semanticColors = {
  // 主色调
  primary: colors.blue[500],
  primaryHover: colors.blue[600],
  primaryActive: colors.blue[700],
  
  // 功能色
  success: colors.green[500],
  successHover: colors.green[600],
  
  warning: colors.yellow[500],
  warningHover: colors. yellow[600],
  
  error: colors.red[500],
  errorHover: colors. red[600],
  
  // 文本色彩
  text: {
    primary: colors.gray[900],
    secondary: colors.gray[600],
    tertiary: colors. gray[400],
    disabled: colors.gray[300],
    inverse: '#ffffff'
  },
  
  // 背景色彩
  background:  {
    primary: '#ffffff',
    secondary: colors. gray[50],
    tertiary: colors.gray[100],
    inverse: colors.gray[900]
  },
  
  // 边框色彩
  border: {
    primary: colors.gray[200],
    secondary: colors.gray[300],
    focus: colors.blue[500]
  }
}