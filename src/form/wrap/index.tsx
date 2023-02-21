import { FC, ReactNode } from 'react'
import './index.scss'

interface IFormItemWrapProps {
  children: ReactNode
  selectHandler?: (id: string) => void
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
          onClick={() => selectHandler(id)}></div>
      ) : null}
      {children}
    </div>
  )
}

export default FormItemWrap
