/*
 * @Description: 页面描述
 * @Author: hejp 378540660@qq.com
 * @Date: 2023-02-20 22:01:22
 * @LastEditors: hejp 378540660@qq.com
 * @LastEditTime: 2023-03-05 10:38:21
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
            tooltip: "次级菜单的展开方式，可选 'click' 和 'hover'",
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
            tooltip:
              '（单选时生效）当此项为 true 时，点选每级菜单选项值都会发生变化，具体见上面的演示',
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
            tooltip: '支持多选节点',
            placeholder: '请选择'
          },
          {
            componentName: 'FieldNamesButton',
            label: '自定义',
            name: 'fieldNames',
            tooltip: '自定义 options 中 label value children 的字段',
            required: false,
            placeholder: ''
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
            if (item.name === 'url') {
              return {
                ...item,
                tooltip: `测试地址：${
                  window.location.href.split('#')[0]
                }temporary-tree`
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
