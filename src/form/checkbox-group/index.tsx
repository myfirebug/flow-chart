import { FC, useCallback } from 'react'
import { Form, Checkbox } from 'antd'
import { IPARAM } from '@src/types'
// 自定义表单项盒子
import FormItemWrap from '../wrap'

import UseRequest from '@src/hooks/useRequest'
import { CheckboxValueType } from 'antd/lib/checkbox/Group'
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
  const data: any[] = UseRequest(
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

  const change = useCallback((item: any, checkedValue: CheckboxValueType[]) => {
    let arr = []
    if (data && item.value) {
      arr = data.filter((sub) => checkedValue.includes(sub.value))
    }
    changeHandler &&
      changeHandler(item.id, {
        label: arr.map((item) => item.label).join('，'),
        value: checkedValue
      })
  }, [changeHandler, data])
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
        <Checkbox.Group
          disabled={item.disabled}
          onChange={(value) => change(item, value)}>
          {data instanceof Array
            ? data.map((item: any, index) => (
                <Checkbox key={index} value={item.value}>
                  {item.label}
                </Checkbox>
              ))
            : null}
        </Checkbox.Group>
      </Form.Item>
    </FormItemWrap>
  )
}

export default CustomInput
