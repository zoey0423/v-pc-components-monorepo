// AUTO-GENERATED IMPORTS
import { Avatar } from '@vcredit-sys-components/ui'
import { Button } from '@vcredit-sys-components/ui'

// 组件注册表，用于在文档中动态渲染组件
export const componentRegistry = {
  // AUTO-GENERATED REGISTRY
  'Avatar': Avatar,
  'Button': Button,
}

export function getComponent(name: string) {
  return componentRegistry[name as keyof typeof componentRegistry]
}