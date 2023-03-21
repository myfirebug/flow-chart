/*
 * @Description: 页面描述
 * @Author: hejp 378540660@qq.com
 * @Date: 2023-02-19 11:28:14
 * @LastEditors: hejp 378540660@qq.com
 * @LastEditTime: 2023-03-20 20:09:47
 * @FilePath: \flow-chart\src\pages\diagrams-configuration\store\type.ts
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
import { CARD_STATE, EDGES_STATE } from '@src/types'

// 获取流程图数据
export const DIAGRAMS = 'DIAGRAMS'
export type DIAGRAMS_TYPE = typeof DIAGRAMS

// 修改流程图标题
export const MODIFY_DIAGRAMS_TITLE = 'MODIFY_DIAGRAMS_TITLE'
export type MODIFY_DIAGRAMS_TITLE_TYPE = typeof MODIFY_DIAGRAMS_TITLE

// 修改流程图舞台坐标
export const MODIFY_DIAGRAMS_COORDINATE = 'MODIFY_DIAGRAMS_COORDINATE'
export type MODIFY_DIAGRAMS_COORDINATE_TYPE = typeof MODIFY_DIAGRAMS_COORDINATE

// 添加卡片
export const ADD_CARD = 'ADD_CARD'
export type ADD_CARD_TYPE = typeof ADD_CARD

// 修改卡片
export const MODIFY_CARD = 'MODIFY_CARD'
export type MODIFY_CARD_TYPE = typeof MODIFY_CARD

// 修改卡片位置坐标
export const MODIFY_CARDS_COORDINATE = 'MODIFY_CARDS_COORDINATE'
export type MODIFY_CARDS_COORDINATE_TYPE = typeof MODIFY_CARDS_COORDINATE

// 选中卡片
export const SELECTS_CARD = 'SELECTS_CARD'
export type SELECTS_CARD_TYPE = typeof SELECTS_CARD

// 增加卡片连接
export const ADD_EDGE = 'ADD_EDGE'
export type ADD_EDGE_TYPE = typeof ADD_EDGE

// 删除卡片连接
export const DEL_CARD = 'DEL_CARD'
export type DEL_CARD_TYPE = typeof DEL_CARD

// 复制卡片连接
export const COPY_CARD = 'COPY_CARD'
export type COPY_CARD_TYPE = typeof COPY_CARD

// 全选
export const SELECT_ALL = 'SELECT_ALL'
export type SELECT_ALL_TYPE = typeof SELECT_ALL

export interface ALL_STATE {
  id: string | null
  title: string
  x: number
  y: number
  description: string
  createTime?: string
  cards: CARD_STATE[]
  selectedCardsIds: string
  edges: EDGES_STATE[]
}
