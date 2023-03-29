/*
 * @Description: 页面描述
 * @Author: hejp 378540660@qq.com
 * @Date: 2023-03-04 23:01:05
 * @LastEditors: hejp 378540660@qq.com
 * @LastEditTime: 2023-03-29 11:55:02
 * @FilePath: \flow-chart\src\form\cascader\index.tsx
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
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
        <Cascader
          allowClear
          expandTrigger={item.expandTrigger}
          changeOnSelect={
            item.expandTrigger === 'click' ? item.changeOnSelect : false
          }
          onChange={(value: any, selectedOptions: any) => {
            changeHandler &&
              changeHandler(item.id, {
                label: selectedOptions.map((item: any) => item.label).join('-'),
                value: value
              })
            console.log(selectedOptions)
          }}
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
