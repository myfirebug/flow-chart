/*
 * @Description: 页面描述
 * @Author: hejp 378540660@qq.com
 * @Date: 2023-02-08 15:16:49
 * @LastEditors: hejp 378540660@qq.com
 * @LastEditTime: 2023-02-08 15:16:56
 * @FilePath: \flow-chart\src\types\index.ts
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
import { AxiosRequestConfig } from 'axios'
// 任意类型的object
export interface IAnyObject {
  [propName: string]: any
}
// 默认接口请求
export interface IDefaultConfig extends AxiosRequestConfig {
  loading?: boolean
  servicePrefix?: string
}

export interface Icard extends IAnyObject {
  x: number
  y: number
  width: number
  height: number
}
