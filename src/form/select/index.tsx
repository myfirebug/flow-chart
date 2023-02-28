import { FC } from 'react'
import { Select, Form } from 'antd'
import { IPARAM } from '@src/types'
// 自定义表单项盒子
import FormItemWrap from '../wrap'
const { Option } = Select
interface ICustomInputProps {
  item: IPARAM
  selectHandler?: (
    id: string,
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => void
  selectId?: string
}

const CustomInput: FC<ICustomInputProps> = ({
  item,
  selectHandler,
  selectId
}) => {
  console.log(item, 'select')
  return (
    <FormItemWrap
      selectHandler={selectHandler}
      id={item.id}
      selectId={selectId}>
      <Form.Item
        label={item.label}
        name={item.field}
        tooltip={item.tooltip}
        required={item.required}
        rules={[{ required: item.require }]}>
        <Select
          allowClear
          disabled={item.disabled}
          placeholder={item.placeholder}>
          <Option>123</Option>
        </Select>
      </Form.Item>
    </FormItemWrap>
  )
}

export default CustomInput
