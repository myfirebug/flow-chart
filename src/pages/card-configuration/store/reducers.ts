/*
 * @Description: 页面描述
 * @Author: hejp 378540660@qq.com
 * @Date: 2023-02-19 11:29:28
 * @LastEditors: hejp 378540660@qq.com
 * @LastEditTime: 2023-03-29 12:02:54
 * @FilePath: \flow-chart\src\pages\card-configuration\store\reducers.ts
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
import { ModifyAction } from './action'
import { guid } from '@src/utils/tools'
import {
  PORT_DIMENSION,
  TITLE_HEIGHT,
  MARGIN_TOP
} from '@src/components/card/components/constant'
import {
  CARD,
  MODIFY_CARD_TITLE,
  MODIFY_CARD_PORTS,
  ADD_CARD_FROM_ITEM,
  ALL_STATE,
  MODIFY_CARD_FROM_ITEM,
  SELECT_CARD_FROM_ITEM,
  DELETE_CARD_FROM_ITEM,
  COPY_CARD_FROM_ITEM,
  TOP_CARD_FROM_ITEM,
  BOTTOM_CARD_FROM_ITEM,
  MOVEUP_CARD_FROM_ITEM,
  MOVEDOWN_CARD_FROM_ITEM,
  MODIFY_CARD_WIDTH
} from './type'
import { CARD_STATE, IPORT } from '@src/types'

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
  card: null,
  selectFormItemId: ''
}

interface Icopy {
  card: CARD_STATE
  selectFormItemId: string
}

export const counter = (
  state: ALL_STATE = initialState,
  action: ModifyAction
): ALL_STATE => {
  let copy: Icopy = JSON.parse(JSON.stringify(state))
  switch (action.type) {
    case CARD:
      return {
        card: {
          ...action.data,
          height: diffHeight(action.data)
        },
        selectFormItemId: ''
      }
    case MODIFY_CARD_TITLE:
      copy.card.title = action.title
      return copy
    case MODIFY_CARD_WIDTH:
      copy.card.width = action.width
      return copy
    case MODIFY_CARD_PORTS:
      copy.card.ports = copy.card.ports.map((item: IPORT) => ({
        ...item,
        visible: action.data.includes(item.group)
      }))
      copy.card.height = diffHeight(copy.card)
      return copy
    case ADD_CARD_FROM_ITEM:
      const id = guid()
      copy.card.inParams = [
        ...copy.card.inParams,
        {
          ...action.data,
          id: id
        }
      ]
      copy.card.height = diffHeight(copy.card)
      copy.selectFormItemId = id
      return copy
    case MODIFY_CARD_FROM_ITEM:
      if (copy.selectFormItemId) {
        const index = copy.card.inParams.findIndex(
          (item) => item.id === copy.selectFormItemId
        )
        if (index !== -1) {
          copy.card.inParams.splice(index, 1, {
            ...copy.card.inParams[index],
            ...action.data
          })
        }
      }
      return copy
    case SELECT_CARD_FROM_ITEM:
      copy.selectFormItemId = action.id
      return copy
    case DELETE_CARD_FROM_ITEM:
      if (copy.selectFormItemId) {
        const index = copy.card.inParams.findIndex(
          (item) => item.id === copy.selectFormItemId
        )
        if (index !== -1) {
          copy.card.inParams.splice(index, 1)
          if (copy.card.inParams.length) {
            copy.selectFormItemId = copy.card.inParams[0].id
          } else {
            copy.selectFormItemId = ''
          }
          copy.card.height = diffHeight(copy.card)
        }
      }
      return copy
    case COPY_CARD_FROM_ITEM:
      if (copy.selectFormItemId) {
        const index = copy.card.inParams.findIndex(
          (item) => item.id === copy.selectFormItemId
        )
        if (index !== -1) {
          let id = guid()
          copy.card.inParams.push({
            ...copy.card.inParams[index],
            id: id
          })
          copy.selectFormItemId = id
          copy.card.height = diffHeight(copy.card)
        }
      }
      return copy
    case TOP_CARD_FROM_ITEM:
      if (copy.selectFormItemId) {
        const index = copy.card.inParams.findIndex(
          (item) => item.id === copy.selectFormItemId
        )
        if (index !== -1) {
          const currentFormItem = copy.card.inParams.splice(index, 1)
          copy.card.inParams.unshift(currentFormItem[0])
        }
      }
      return copy
    case BOTTOM_CARD_FROM_ITEM:
      if (copy.selectFormItemId) {
        const index = copy.card.inParams.findIndex(
          (item) => item.id === copy.selectFormItemId
        )
        if (index !== -1) {
          const currentFormItem = copy.card.inParams.splice(index, 1)
          copy.card.inParams.push(currentFormItem[0])
        }
      }
      return copy
    case MOVEUP_CARD_FROM_ITEM:
      if (copy.selectFormItemId) {
        const index = copy.card.inParams.findIndex(
          (item) => item.id === copy.selectFormItemId
        )
        if (index > 0) {
          const currentFormItem = copy.card.inParams.splice(index, 1)
          copy.card.inParams.splice(index - 1, 0, ...currentFormItem)
        }
      }
      return copy
    case MOVEDOWN_CARD_FROM_ITEM:
      if (copy.selectFormItemId) {
        const index = copy.card.inParams.findIndex(
          (item) => item.id === copy.selectFormItemId
        )
        if (index !== -1 && index < copy.card.inParams.length - 1) {
          const currentFormItem = copy.card.inParams.splice(index, 1)
          copy.card.inParams.splice(index + 1, 0, ...currentFormItem)
        }
      }
      return copy
    default:
      return state
  }
}
