import { FC } from 'react'
import { Input, Form } from 'antd'
import { IPARAM } from '@src/types'
// 自定义表单项盒子
import FormItemWrap from '../wrap'

const { TextArea } = Input

interface ICustomTextAreaProps {
  item: IPARAM
  selectHandler?: (
    id: string,
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => void
  selectId?: string
}

const CustomTextArea: FC<ICustomTextAreaProps> = ({
  item,
  selectHandler,
  selectId
}) => {
  return (
    <FormItemWrap
      selectHandler={selectHandler}
      id={item.id}
      selectId={selectId}>
      <Form.Item
        label={item.label}
        name={item.field}
        tooltip={item.tooltip}
        rules={[{ required: item.require }]}>
        <TextArea
          allowClear
          showCount={item.showCount}
          maxLength={item.maxLength}
          disabled={item.disabled}
          placeholder={item.placeholder}
        />
      </Form.Item>
    </FormItemWrap>
  )
}

export default CustomTextArea
