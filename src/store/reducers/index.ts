/*
 * @Description: 页面描述
 * @Author: hejp 378540660@qq.com
 * @Date: 2023-02-08 15:19:07
 * @LastEditors: hejp 378540660@qq.com
 * @LastEditTime: 2023-02-08 15:20:10
 * @FilePath: \flow-chart\src\store\reducers\index.ts
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
import { combineReducers } from 'redux'
import { authorization } from './authorization'
import { counter } from './counter'
import { userinfo } from './userinfo'
export default combineReducers({
  counter,
  authorization,
  userinfo
})
