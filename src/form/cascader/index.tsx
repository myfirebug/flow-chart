import { FC } from 'react'
import { Cascader, Form } from 'antd'
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
        <Cascader
          allowClear
          expandTrigger={item.expandTrigger}
          changeOnSelect={
            item.expandTrigger === 'click' ? item.changeOnSelect : false
          }
          fieldNames={item.fieldNames}
          multiple={item.multiple}
          options={data && Array.isArray(data) ? data : []}
          disabled={item.disabled}
          placeholder={item.placeholder}
        />
      </Form.Item>
    </FormItemWrap>
  )
}

export default CustomInput
