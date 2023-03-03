/*
 * 数据项配置
 * @Author: hejp
 * @Date: 2022-08-10 10:10:09
 * @Last Modified by: hejp
 * @Last Modified time: 2022-08-11 14:33:44
 */
// 获取本地环境的数据
export const data = {
  // 数据项默认值
  configureValue: {
    useInterface: false,
    dataType: 'mock',
    mock: {
      value: '文本框'
    },
    url: '',
    method: 'get',
    field: 'value'
  },
  // 数据项配置
  configure: [
    {
      componentName: 'Select',
      label: '请求类型',
      name: 'dataType',
      required: false,
      placeholder: '',
      options: [
        { code: 'mock', name: 'mock数据' },
        { code: 'dynamic', name: '接口数据' }
      ]
    },
    {
      componentName: 'MockButton',
      label: 'mock数据',
      name: 'mock',
      required: false,
      placeholder: '',
      relationFields: 'dataType',
      relationValues: 'mock'
    },
    {
      componentName: 'TextArea',
      label: '接口地址',
      name: 'url',
      required: false,
      placeholder: '请输入接口地址',
      relationFields: 'dataType',
      relationValues: 'dynamic'
    },
    {
      componentName: 'Dependency',
      label: '依赖项',
      name: 'dependency',
      required: false,
      placeholder: '请选择',
      relationFields: 'dataType',
      relationValues: 'dynamic'
    },
    {
      componentName: 'Select',
      label: '请求方式',
      name: 'method',
      required: false,
      placeholder: '',
      relationFields: 'dataType',
      relationValues: 'dynamic',
      options: [
        { code: 'GET', name: 'GET' },
        { code: 'POST', name: 'POST' }
      ]
    },
    {
      componentName: 'Switch',
      label: '请求头',
      name: 'isHeader',
      required: false,
      disabled: false,
      tooltip: '',
      relationFields: 'dataType',
      relationValues: 'dynamic',
      placeholder: '请选择'
    },
    {
      componentName: 'Input',
      label: '头字段名',
      name: 'headerField',
      required: false,
      relationFields: 'dataType,isHeader',
      relationValues: 'dynamic,true',
      placeholder: '请输入'
    },
    {
      componentName: 'Input',
      label: '头字段值',
      name: 'headerValue',
      required: false,
      relationFields: 'dataType,isHeader',
      relationValues: 'dynamic,true',
      placeholder: '请输入'
    },
    {
      componentName: 'Input',
      label: '对应字段',
      name: 'correspondField',
      required: false,
      relationFields: 'dataType',
      relationValues: 'dynamic',
      placeholder: '请输入'
    }
  ]
}

export default data
