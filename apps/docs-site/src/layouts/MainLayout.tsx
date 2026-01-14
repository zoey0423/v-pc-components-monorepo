import { Outlet } from 'react-router-dom'
import { Sidebar } from '../components/Sidebar'
import { sidebarConfig } from '../generated/routes'

// 文档页布局（Header + Sidebar + Content）
export function MainLayout() {
  return (
    <div className="flex min-h-screen">
      {/* 左侧导航 - 使用自动生成的配置 */}
      <Sidebar config={sidebarConfig} />
      
      {/* 右侧内容区域 */}
      <main className="flex-1 overflow-auto">
        <Outlet />
      </main>
    </div>
  )
}