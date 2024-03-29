import {
  CARD_TYPE,
  MODIFY_CARD_TITLE_TYPE,
  MODIFY_CARD_PORTS_TYPE,
  ADD_CARD_FROM_ITEM_TYPE,
  MODIFY_CARD_FROM_ITEM_TYPE,
  SELECT_CARD_FROM_ITEM_TYPE,
  DELETE_CARD_FROM_ITEM_TYPE,
  COPY_CARD_FROM_ITEM_TYPE,
  TOP_CARD_FROM_ITEM_TYPE,
  BOTTOM_CARD_FROM_ITEM_TYPE,
  MOVEUP_CARD_FROM_ITEM_TYPE,
  MOVEDOWN_CARD_FROM_ITEM_TYPE,
  MODIFY_CARD_WIDTH_TYPE
} from './type'
import { CARD_STATE, IPORT_TYPE, IPARAM } from '@src/types'

// 获取卡片数据
export interface cardAction {
  type: CARD_TYPE
  data: CARD_STATE
}
// 修改标题
export interface modifyCardTitleAction {
  type: MODIFY_CARD_TITLE_TYPE
  title: string
}
// 修改连接点
export interface modifyCardPortsAction {
  type: MODIFY_CARD_PORTS_TYPE
  data: IPORT_TYPE[]
}

// 添加卡片表单元素
export interface addCardFormItemAction {
  type: ADD_CARD_FROM_ITEM_TYPE
  data: IPARAM
}

// 添加卡片表单元素
export interface modifyCardFormItemAction {
  type: MODIFY_CARD_FROM_ITEM_TYPE
  data: any
}

// 添加选中表单元素
export interface selectCardFormItemAction {
  type: SELECT_CARD_FROM_ITEM_TYPE
  id: string
}

// 删除选中表单元素
export interface deleteCardFormItemAction {
  type: DELETE_CARD_FROM_ITEM_TYPE
}

// 复制选中表单元素
export interface copyCardFormItemAction {
  type: COPY_CARD_FROM_ITEM_TYPE
}

// 置顶选中表单元素
export interface topCardFormItemAction {
  type: TOP_CARD_FROM_ITEM_TYPE
}

// 置底选中表单元素
export interface bottomCardFormItemAction {
  type: BOTTOM_CARD_FROM_ITEM_TYPE
}

// 置底选中表单元素
export interface moveUpCardFormItemAction {
  type: MOVEUP_CARD_FROM_ITEM_TYPE
}

// 置底选中表单元素
export interface movedownCardFormItemAction {
  type: MOVEDOWN_CARD_FROM_ITEM_TYPE
}

// 修改卡片宽度
export interface modifyCardWidthAction {
  type: MODIFY_CARD_WIDTH_TYPE,
  width: number
}



// 定义 ModifyAction 类型
export type ModifyAction =
  | cardAction
  | modifyCardTitleAction
  | modifyCardPortsAction
  | addCardFormItemAction
  | modifyCardFormItemAction
  | selectCardFormItemAction
  | deleteCardFormItemAction
  | copyCardFormItemAction
  | topCardFormItemAction
  | bottomCardFormItemAction
  | moveUpCardFormItemAction
  | movedownCardFormItemAction
  | modifyCardWidthAction
