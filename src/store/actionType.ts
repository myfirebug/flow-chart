import { IAnyObject } from '@src/types/index'

// counter state数据类型
export type COUNTER_STATE = number
// 定义增加 state 类型常量
export const INCREMENT = 'INCREMENT'
export type INCREMENT_TYPE = typeof INCREMENT

// 定义减少 state 类型常量
export const DECREMENT = 'DECREMENT'
export type DECREMENT_TYPE = typeof DECREMENT

// 获取用户信息
export const USERINFO = 'USERINFO'
export type USERINFO_TYPE = typeof USERINFO

// 菜单接口
export interface IMenu {
  isMemu: 1 | 2 | 3
  resUrl: string
  components: string
  resIcon: string
  resTitle: string
  status: number
  flag: Boolean
  subResource?: IMenu[]
}
export type MENU_STATE = IMenu[]

// 面包屑
export interface IBreadCrumbsItem {
  path: string
  name: string
}

// 路由接口
export interface IRouter {
  component: string
  icon: string
  id: number
  name: string
  path: string
  flag: Boolean
}

/**
 * 策略
 */
// authorization 数据类型
export interface IAuthorization {
  menu: MENU_STATE
  routers: IRouter[]
  strategy: IAnyObject
  breadCrumbs: IBreadCrumbsItem[]
}

// 获取菜单
export const MENU = 'MENU'
export type MENU_TYPE = typeof MENU

// 获取策略
export const STRATEGY = 'STRATEGY'
export type STRATEGY_TYPE = typeof STRATEGY

// 所有的数据的数据类型, 注意这里每加一个state模块都必须在这里进行申明
export type ALL_STATE = {
  counter: COUNTER_STATE
  authorization: IAuthorization
  userinfo: IAnyObject
}
