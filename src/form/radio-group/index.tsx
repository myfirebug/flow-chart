import { FC } from 'react'
import { Form, Checkbox, Radio } from 'antd'
import { IPARAM } from '@src/types'
// 自定义表单项盒子
import FormItemWrap from '../wrap'

import UseRequest from '@src/hooks/useRequest'

interface ICustomInputProps {
  item: IPARAM
  selectHandler?: (
    id: string,
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => void
  changeHandler?: (id: string, value: any) => void
  selectId?: string
}

const CustomInput: FC<ICustomInputProps> = ({
  item,
  selectHandler,
  changeHandler,
  selectId
}) => {
  const data = UseRequest(
    JSON.stringify({
      dataType: item.dataType,
      mock: item.mock,
      url: item.url,
      method: item.method,
      isHeader: item.isHeader,
      headerField: item.headerField,
      headerValue: item.headerValue,
      params: item.params,
      correspondField: item.correspondField
    })
  )
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
        <Radio.Group
          disabled={item.disabled}
          onChange={(e) =>
            changeHandler &&
            changeHandler(
              item.id,
              data.find((item: any) => item.value === e.target.value)
            )
          }>
          {data instanceof Array
            ? data.map((item: any, index) => (
                <Radio key={index} value={item.value}>
                  {item.label}
                </Radio>
              ))
            : null}
        </Radio.Group>
      </Form.Item>
    </FormItemWrap>
  )
}

export default CustomInput
