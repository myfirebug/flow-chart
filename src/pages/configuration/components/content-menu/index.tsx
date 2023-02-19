import { FC } from 'react'
import CreatePortal from '@src/components/create-portal'
import './index.scss'

interface IContentMenuProps {}

const ContentMenu: FC<IContentMenuProps> = () => {
  return (
    <CreatePortal>
      <div id='js-content-menu' className='app-content-menu'>
        <ul>
          <li className='app-content-menu__item'>
            <span className='name'>配置</span>
          </li>
        </ul>
        <ul>
          <li className='app-content-menu__item'>
            <span className='name'>撤销</span>
            <span className='value'>Ctrl+Z</span>
          </li>
          <li className='app-content-menu__item'>
            <span className='name'>重做</span>
            <span className='value'>Ctrl+shift+Z</span>
          </li>
        </ul>
      </div>
    </CreatePortal>
  )
}

export default ContentMenu
