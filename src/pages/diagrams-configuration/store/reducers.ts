/*
 * @Description: 页面描述
 * @Author: hejp 378540660@qq.com
 * @Date: 2023-02-19 11:29:28
 * @LastEditors: hejp 378540660@qq.com
 * @LastEditTime: 2023-03-23 20:06:29
 * @FilePath: \flow-chart\src\pages\diagrams-configuration\store\reducers.ts
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
import { ModifyAction } from './action'
import {
  PORT_DIMENSION,
  TITLE_HEIGHT,
  MARGIN_TOP
} from '@src/components/card/components/constant'
import {
  DIAGRAMS,
  ALL_STATE,
  MODIFY_DIAGRAMS_TITLE,
  ADD_CARD,
  MODIFY_CARD,
  SELECTS_CARD,
  MODIFY_DIAGRAMS_COORDINATE,
  MODIFY_CARDS_COORDINATE,
  ADD_EDGE,
  DEL_CARD,
  COPY_CARD,
  SELECT_ALL,
  CARDS_ALIGN
} from './type'
import { CARD_STATE } from '@src/types'
import { guid } from '@src/utils/tools'

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
  selectedCardsIds: '',
  x: 0,
  y: 0,
  cards: [],
  edges: []
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
        cards: action.data.cards.map((item: CARD_STATE) => ({
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
            x: action.data.x - copy.x,
            y: action.data.y - copy.y,
            ports: action.data.ports.map((item) => ({ ...item, id: guid() })),
            height: diffHeight(action.data)
          }
        ],
        selectedCardsIds: action.data.id
      }
    case MODIFY_CARD:
      return {
        ...copy,
        cards: copy.cards.map((item) => {
          if (copy.selectedCardsIds.includes(item.id)) {
            return {
              ...item,
              ...action.data
            }
          }
          return item
        })
      }
    case SELECTS_CARD:
      return {
        ...copy,
        selectedCardsIds: action.ids
      }
    case MODIFY_DIAGRAMS_COORDINATE:
      return {
        ...copy,
        ...action.coordinate
      }
    case MODIFY_CARDS_COORDINATE:
      return {
        ...copy,
        cards: copy.cards.map((item) => {
          if (
            copy.selectedCardsIds &&
            copy.selectedCardsIds.includes(item.id)
          ) {
            return {
              ...item,
              x: item.x + action.coordinate.x,
              y: item.y + action.coordinate.y
            }
          }
          return item
        })
      }
    case ADD_EDGE:
      return {
        ...copy,
        edges: [...copy.edges, action.edge]
      }
    case DEL_CARD:
      return {
        ...copy,
        cards: copy.cards.filter(
          (item) => !copy.selectedCardsIds.includes(item.id)
        ),
        edges: copy.edges.filter(
          (item) =>
            !copy.selectedCardsIds.includes(item.data.source) &&
            !copy.selectedCardsIds.includes(item.data.target)
        ),
        selectedCardsIds: ''
      }
    case COPY_CARD: {
      let ids: string[] = []
      let arr = copy.cards
        .filter((item) => copy.selectedCardsIds.includes(item.id))
        .map((item) => {
          let cardId = guid()
          ids.push(cardId)
          return {
            ...item,
            title: `${item.title}[复制]`,
            id: cardId,
            ports: item.ports.map((port) => ({
              ...port,
              id: guid()
            }))
          }
        })
      return {
        ...copy,
        cards: [...copy.cards, ...arr],
        selectedCardsIds: ids.join(',')
      }
    }
    case SELECT_ALL: {
      let arr: string[] = []
      copy.cards.forEach((item) => {
        arr.push(item.id)
      })
      return {
        ...copy,
        selectedCardsIds: arr.join(',')
      }
    }
    case CARDS_ALIGN: {
      let selectCards = copy.cards.filter((item) =>
        copy.selectedCardsIds.includes(item.id)
      )
      let l = selectCards[0].x
      let t = selectCards[0].y
      let b = selectCards[0].y + selectCards[0].height
      let r = selectCards[0].x + selectCards[0].width
      for (let i = 1; i < selectCards.length; i++) {
        if (l >= selectCards[i].x) {
          l = selectCards[i].x
        }
        if (t >= selectCards[i].y) {
          t = selectCards[i].y
        }
        if (b <= selectCards[i].y + selectCards[i].height) {
          b = selectCards[i].y + selectCards[i].height
        }
        if (r <= selectCards[i].x + selectCards[i].width) {
          r = selectCards[i].x + selectCards[i].width
        }
      }
      console.log(copy.cards, 'copy.cards')
      copy.cards = copy.cards.map((item) => {
        if (copy.selectedCardsIds.includes(item.id)) {
          return {
            ...item,
            x:
              action.align === 'left'
                ? l
                : action.align === 'right'
                ? r - item.width
                : item.x,
            y:
              action.align === 'top'
                ? t
                : action.align === 'bottom'
                ? b - item.height
                : item.y
          }
        }
        return item
      })

      return {
        ...copy
      }
    }
    default:
      return state
  }
}
