// 表单项状态
export type FormItemStatus = 'success' | 'warning' | 'error' | 'validating' | ''

// 表单验证规则
export interface ValidationRule {
  required?: boolean
  message?: string
  pattern?: RegExp
  min?: number
  max?: number
  validator?: (value: unknown) => Promise<void> | void
}

// 表单项属性
export interface FormItemProps {
  label?: string
  name?:  string
  required?: boolean
  status?: FormItemStatus
  help?: string
  extra?: string
  rules?: ValidationRule[]
}