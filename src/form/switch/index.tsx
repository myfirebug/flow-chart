/*
 * @Description: 页面描述
 * @Author: hejp 378540660@qq.com
 * @Date: 2023-02-26 20:33:59
 * @LastEditors: hejp 378540660@qq.com
 * @LastEditTime: 2023-02-26 20:54:19
 * @FilePath: \flow-chart\src\form\switch\index.tsx
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
import { FC } from 'react'
import { Switch, Form } from 'antd'
import { IPARAM } from '@src/types'
// 自定义表单项盒子
import FormItemWrap from '../wrap'

interface ICustomSwitchProps {
  item: IPARAM
  selectHandler?: (
    id: string,
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => void
  changeHandler?: (id: string, value: any) => void
  selectId?: string
}

const CustomSwitch: FC<ICustomSwitchProps> = ({
  item,
  selectHandler,
  changeHandler,
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
        valuePropName='checked'
        tooltip={item.tooltip}
        required={item.required}
        rules={[{ required: item.require }]}>
        <Switch
          disabled={item.disabled}
          onChange={(value) =>
            changeHandler && changeHandler(item.id, value)
          }
        />
      </Form.Item>
    </FormItemWrap>
  )
}

export default CustomSwitch
