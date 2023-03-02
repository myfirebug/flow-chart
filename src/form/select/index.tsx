import { FC, useMemo } from 'react'
import { Select, Form } from 'antd'
import { IPARAM } from '@src/types'
// 自定义表单项盒子
import FormItemWrap from '../wrap'

import UseRequest from '@src/hooks/useRequest'

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
  console.log(item, 'datadatadatadatadatadata')
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
          {data instanceof Array
            ? data.map((item: any, index) => (
                <Option key={index} value={item.value}>
                  {item.label}
                </Option>
              ))
            : null}
        </Select>
      </Form.Item>
    </FormItemWrap>
  )
}

export default CustomInput
