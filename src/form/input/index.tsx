/*
 * @Description: 页面描述
 * @Author: hejp 378540660@qq.com
 * @Date: 2023-02-21 13:20:35
 * @LastEditors: hejp 378540660@qq.com
 * @LastEditTime: 2023-03-22 10:46:47
 * @FilePath: \flow-chart\src\form\input\index.tsx
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
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
  changeHandler?: (id: string, value: any) => void
  selectId?: string
}

const CustomInput: FC<ICustomInputProps> = ({
  item,
  selectHandler,
  selectId,
  changeHandler,
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
        required={item.required}
        rules={[{ required: item.require }]}>
        {type === 'Password' ? (
          <Input.Password
            allowClear
            maxLength={item.maxLength}
            disabled={item.disabled}
            onBlur={(e) =>
              changeHandler && changeHandler(item.id, e.target.value)
            }
            placeholder={item.placeholder}
          />
        ) : type === 'TextArea' ? (
          <Input.TextArea
            allowClear
            showCount={item.showCount}
            maxLength={item.maxLength}
            disabled={item.disabled}
            onBlur={(e) =>
              changeHandler && changeHandler(item.id, e.target.value)
            }
            placeholder={item.placeholder}
          />
        ) : (
          <Input
            allowClear
            showCount={item.showCount}
            maxLength={item.maxLength}
            disabled={item.disabled}
            onBlur={(e) =>
              changeHandler && changeHandler(item.id, e.target.value)
            }
            placeholder={item.placeholder}
          />
        )}
      </Form.Item>
    </FormItemWrap>
  )
}

export default CustomInput
