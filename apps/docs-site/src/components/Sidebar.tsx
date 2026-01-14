import React from 'react'
import { Link, useLocation } from 'react-router-dom'

interface SidebarProps {
  config: Record<string, Array<{
    path: string
    title: string
    description: string
  }>>
}

export const Sidebar: React.FC<SidebarProps> = ({ config }) => {
  const location = useLocation()

  return (
    <div className="w-64 bg-gray-50 border-r min-h-screen p-4">
      <div className="mb-6">
        <h2 className="text-lg font-semibold text-gray-900">组件文档</h2>
      </div>
      
      {Object.entries(config).map(([category, items]) => (
        <div key={category} className="mb-6">
          <h3 className="font-semibold text-gray-900 mb-2 text-sm uppercase tracking-wide">
            {category}
          </h3>
          <ul className="space-y-1">
            {items.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path. replace('/components/', '/docs/components/')} // 适配你的路由结构
                  className={`block px-3 py-2 rounded text-sm transition-colors ${
                    location.pathname === item.path. replace('/components/', '/docs/components/')
                      ? 'bg-blue-100 text-blue-700 font-medium'
                      : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
                  }`}
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}