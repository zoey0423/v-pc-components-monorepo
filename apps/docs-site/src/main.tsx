import ReactDOM from 'react-dom/client'
import { Button } from '@vcredit-sys-components/ui'

ReactDOM.createRoot(document. getElementById('root')!).render(
  <div style={{ padding: '20px' }}>
    <Button size="small" variant="primary">
      小按钮
    </Button>
    
    <Button size="middle" variant="outline" loading>
      加载中
    </Button>
    
    <Button size="large" variant="secondary" disabled>
      禁用按钮
    </Button>
    
    <Button block variant="primary">
      块级按钮
    </Button>
  </div>
)