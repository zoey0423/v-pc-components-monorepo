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
  small: 'px-2 py-1 text-xs',
  middle: 'px-3 py-2 text-sm',
  large: 'px-4 py-3 text-base',
}

const variantClasses: Record<ComponentVariant, string> = {
  primary:
    'bg-primary text-white border border-primary hover:bg-primary-hover hover:border-primary-hover',
  secondary:
    'bg-bg-secondary text-text-primary border border-border-primary',
  outline:
    'bg-transparent text-primary border border-primary',
  ghost:
    'bg-transparent text-primary border border-transparent hover:bg-bg-secondary',
  link:
    'bg-transparent text-primary border border-transparent underline-offset-4 hover:underline',
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
        'inline-flex items-center justify-center gap-1 rounded-md text-sm font-medium leading-normal',
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