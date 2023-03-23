/*
 * @Description: 页面描述
 * @Author: hejp 378540660@qq.com
 * @Date: 2023-02-08 15:15:15
 * @LastEditors: hejp 378540660@qq.com
 * @LastEditTime: 2023-03-22 19:57:22
 * @FilePath: \flow-chart\src\store\index.ts
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
import { createStore, applyMiddleware } from 'redux'
// 数据持久化工具
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage/session'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import reducers from './reducers'

const middleware: any[] = [thunk]

// 判断是否是正式环境
if (process.env.NODE_ENV === 'development') {
  middleware.push(logger)
}

const persistConfig = {
  // 存储的名称
  key: 'DIAGRAMS_ROOT',
  // 存储方式
  storage: storage,
  // 某个reducer,不持久化
  // blacklist: ['development'],
  // 需要持久化的模块
  whitelist: [
    'counter',
    'dictionary',
    'authorization',
    'largeScreen',
    'userinfo'
  ]
}

const persistedReducer = persistReducer(persistConfig, reducers)

export default createStore(persistedReducer, applyMiddleware(...middleware))
