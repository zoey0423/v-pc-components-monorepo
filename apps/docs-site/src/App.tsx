import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { HomePage } from './pages/Home'
import { ComponentPage } from './pages/ComponentPage' 
import { DocPage } from './pages/DocPage'
import { MainLayout } from './layouts/MainLayout'
// import { routes } from './routes'
import { PlaygroundPage } from './pages/PlaygroungPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* 首页 */}
        <Route path="/" element={<HomePage />} />
        
        {/* 文档布局 */}
        <Route path="/docs" element={<MainLayout />}>
          {/* 指南页面 */}
          <Route path="guide/: slug" element={<DocPage />} />
          
          {/* 组件页面 */} 
          <Route path="components/: slug" element={<ComponentPage />} />
          
          {/* 默认跳转 */}
          <Route index element={<Navigate to="/docs/guide/getting-started" replace />} />
        </Route>
        
        {/* 临时测试页面 */}
        <Route path="/playground" element={<PlaygroundPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App