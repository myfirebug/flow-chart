import { FC, useEffect } from 'react'
import { Form } from 'antd'
import { IPARAM } from '@src/types'
// 输入框
import CustomInput from './input'
// 数字输入框
import CustomInputNumber from './input-number'
// 自定义input
interface ICustomFormProps {
  list: IPARAM[]
  selectHandler?: (
    id: string,
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => void
  selectId?: string
}

const CustomForm: FC<ICustomFormProps> = ({
  list,
  selectHandler,
  selectId
}) => {
  // 配置from
  const [form] = Form.useForm()
  useEffect(() => {
    if (list) {
      let params: any = {}
      list.forEach((item) => {
        params[item.field] = item.value
      })
      form.setFieldsValue(params)
    }
  }, [form, list])
  return (
    <Form
      labelCol={{ span: 7 }}
      wrapperCol={{ span: 17 }}
      autoComplete='off'
      colon={false}
      labelAlign='left'
      form={form}>
      {list.map((item) => {
        if (
          item.formType === 'Input' ||
          item.formType === 'TextArea' ||
          item.formType === 'Password'
        ) {
          return (
            <CustomInput
              type={item.formType}
              key={item.id}
              item={item}
              selectHandler={selectHandler}
              selectId={selectId}
            />
          )
        }
        if (item.formType === 'InputNumber') {
          return (
            <CustomInputNumber
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
