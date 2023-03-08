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

export interface ALL_STATE {
  id: string | null
  title: string
  description: string
  createTime: string
  cards: CARD_STATE[]
}
