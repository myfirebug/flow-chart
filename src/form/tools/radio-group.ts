/*
 * @Description: 页面描述
 * @Author: hejp 378540660@qq.com
 * @Date: 2023-02-20 22:01:22
 * @LastEditors: hejp 378540660@qq.com
 * @LastEditTime: 2023-03-02 10:03:13
 * @FilePath: \flow-chart\src\form\tools\radio-group.ts
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
import { baseFormConfigure } from './base-form'
import { data } from './data'
const radioGroup = {
  configure: [
    [
      {
        name: '字段属性',
        list: [
          ...baseFormConfigure.filter(
            (item) => item.name !== 'value' && item.name !== 'placeholder'
          )
        ]
      }
    ],
    [
      {
        name: '数据',
        list: [...data.configure]
      }
    ]
  ]
}
export default radioGroup