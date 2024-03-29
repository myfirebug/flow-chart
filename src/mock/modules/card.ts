/*
 * @Description: 页面描述
 * @Author: hejp 378540660@qq.com
 * @Date: 2023-02-08 19:04:48
 * @LastEditors: hejp 378540660@qq.com
 * @LastEditTime: 2023-03-29 18:02:56
 * @FilePath: \flow-chart\src\mock\modules\card.ts
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
/*eslint-disable*/
import Mock from 'mockjs'
// 列表
export const cardList = {
  url: '/card-list',
  method: 'get',
  data: {
    code: 0,
    sucess: true,
    data: Mock.mock({
      'data|20': [
        {
          id: '@id',
          description: '@cparagraph',
          title: '@csentence(2, 7)',
          createTime: '@datetime(yyyy-MM-dd HH:mm:ss)',
          width: 200,
          height: 80,
          x: 10,
          y: 10,
          'type|1': ['base', 'other'],
          ports: [
            {
              group: 'left',
              visible: true
            },
            {
              group: 'right',
              visible: true
            }
          ],
          inParams: [
            {
              field: 'username',
              formType: 'Input',
              label: '用户名',
              placeholder: '请输入用户名',
              required: false,
              value: 'hejp',
              labelValue: 'hejp'
            },
            {
              field: 'account',
              formType: 'Input',
              label: '账号',
              placeholder: '请输入账号',
              required: false,
              value: 'myfirebug',
              labelValue: 'myfirebug'
            },
            {
              field: 'minor',
              formType: 'Switch',
              label: '未成年人',
              placeholder: '',
              required: false,
              value: false,
              labelValue: false
            },
            {
              field: 'hobby',
              formType: 'Select',
              label: '爱好',
              placeholder: '请选择',
              required: false,
              value: '',
              dataType: 'dynamic',
              correspondField: 'datas',
              method: 'GET',
              mock: [],
              headerField: '',
              headerValue: '',
              url: 'http://localhost:6001/temporary-list',
              labelValue: ''
            },
            {
              field: 'gender',
              formType: 'RadioGroup',
              label: '性别',
              placeholder: '请选择',
              required: false,
              value: 1,
              dataType: 'mock',
              correspondField: 'datas',
              method: 'GET',
              mock: [
                { label: '男', value: 1 },
                { label: '女', value: 2 }
              ],
              headerField: '',
              headerValue: '',
              url: '',
              labelValue: '男'
            },
            {
              field: 'subject',
              formType: 'CheckboxGroup',
              label: '科目',
              placeholder: '请选择',
              required: false,
              value: [],
              dataType: 'mock',
              correspondField: 'datas',
              method: 'GET',
              mock: [
                { label: '语文', value: 1 },
                { label: '数学', value: 2 },
                { label: '外语', value: 3 },
                { label: '政治', value: 4 },
                { label: '历史', value: 5 },
                { label: '物理', value: 6 },
                { label: '化学', value: 7 }
              ],
              headerField: '',
              headerValue: '',
              url: '',
              labelValue: ''
            },
            {
              field: 'address',
              formType: 'Cascader',
              label: '地址',
              placeholder: '请选择',
              required: false,
              value: [],
              dataType: 'dynamic',
              correspondField: 'datas',
              method: 'GET',
              mock: [],
              headerField: '',
              headerValue: '',
              url: 'http://localhost:6001//temporary-tree',
              labelValue: '',
              fieldNames: {
                children: 'children',
                label: 'label',
                value: 'value'
              },
              expandTrigger: 'click'
            }
          ]
        }
      ],
      total: 20
    }),
    message: '成功'
  }
}

// 卡片详情
export const cardDetails = {
  url: '/card-details',
  method: 'get',
  data: {
    code: 0,
    sucess: true,
    data: Mock.mock({
      id: '@id',
      width: 200,
      height: 80,
      title: '开始节点',
      x: 10,
      y: 10,
      ports: [
        {
          id: '@id',
          group: 'left',
          visible: true
        },
        {
          id: '@id',
          group: 'right',
          visible: true
        }
      ],
      inParams: [
        {
          disabled: false,
          field: 'username',
          formType: 'Input',
          id: '@id',
          label: '用户名',
          placeholder: '请输入用户名',
          required: false,
          tooltip: '',
          value: ''
        },
        {
          disabled: false,
          field: 'account',
          formType: 'Input',
          id: '@id',
          label: '账号',
          placeholder: '请输入账号',
          required: false,
          tooltip: '',
          value: ''
        }
      ]
    }),
    message: '成功'
  }
}

// 删除
export const cardDelete = {
  url: '/card-delete',
  method: 'post',
  data: {
    code: 0,
    sucess: true,
    data: null,
    message: '删除成功'
  }
}

// 新增或者编辑
export const cardAddOrEdit = {
  url: '/card-add-or-edit',
  method: 'post',
  data: {
    code: 0,
    sucess: true,
    data: null,
    message: '保存成功'
  }
}
