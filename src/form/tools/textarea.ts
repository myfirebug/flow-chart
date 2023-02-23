/*
 * @Description: 页面描述
 * @Author: hejp 378540660@qq.com
 * @Date: 2023-02-20 22:01:22
 * @LastEditors: hejp 378540660@qq.com
 * @LastEditTime: 2023-02-23 13:11:16
 * @FilePath: \flow-chart\src\form\tools\textarea.ts
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
import { baseFormConfigure } from './base-form'
const textarea = {
  configure: [
    [
      {
        name: '字段属性',
        list: [
          ...baseFormConfigure,
          {
            componentName: 'Switch',
            label: '展示字数',
            name: 'showCount',
            required: false,
            disabled: false,
            tooltip: '',
            placeholder: ''
          },
          {
            componentName: 'InputNumber',
            label: '最大长度',
            name: 'maxLength',
            required: false,
            disabled: false,
            min: 0,
            max: 20,
            tooltip: '',
            placeholder: '请输入最大长度'
          }
        ]
      }
    ]
  ]
}
export default textarea
