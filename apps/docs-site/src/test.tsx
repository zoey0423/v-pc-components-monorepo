export function TestComponent() {
    return (
      <div className="p-4">
        <div className="bg-red-500 text-white p-2 mb-2">这是红色背景</div>
        <div className="bg-blue-500 text-white p-2 mb-2">这是蓝色背景</div>
        <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded">
          绿色按钮
        </button>
      </div>
    )
  }