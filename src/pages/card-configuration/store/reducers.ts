/*
 * @Description: 页面描述
 * @Author: hejp 378540660@qq.com
 * @Date: 2023-02-19 11:29:28
 * @LastEditors: hejp 378540660@qq.com
 * @LastEditTime: 2023-02-20 12:39:35
 * @FilePath: \flow-chart\src\pages\card-configuration\store\reducers.ts
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
import { ModifyAction } from './action'
import { CARD, CARD_STATE, MODIFY_CARD_TITLE } from './type'

// 处理并返回 state
export const initialState: CARD_STATE | null = null

export const counter = (
  state: CARD_STATE | null = initialState,
  action: ModifyAction
): CARD_STATE | null => {
  switch (action.type) {
    case CARD:
      return action.data
    case MODIFY_CARD_TITLE:
      return state
        ? {
            ...state,
            title: action.title
          }
        : null
    default:
      return state
  }
}
