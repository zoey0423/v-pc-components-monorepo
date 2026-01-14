import React from 'react'
import { getComponentProps } from '../utils/propsExtractor'

interface PropsTableProps {
  component: string
}

export const PropsTable: React.FC<PropsTableProps> = ({ component }) => {
  const props = getComponentProps(component)

  if (!props || props.length === 0) {
    return <div className="text-gray-500">暂无 Props 信息</div>
  }

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border border-gray-200 rounded-lg">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-4 py-2 text-left border-b">属性名</th>
            <th className="px-4 py-2 text-left border-b">类型</th>
            <th className="px-4 py-2 text-left border-b">默认值</th>
            <th className="px-4 py-2 text-left border-b">必填</th>
            <th className="px-4 py-2 text-left border-b">描述</th>
          </tr>
        </thead>
        <tbody>
          {props.map((prop, index) => (
            <tr key={index} className="border-b">
              <td className="px-4 py-2 font-mono text-sm">{prop.name}</td>
              <td className="px-4 py-2 font-mono text-sm text-blue-600">{prop.type}</td>
              <td className="px-4 py-2 font-mono text-sm">{prop.defaultValue || '-'}</td>
              <td className="px-4 py-2 text-sm">
                {prop.required ? (
                  <span className="text-red-500">是</span>
                ) : (
                  <span className="text-gray-500">否</span>
                )}
              </td>
              <td className="px-4 py-2 text-sm">{prop.description || '-'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}