import { DIAGRAMS_TYPE, ALL_STATE } from './type'

// 获取卡片数据
export interface cardAction {
  type: DIAGRAMS_TYPE
  data: ALL_STATE
}

// 定义 ModifyAction 类型
export type ModifyAction = cardAction
