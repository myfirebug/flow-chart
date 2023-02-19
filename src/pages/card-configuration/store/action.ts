import { DECREMENT_TYPE, INCREMENT_TYPE } from './type'

// 增加的接口类型
export interface IIncrementAction {
  type: INCREMENT_TYPE
}
// 删除的接口类型
export interface IDecrementAction {
  type: DECREMENT_TYPE
}

// 定义 ModifyAction 类型，包含 IIncrementAction 和 IDecrementAction接口类型
export type ModifyAction = IIncrementAction | IDecrementAction
