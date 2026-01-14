import React from 'react'
import { cn } from '@vcredit-sys-components/utils'
import {
  BaseComponentProps,
  ComponentSize,
  ComponentVariant,
  WithChildren,
  WithClick,
  LoadingState,
  DisabledState,
} from '@vcredit-sys-components/types'

export interface ButtonProps
  extends BaseComponentProps,
    WithChildren,
    WithClick,
    LoadingState,
    DisabledState {
  children?: React.ReactNode
  loading?: boolean
  disabled?: boolean
  size?: ComponentSize
  variant?: ComponentVariant
  block?: boolean
  htmlType?: 'button' | 'submit' | 'reset'
}

const sizeClasses: Record<ComponentSize, string> = {
  small: 'px-3 py-1 text-xs',
  middle: 'px-4 py-2 text-sm',
  large: 'px-20 py-16 text-lg',
}

const variantClasses: Record<ComponentVariant, string> = {
  primary:
    'bg-blue-500 text-white border-blue-500 hover:bg-blue-600 hover:border-blue-600',
  secondary:
    'bg-gray-100 text-gray-900 border-gray-300 hover:bg-gray-200',
  outline:
    'bg-transparent text-blue-500 border-blue-500 hover:bg-blue-50',
  ghost:
    'bg-transparent text-blue-500 border-transparent hover:bg-gray-100',
  link:
    'bg-transparent text-blue-500 border-transparent underline-offset-4 hover:underline',
}

export function Button({
  children,
  size = 'middle',
  variant = 'primary',
  loading = false,
  disabled = false,
  block = false,
  className,
  htmlType = 'button',
  onClick,
  ...rest
}: ButtonProps) {
  const handleClick = (event: React.MouseEvent) => {
    if (loading || disabled) return
    onClick?.(event)
  }

  return (
    <button
      type={htmlType}
      className={cn(
        // base 样式（对应原来的 .btn）
       'inline-flex items-center justify-center gap-1 rounded-md font-medium transition-all select-none',
         'transition-all select-none border outline-none',
        // 尺寸 & 变体
        sizeClasses[size],
        variantClasses[variant],
        // 状态
        {
          'opacity-60 cursor-not-allowed': disabled,
          'cursor-wait': loading,
          'w-full': block,
        },
        className,
      )}
      disabled={disabled || loading}
      onClick={handleClick}
      {...rest}
    >
      {loading && <span className="mr-1 animate-spin">⏳</span>}
      {children}
    </button>
  )
}