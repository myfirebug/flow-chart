/*
 * @Description: 页面描述
 * @Author: hejp 378540660@qq.com
 * @Date: 2023-02-19 11:29:28
 * @LastEditors: hejp 378540660@qq.com
 * @LastEditTime: 2023-03-11 15:48:31
 * @FilePath: \flow-chart\src\pages\diagrams-configuration\store\reducers.ts
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
import { ModifyAction } from './action'
import {
  PORT_DIMENSION,
  TITLE_HEIGHT,
  MARGIN_TOP
} from '@src/components/card/components/constant'
import { DIAGRAMS, ALL_STATE, MODIFY_DIAGRAMS_TITLE, ADD_CARD } from './type'
import { CARD_STATE } from '@src/types'

// 计算卡片高度
const diffHeight = (item: CARD_STATE) => {
  let count = TITLE_HEIGHT
  if (item.ports.some((sub) => sub.visible)) {
    count += PORT_DIMENSION + MARGIN_TOP
  }
  item.inParams.forEach(() => {
    count += PORT_DIMENSION
  })
  count += MARGIN_TOP
  return count
}

// 处理并返回 state
export const initialState: ALL_STATE = {
  id: null,
  title: '',
  description: '',
  createTime: '',
  SelectedCardsIds: '',
  cards: []
}

export const diagrams = (
  state: ALL_STATE = initialState,
  action: ModifyAction
): ALL_STATE => {
  let copy: ALL_STATE = JSON.parse(JSON.stringify(state))
  switch (action.type) {
    case DIAGRAMS:
      return {
        ...action.data,
        cards: action.data.cards.map((item) => ({
          ...item,
          height: diffHeight(item)
        }))
      }
    case MODIFY_DIAGRAMS_TITLE:
      return {
        ...copy,
        title: action.title
      }
    case ADD_CARD:
      return {
        ...copy,
        cards: [
          ...copy.cards,
          {
            ...action.data,
            height: diffHeight(action.data)
          }
        ],
        SelectedCardsIds: action.data.id
      }
    default:
      return state
  }
}
