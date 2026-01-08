import ReactDOM from 'react-dom/client'
import { Button } from '@vcredit-sys-components/ui'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Button onClick={() => alert('hi')}>Hello UI</Button>
)
