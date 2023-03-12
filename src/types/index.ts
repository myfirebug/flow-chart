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

export type IPORT_TYPE = 'left' | 'right'
// counter state数据类型
export type IPORT = {
  visible: boolean
  group: IPORT_TYPE
  id: string | number
}

export type FORM_TYPE = 'Input' | 'TextArea'

export interface IPARAM extends IAnyObject {
  field: string
  formType: string
  label: string
  placeholder: string
  required: boolean
  tooltip: string
  disabled: boolean
  value: string | number | boolean
}

export type CARD_STATE = {
  id: string
  width: number
  height: number
  title: string
  x: number
  y: number
  ports: IPORT[]
  inParams: IPARAM[]
}
