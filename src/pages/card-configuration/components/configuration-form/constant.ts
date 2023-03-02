/*
 * @Description: 页面描述
 * @Author: hejp 378540660@qq.com
 * @Date: 2023-02-18 16:32:45
 * @LastEditors: hejp 378540660@qq.com
 * @LastEditTime: 2023-02-28 11:22:32
 * @FilePath: \flow-chart\src\pages\card-configuration\components\configuration-form\constant.ts
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
import { IPARAM } from '@src/types'
const formItemBaseConfig: IPARAM = {
  field: 'test',
  formType: 'Input',
  label: 'label',
  placeholder: '请输入',
  value: '',
  disabled: false,
  required: false,
  tooltip: ''
}

const params = {
  dataType: 'mock',
  mock: [{ label: '', value: '' }],
  url: '',
  method: 'get',
  isHeader: false,
  headerField: '',
  headerValue: '',
  correspondField: ''
}

// 控件
export const CONTROL_DATAS = [
  {
    value: 'Input',
    name: '输入框',
    disabled: false,
    data: {
      ...formItemBaseConfig,
      formType: 'Input'
    }
  },
  {
    value: 'TextArea',
    name: '多行输入',
    data: {
      ...formItemBaseConfig,
      formType: 'TextArea'
    }
  },
  {
    value: 'Number',
    name: '数字输入',
    data: {
      ...formItemBaseConfig,
      formType: 'InputNumber'
    }
  },
  {
    value: 'Password',
    name: '密码输入',
    data: {
      ...formItemBaseConfig,
      formType: 'Password'
    }
  },
  {
    value: 'Select',
    name: '选择框',
    data: {
      ...formItemBaseConfig,
      formType: 'Select',
      ...params,
      mock: [{ label: '选择框1', value: 'select1' }]
    }
  },
  {
    value: 'Checkbox Group',
    name: '复选框',
    data: {
      ...formItemBaseConfig,
      formType: 'CheckboxGroup',
      ...params,
      mock: [{ label: '复选框1', value: 'checkbox1' }]
    }
  },
  {
    value: 'Radio Group',
    name: '单选框',
    disabled: true,
    data: {
      ...formItemBaseConfig,
      formType: 'Input'
    }
  },
  {
    value: 'Cascader',
    name: '联级框',
    disabled: true,
    data: {
      ...formItemBaseConfig,
      formType: 'Input'
    }
  },
  {
    value: 'Date',
    name: '日期选择',
    disabled: true,
    data: {
      ...formItemBaseConfig,
      formType: 'Input'
    }
  },
  {
    value: 'Date Range',
    name: '日期范围',
    disabled: true,
    data: {
      ...formItemBaseConfig,
      formType: 'Input'
    }
  },
  {
    value: 'Time',
    name: '时间选择',
    disabled: true,
    data: {
      ...formItemBaseConfig,
      formType: 'Input'
    }
  },
  {
    value: 'Time Range',
    name: '时间范围',
    disabled: true,
    data: {
      ...formItemBaseConfig,
      formType: 'Input'
    }
  },
  {
    value: 'Switch',
    name: '开关',
    data: {
      ...formItemBaseConfig,
      formType: 'Switch'
    }
  },
  {
    value: 'TreeSelect',
    name: '树选择',
    disabled: true,
    data: {
      ...formItemBaseConfig,
      formType: 'Input'
    }
  }
]
