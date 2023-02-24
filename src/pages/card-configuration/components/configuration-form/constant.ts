/*
 * @Description: 页面描述
 * @Author: hejp 378540660@qq.com
 * @Date: 2023-02-18 16:32:45
 * @LastEditors: hejp 378540660@qq.com
 * @LastEditTime: 2023-02-24 11:00:07
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
    disabled: true,
    data: {
      ...formItemBaseConfig,
      formType: 'Input'
    }
  },
  {
    value: 'Select',
    name: '选择框',
    disabled: true,
    data: {
      ...formItemBaseConfig,
      formType: 'Input'
    }
  },
  {
    value: 'Checkbox Group',
    name: '复选框',
    disabled: true,
    data: {
      ...formItemBaseConfig,
      formType: 'Input'
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
    disabled: true,
    data: {
      ...formItemBaseConfig,
      formType: 'Input'
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
