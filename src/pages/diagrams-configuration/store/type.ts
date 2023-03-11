/*
 * @Description: 页面描述
 * @Author: hejp 378540660@qq.com
 * @Date: 2023-02-19 11:28:14
 * @LastEditors: hejp 378540660@qq.com
 * @LastEditTime: 2023-03-08 22:08:09
 * @FilePath: \flow-chart\src\pages\diagrams-configuration\components\store\type.ts
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
import { CARD_STATE } from '@src/types'

// 获取流程图数据
export const DIAGRAMS = 'DIAGRAMS'
export type DIAGRAMS_TYPE = typeof DIAGRAMS

// 修改流程图标题
export const MODIFY_DIAGRAMS_TITLE = 'MODIFY_DIAGRAMS_TITLE'
export type MODIFY_DIAGRAMS_TITLE_TYPE = typeof MODIFY_DIAGRAMS_TITLE

// 添加卡片
export const ADD_CARD = 'ADD_CARD'
export type ADD_CARD_TYPE = typeof ADD_CARD

export interface ALL_STATE {
  id: string | null
  title: string
  description: string
  createTime?: string
  cards: CARD_STATE[]
}
