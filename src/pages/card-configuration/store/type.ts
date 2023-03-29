/*
 * @Description: 页面描述
 * @Author: hejp 378540660@qq.com
 * @Date: 2023-02-19 11:28:14
 * @LastEditors: hejp 378540660@qq.com
 * @LastEditTime: 2023-02-20 19:49:41
 * @FilePath: \flow-chart\src\pages\card-configuration\store\type.ts
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
import { CARD_STATE } from '@src/types'

// 获取卡片数据
export const CARD = 'CARD'
export type CARD_TYPE = typeof CARD

// 修改卡片标题
export const MODIFY_CARD_TITLE = 'MODIFY_CARD_TITLE'
export type MODIFY_CARD_TITLE_TYPE = typeof MODIFY_CARD_TITLE

// 修改卡片连接点
export const MODIFY_CARD_PORTS = 'MODIFY_CARD_PORTS'
export type MODIFY_CARD_PORTS_TYPE = typeof MODIFY_CARD_PORTS

// 添加卡片的表单元素
export const ADD_CARD_FROM_ITEM = 'ADD_CARD_FROM_ITEM'
export type ADD_CARD_FROM_ITEM_TYPE = typeof ADD_CARD_FROM_ITEM

// 添加卡片的表单元素
export const MODIFY_CARD_FROM_ITEM = 'MODIFY_CARD_FROM_ITEM'
export type MODIFY_CARD_FROM_ITEM_TYPE = typeof MODIFY_CARD_FROM_ITEM

// 添加卡片的表单元素
export const SELECT_CARD_FROM_ITEM = 'SELECT_CARD_FROM_ITEM'
export type SELECT_CARD_FROM_ITEM_TYPE = typeof SELECT_CARD_FROM_ITEM

// 删除卡片的表单元素
export const DELETE_CARD_FROM_ITEM = 'DELETE_CARD_FROM_ITEM'
export type DELETE_CARD_FROM_ITEM_TYPE = typeof DELETE_CARD_FROM_ITEM

// 复制卡片的表单元素
export const COPY_CARD_FROM_ITEM = 'COPY_CARD_FROM_ITEM'
export type COPY_CARD_FROM_ITEM_TYPE = typeof COPY_CARD_FROM_ITEM

// 卡片的表单元素置顶
export const TOP_CARD_FROM_ITEM = 'TOP_CARD_FROM_ITEM'
export type TOP_CARD_FROM_ITEM_TYPE = typeof TOP_CARD_FROM_ITEM

// 卡片的表单元素置底
export const BOTTOM_CARD_FROM_ITEM = 'BOTTOM_CARD_FROM_ITEM'
export type BOTTOM_CARD_FROM_ITEM_TYPE = typeof BOTTOM_CARD_FROM_ITEM

// 卡片的表单元素上移
export const MOVEUP_CARD_FROM_ITEM = 'MOVEUP_CARD_FROM_ITEM'
export type MOVEUP_CARD_FROM_ITEM_TYPE = typeof MOVEUP_CARD_FROM_ITEM

// 卡片的表单元素下移
export const MOVEDOWN_CARD_FROM_ITEM = 'MOVEDOWN_CARD_FROM_ITEM'
export type MOVEDOWN_CARD_FROM_ITEM_TYPE = typeof MOVEDOWN_CARD_FROM_ITEM

// 修改卡片宽度
export const MODIFY_CARD_WIDTH = 'MODIFY_CARD_WIDTH'
export type MODIFY_CARD_WIDTH_TYPE = typeof MODIFY_CARD_WIDTH

export interface ALL_STATE {
  card: CARD_STATE | null
  selectFormItemId: string
}
