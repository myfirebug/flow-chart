import {
  CARD_TYPE,
  MODIFY_CARD_TITLE_TYPE,
  MODIFY_CARD_PORTS_TYPE,
  ADD_CARD_FROM_ITEM_TYPE,
  MODIFY_CARD_FROM_ITEM_TYPE,
  SELECT_CARD_FROM_ITEM_TYPE,
  DELETE_CARD_FROM_ITEM_TYPE
} from './type'
import { CARD_STATE, IPORT_TYPE, IPARAM } from '@src/types'

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

// 添加卡片表单元素
export interface ModifyCardFormItemAction {
  type: MODIFY_CARD_FROM_ITEM_TYPE
  data: any
}

// 添加选中表单元素
export interface SelectCardFormItemAction {
  type: SELECT_CARD_FROM_ITEM_TYPE
  id: string
}

// 删除选中表单元素
export interface DeleteCardFormItemAction {
  type: DELETE_CARD_FROM_ITEM_TYPE
}



// 定义 ModifyAction 类型
export type ModifyAction =
  | ICardAction
  | IModifyCardTitleAction
  | IModifyCardPortsAction
  | IAddCardFormItemAction
  | ModifyCardFormItemAction
  | SelectCardFormItemAction
  | DeleteCardFormItemAction
