import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { HomePage } from './pages/Home'
import { DocPage } from './pages/DocPage'
import { MainLayout } from './layouts/MainLayout'
import { PlaygroundPage } from './pages/PlaygroungPage'
// import { routes } from './generated/routes' // 导入自动生成的路由
import { ComponentPage } from './pages/ComponentPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* 首页 */}
        <Route path="/" element={<HomePage />} />
        
        {/* 文档布局 */}
        <Route path="/docs" element={<MainLayout />}>
          {/* 指南页面 */}
          <Route path="guide/:slug" element={<DocPage />} />
          
          {/* 自动生成的组件路由 */}
          <Route path="components/:slug" element={<ComponentPage />} />
          
          {/* 默认页：直接进入一个存在的组件文档（避免跳到未知的 getting-started） */}
          {/* <Route index element={<Navigate to="/docs/components/button" replace />} /> */}
        </Route>
        
        {/* 临时测试页面 */}
        <Route path="/playground" element={<PlaygroundPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App