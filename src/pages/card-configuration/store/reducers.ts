/*
 * @Description: 页面描述
 * @Author: hejp 378540660@qq.com
 * @Date: 2023-02-19 11:29:28
 * @LastEditors: hejp 378540660@qq.com
 * @LastEditTime: 2023-02-19 11:38:19
 * @FilePath: \flow-chart\src\pages\configuration\components\configuration-form\store\reducers.ts
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
import { ModifyAction } from './action'
import { DECREMENT, INCREMENT, STATE } from './type'

// 处理并返回 state
export const initialState: STATE = {
  counter: 0
}

export const counter = (
  state: STATE = initialState,
  action: ModifyAction
): STATE => {
  switch (action.type) {
    case DECREMENT:
      return {
        ...state,
        counter: state.counter - 1
      }
    case INCREMENT:
      return {
        ...state,
        counter: state.counter + 1
      }
    default:
      return state
  }
}
