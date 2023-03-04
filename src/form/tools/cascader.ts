/*
 * @Description: 页面描述
 * @Author: hejp 378540660@qq.com
 * @Date: 2023-02-20 22:01:22
 * @LastEditors: hejp 378540660@qq.com
 * @LastEditTime: 2023-02-28 09:59:03
 * @FilePath: \flow-chart\src\form\tools\cascader.ts
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
import { baseFormConfigure } from './base-form'
import { data } from './data'
const cascader = {
  configure: [
    [
      {
        name: '字段属性',
        list: [
          ...baseFormConfigure.filter((item) => item.name !== 'value'),
          {
            componentName: 'Select',
            label: '展开方式',
            name: 'expandTrigger',
            required: false,
            placeholder: '',
            allowClear: false,
            options: [
              { code: 'click', name: 'click' },
              { code: 'hover', name: 'hover' }
            ]
          },
          {
            componentName: 'Switch',
            label: '单选生效',
            name: 'changeOnSelect',
            required: false,
            disabled: false,
            tooltip: '',
            placeholder: '请选择',
            relationFields: 'expandTrigger',
            relationValues: 'click'
          },
          {
            componentName: 'Switch',
            label: '是否多选',
            name: 'multiple',
            required: false,
            disabled: false,
            tooltip: '',
            placeholder: '请选择'
          }
        ]
      }
    ],
    [
      {
        name: '数据',
        list: [
          ...data.configure.map((item) => {
            if (item.name === 'dataType') {
              return {
                ...item,
                disabled: true
              }
            }
            return item
          })
        ]
      }
    ]
  ]
}
export default cascader
