import {
  CARD_TYPE,
  CARD_STATE,
  MODIFY_CARD_TITLE_TYPE,
  MODIFY_CARD_PORTS_TYPE,
  IPORT_TYPE,
  ADD_CARD_FROM_ITEM_TYPE,
  IPARAM
} from './type'

// 获取卡片数据
export interface ICardAction {
  type: CARD_TYPE
  data: CARD_STATE
}
// 修改标题
export interface IModifyCardTitleAction {
  type: MODIFY_CARD_TITLE_TYPE
  title: string
}
// 修改连接点
export interface IModifyCardPortsAction {
  type: MODIFY_CARD_PORTS_TYPE
  data: IPORT_TYPE[]
}

// 添加卡片表单元素
export interface IAddCardFormItemAction {
  type: ADD_CARD_FROM_ITEM_TYPE
  data: IPARAM
}

// 定义 ModifyAction 类型
export type ModifyAction =
  | ICardAction
  | IModifyCardTitleAction
  | IModifyCardPortsAction
  | IAddCardFormItemAction
