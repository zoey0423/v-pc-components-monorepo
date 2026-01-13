import { CSSProperties, ReactNode } from 'react';

// 基础组件属性
export interface BaseComponentProps {
  className?: string
  style?: CSSProperties
  id?: string
  'data-testid'?: string
}

// 组件尺寸
export type ComponentSize = 'small' | 'middle' | 'large'

// 组件状态
export type ComponentStatus = 'success' | 'warning' | 'error' | 'default'

// 组件变体
export type ComponentVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'link'

// 加载状态
export interface LoadingState {
  loading?:  boolean
  loadingText?: string
}

// 禁用状态
export interface DisabledState {
  disabled?:  boolean
}

// 带子元素的组件
export interface WithChildren {
  children?:  ReactNode
}

// 带点击事件的组件
export interface WithClick {
  onClick?:  (event: React.MouseEvent) => void
}