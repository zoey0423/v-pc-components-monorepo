import { Button } from '@vcredit-sys-components/ui'

export function PlaygroundPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">组件试验场</h1>
        
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Button 组件</h2>
          <div className="space-x-3 space-y-3">
            <Button size="small" variant="primary" onClick={() => alert('hi')}>
              小按钮
            </Button>
            <Button size="middle" variant="outline" loading>
              加载中
            </Button>
            <Button size="large" variant="secondary" disabled>
              禁用按钮
            </Button>
            <Button block variant="primary" onClick={() => alert('no')}>
              块级按钮
            </Button>
          </div>
        </section>
      </div>
    </div>
  )
}