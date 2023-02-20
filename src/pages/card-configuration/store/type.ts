/*
 * @Description: 页面描述
 * @Author: hejp 378540660@qq.com
 * @Date: 2023-02-19 11:28:14
 * @LastEditors: hejp 378540660@qq.com
 * @LastEditTime: 2023-02-20 13:15:44
 * @FilePath: \flow-chart\src\pages\card-configuration\store\type.ts
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
import { IAnyObject } from '@src/types'
export type IPORT_TYPE = 'left' | 'right'
// counter state数据类型
export type IPORT = {
  visible: boolean
  group: IPORT_TYPE
  id: string | number
}

interface IPARAM extends IAnyObject {
  field: string
  formType: 'Input'
  label: string
  placeholder: string
  value: string | number | boolean
}

export type CARD_STATE = {
  id: string | number
  width: number
  height: number
  title: string
  x: number
  y: number
  ports: IPORT[]
  inParams: IPARAM[]
}

// 获取卡片数据
export const CARD = 'CARD'
export type CARD_TYPE = typeof CARD

// 修改卡片标题
export const MODIFY_CARD_TITLE = 'MODIFY_CARD_TITLE'
export type MODIFY_CARD_TITLE_TYPE = typeof MODIFY_CARD_TITLE

// 修改卡片连接点
export const MODIFY_CARD_PORTS = 'MODIFY_CARD_PORTS'
export type MODIFY_CARD_PORTS_TYPE = typeof MODIFY_CARD_PORTS
