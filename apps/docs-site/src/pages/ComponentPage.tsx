//渲染组件页（文档+demo+API）
import { useParams } from 'react-router-dom'
import { componentRoutes } from '../routes/components'

export function ComponentPage() {
  const { slug } = useParams()
  const component = componentRoutes.find(route => route.key === slug)
  
  if (!component) {
    return <div>组件不存在</div>
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">{component.title}</h1>
      
      {/* 这里可以动态加载 MDX 文档 */}
      <div className="prose max-w-none">
        <p>组件文档内容...</p>
        
        {/* 示例区域 */}
        {slug === 'button' && <ButtonExamples />}
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