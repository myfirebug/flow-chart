import { FC } from 'react'
import { Input, Form } from 'antd'
import { IPARAM } from '@src/types'
// 自定义表单项盒子
import FormItemWrap from '../wrap'

interface ICustomInputProps {
  type: 'Input' | 'TextArea' | 'Password'
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
  selectId,
  type
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
        <>
          {type === 'Input' ? (
            <Input
              allowClear
              showCount={item.showCount}
              maxLength={item.maxLength}
              disabled={item.disabled}
              placeholder={item.placeholder}
            />
          ) : null}
          {type === 'TextArea' ? (
            <Input.TextArea
              allowClear
              showCount={item.showCount}
              maxLength={item.maxLength}
              disabled={item.disabled}
              placeholder={item.placeholder}
            />
          ) : null}
          {type === 'Password' ? (
            <Input.Password
              allowClear
              maxLength={item.maxLength}
              disabled={item.disabled}
              placeholder={item.placeholder}
            />
          ) : null}
        </>
      </Form.Item>
    </FormItemWrap>
  )
}

export default CustomInput
