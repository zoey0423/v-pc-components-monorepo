import ReactDOM from 'react-dom/client'
import { Button } from '@vcredit-sys-components/ui'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <div className="min-h-screen bg-bg-primary text-text-primary p-5 space-x-3">
    <Button size="small" variant="primary" onClick={() => alert('hi')}>
      小按钮
    </Button>

    <Button size="middle" variant="outline" loading >
      加载中
    </Button>

    <Button size="large" variant="secondary" disabled>
      禁用按钮
    </Button>

    <Button block variant="primary" onClick={() => alert('no')}>
      块级按钮
    </Button>
  </div>,
)