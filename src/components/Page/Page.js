
import { h } from 'hyperapp'
import './Page.scss'

export default ({ pic: url }, children) => {
  return (
    <div class="Page" style={{ backgroundImage: `url('${url}')` }}>
      { children }
    </div>
  )
}
