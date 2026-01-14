//渲染组件页（文档+demo+API）
import { useParams } from 'react-router-dom'
import { routes } from '../generated/routes'

export function ComponentPage() {
  const { slug } = useParams<{ slug: string }>()
  
  // 从生成的路由数据中查找匹配的组件（不区分大小写）
  const component = routes.find(
    route => route.component.toLowerCase() === slug?.toLowerCase()
  )
  
  if (!component) {
    return (
      <div className="max-w-4xl mx-auto p-6">
        <div className="text-center p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">组件文档未找到</h2>
          <p className="text-gray-600">组件 "{slug}" 不存在，请检查路径是否正确。</p>
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">{component.meta.title}</h1>
      {component.meta.description && (
        <p className="text-gray-600 mb-6">{component.meta.description}</p>
      )}
      
      {/* 这里可以动态加载 MDX 文档 */}
      <div className="prose max-w-none">
        <p>组件文档内容...</p>
        
        {/* 示例区域 */}
        {slug?.toLowerCase() === 'button' && <ButtonExamples />}
      </div>
    </div>
  )
}

// 按钮示例组件
function ButtonExamples() {
  return (
    <div className="border rounded-lg p-4 bg-gray-50">
      <h3>示例</h3>
      {/* 你的按钮示例代码 */}
    </div>
  )
}