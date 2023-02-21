import { FC, ReactNode } from 'react'
import { Tooltip } from 'antd'
import './index.scss'

interface IFormItemWrapProps {
  children: ReactNode
  selectHandler?: (
    id: string,
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => void
  id: string
  selectId?: string
}

const FormItemWrap: FC<IFormItemWrapProps> = ({
  children,
  selectHandler,
  id,
  selectId
}) => {
  return (
    <div className='app-custom-form-item'>
      {selectHandler ? (
        <div
          className={`edit ${selectId === id ? 'is-selected' : ''}`}
          onClick={(e) => selectHandler(id, e)}
          data-type='wrap'>
          {selectId === id ? (
            <div className='tools'>
              <Tooltip placement='top' title='复制'>
                <span
                  className={`app-icon ${selectId ? '' : 'is-disabled'}`}
                  data-type='copy'>
                  &#xe765;
                </span>
              </Tooltip>
              <Tooltip placement='top' title='删除'>
                <span
                  className={`app-icon ${selectId ? '' : 'is-disabled'}`}
                  data-type='delete'>
                  &#xe7c3;
                </span>
              </Tooltip>
            </div>
          ) : null}
        </div>
      ) : null}
      {children}
    </div>
  )
}

export default FormItemWrap
