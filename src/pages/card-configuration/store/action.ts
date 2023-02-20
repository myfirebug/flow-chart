import { CARD_TYPE, CARD_STATE, MODIFY_CARD_TITLE_TYPE } from './type'

// 获取卡片数据
export interface ICardAction {
  type: CARD_TYPE,
  data: CARD_STATE
}
// 修改标题
export interface IModifyCardTitleAction {
  type: MODIFY_CARD_TITLE_TYPE,
  title: string
}
// 定义 ModifyAction 类型
export type ModifyAction = ICardAction | IModifyCardTitleAction
