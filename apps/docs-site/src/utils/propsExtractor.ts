interface PropInfo {
    name: string
    type: string
    defaultValue?:  string
    required: boolean
    description?: string
  }
  
  // 组件 Props 信息注册表
  const componentPropsRegistry: Record<string, PropInfo[]> = {
    // 这里可以手动维护，或者通过 TypeScript 编译器 API 自动提取
    Button: [
      {
        name: 'children',
        type: 'React.ReactNode',
        required: false,
        description: '按钮内容'
      },
      {
        name: 'variant',
        type: '"primary" | "secondary" | "danger"',
        defaultValue: 'primary',
        required: false,
        description: '按钮样式变体'
      },
      {
        name: 'size',
        type: '"small" | "medium" | "large"',
        defaultValue: 'medium',
        required: false,
        description: '按钮尺寸'
      },
      {
        name: 'disabled',
        type: 'boolean',
        defaultValue: 'false',
        required: false,
        description: '是否禁用'
      },
      {
        name: 'onClick',
        type: '(event: MouseEvent) => void',
        required: false,
        description: '点击事件处理函数'
      }
    ]
  }
  
  export function getComponentProps(componentName: string): PropInfo[] {
    return componentPropsRegistry[componentName] || []
  }
  
  // 自动注册组件 Props（可以通过构建时工具生成）
  export function registerComponentProps(componentName: string, props: PropInfo[]) {
    componentPropsRegistry[componentName] = props
  }