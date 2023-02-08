/*
 * @Description: 页面描述
 * @Author: hejp 378540660@qq.com
 * @Date: 2023-02-08 20:01:23
 * @LastEditors: hejp 378540660@qq.com
 * @LastEditTime: 2023-02-08 20:01:23
 * @FilePath: \flow-chart\src\mock\modules\card copy.ts
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
/*eslint-disable*/
import Mock from 'mockjs'
// 列表
export const diagramsList = {
  url: '/diagrams-list',
  method: 'get',
  data: {
    code: 0,
    sucess: true,
    data: Mock.mock({
      'data|8': [
        {
          id: '@id',
          description: '@cparagraph',
          title: '@csentence(10)',
          createTime: '@datetime(yyyy-MM-dd HH:mm:ss)'
        }
      ],
      total: 8
    }),
    message: '成功'
  }
}

// 删除
export const diagramsDelete = {
  url: '/diagrams-delete',
  method: 'post',
  data: {
    code: 0,
    sucess: true,
    data: null,
    message: '删除成功'
  }
}
