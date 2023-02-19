/*
 * @Description: 页面描述
 * @Author: hejp 378540660@qq.com
 * @Date: 2023-02-19 11:28:14
 * @LastEditors: hejp 378540660@qq.com
 * @LastEditTime: 2023-02-19 11:29:07
 * @FilePath: \flow-chart\src\pages\configuration\components\configuration-form\store\type.ts
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
// counter state数据类型
export type COUNTER_STATE = number
// 定义增加 state 类型常量
export const INCREMENT = 'INCREMENT'
export type INCREMENT_TYPE = typeof INCREMENT

// 定义减少 state 类型常量
export const DECREMENT = 'DECREMENT'
export type DECREMENT_TYPE = typeof DECREMENT

export type STATE = {
  counter: COUNTER_STATE
}
