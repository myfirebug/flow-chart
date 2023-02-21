import { FC } from 'react'
import { Form } from 'antd'
import { IPARAM } from '@src/types'
import CustomInput from './input'
// 自定义input
interface ICustomFormProps {
  list: IPARAM[]
  selectHandler?: (id: string) => void
  selectId?: string
}

const CustomForm: FC<ICustomFormProps> = ({
  list,
  selectHandler,
  selectId
}) => {
  return (
    <Form labelCol={{ span: 7 }} wrapperCol={{ span: 17 }} autoComplete='off'>
      {list.map((item) => {
        if (item.formType === 'Input') {
          return (
            <CustomInput
              key={item.id}
              item={item}
              selectHandler={selectHandler}
              selectId={selectId}
            />
          )
        }
      })}
    </Form>
  )
}

export default CustomForm
