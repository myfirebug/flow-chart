/*
 * @Description: 页面描述
 * @Author: hejp 378540660@qq.com
 * @Date: 2022-09-04 16:50:14
 * @LastEditors: hejp 378540660@qq.com
 * @LastEditTime: 2022-10-12 15:37:43
 * @FilePath: \bigscreen\src\service\index.ts
 * Copyright (c) 2022 by hejp 378540660@qq.com, All Rights Reserved.
 */
import { get, IResult, post } from './fetch'
import { IAnyObject } from '@src/types'
interface IApi {
  [propNames: string]: (params?: IAnyObject) => Promise<IResult>
}

const api: IApi = {
  // 获取echarts geo数据
  getGeo(params: any) {
    return get({
      url: `/geo/areas_v3/bound/${params.field}.json`,
      loading: true,
      servicePrefix: 'local'
    })
  },
  // 登录
  login(params: any) {
    return post({
      url: `/login`,
      loading: true,
      data: params,
      servicePrefix: 'local'
    })
  },
  // 卡片列表
  cardList(params: any) {
    return get({
      url: `/card-list`,
      loading: true,
      data: params,
      servicePrefix: 'local'
    })
  },
  // 卡片删除
  cardDelete(params: any) {
    return post({
      url: `/card-delete`,
      loading: true,
      data: params,
      servicePrefix: 'local'
    })
  },
  // 卡片新增或者编辑
  cardAddOrEdit(params: any) {
    return post({
      url: `/card-add-or-edit`,
      loading: true,
      data: params,
      servicePrefix: 'local'
    })
  },
  // 卡片详情
  cardDetails(params: any) {
    return get({
      url: `/card-details`,
      loading: true,
      data: params,
      servicePrefix: 'local'
    })
  },
  // 流程图列表
  diagramsList(params: any) {
    return get({
      url: `/card-list`,
      loading: true,
      data: params,
      servicePrefix: 'local'
    })
  },
  // 流程图删除
  diagramsDelete(params: any) {
    return post({
      url: `/card-delete`,
      loading: true,
      data: params,
      servicePrefix: 'local'
    })
  }
}

export default api
