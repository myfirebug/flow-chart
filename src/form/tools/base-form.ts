/*
 * @Description: 页面描述
 * @Author: hejp 378540660@qq.com
 * @Date: 2023-02-20 22:24:49
 * @LastEditors: hejp 378540660@qq.com
 * @LastEditTime: 2023-02-21 10:59:21
 * @FilePath: \flow-chart\src\config\tools\base-form.ts
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
export const baseFormConfigure = [
  {
    componentName: 'Input',
    label: '标签名',
    name: 'label',
    required: false,
    disabled: false,
    tooltip: '',
    placeholder: '请输入标签名'
  },
  {
    componentName: 'Input',
    label: '字段名',
    name: 'field',
    required: false,
    disabled: false,
    tooltip: '',
    placeholder: '请输入字段名'
  },
  {
    componentName: 'Input',
    label: '字段值',
    name: 'value',
    required: false,
    disabled: false,
    tooltip: '',
    placeholder: '请输入字段值'
  },
  {
    componentName: 'Input',
    label: '占位提示',
    name: 'placeholder',
    required: false,
    disabled: false,
    tooltip: '',
    placeholder: '请输入提示'
  },
  {
    componentName: 'Switch',
    label: '是否必填',
    name: 'required',
    required: false,
    disabled: false,
    tooltip: '',
    placeholder: '请选择'
  },
  {
    componentName: 'Switch',
    label: '是否禁用',
    name: 'disabled',
    required: false,
    disabled: false,
    tooltip: '',
    placeholder: '请选择'
  },
  {
    componentName: 'TextArea',
    label: '提示信息',
    name: 'tooltip',
    required: false,
    disabled: false,
    tooltip: '',
    placeholder: '请输入提示信息'
  }
]
