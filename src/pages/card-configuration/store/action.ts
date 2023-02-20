import { CARD_TYPE, CARD_STATE } from './type'

// 获取卡片数据
export interface ICardAction {
  type: CARD_TYPE,
  data: CARD_STATE
}
// 定义 ModifyAction 类型
export type ModifyAction = ICardAction
