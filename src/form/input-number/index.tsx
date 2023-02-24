/*
 * @Description: 页面描述
 * @Author: hejp 378540660@qq.com
 * @Date: 2023-02-24 10:50:43
 * @LastEditors: hejp 378540660@qq.com
 * @LastEditTime: 2023-02-24 10:52:25
 * @FilePath: \flow-chart\src\form\input-number\index.tsx
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
import { FC } from 'react'
import { InputNumber, Form } from 'antd'
import { IPARAM } from '@src/types'
// 自定义表单项盒子
import FormItemWrap from '../wrap'

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
        <InputNumber
          style={{ width: '100%' }}
          min={item.min}
          max={item.max}
          disabled={item.disabled}
          placeholder={item.placeholder}
        />
      </Form.Item>
    </FormItemWrap>
  )
}

export default CustomInput
