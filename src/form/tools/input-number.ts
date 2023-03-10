/*
 * @Description: 页面描述
 * @Author: hejp 378540660@qq.com
 * @Date: 2023-02-20 22:01:22
 * @LastEditors: hejp 378540660@qq.com
 * @LastEditTime: 2023-02-20 23:24:00
 * @FilePath: \flow-chart\src\config\tools\input.ts
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
import { baseFormConfigure } from './base-form'
const inputNumber = {
  configure: [
    [
      {
        name: '字段属性',
        list: [
          ...baseFormConfigure,
          {
            componentName: 'InputNumber',
            label: '最小值',
            name: 'min',
            required: false,
            disabled: false,
            tooltip: '',
            placeholder: '请输入最小值'
          },
          {
            componentName: 'InputNumber',
            label: '最大值',
            name: 'max',
            required: false,
            disabled: false,
            tooltip: '',
            placeholder: '请输入最小值'
          }
        ]
      }
    ]
  ]
}
export default inputNumber
