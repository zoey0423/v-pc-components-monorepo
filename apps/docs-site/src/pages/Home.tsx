export function HomePage() {
    return (
      <div className="min-h-screen bg-white text-gray-900 flex items-center justify-center">
        <div className="space-y-6 text-center">
          <h1 className="text-4xl font-bold">PC UI Components</h1>
          <p className="text-gray-600">企业级 React 组件库</p>
          <div className="space-x-4">
            <a 
              href="/docs" 
              className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600"
            >
              开始使用
            </a>
            <a 
              href="/playground" 
              className="bg-gray-100 text-gray-900 px-6 py-2 rounded hover:bg-gray-200"
            >
              在线试用
            </a>
          </div>
        </div>
      </div>
    )
  }