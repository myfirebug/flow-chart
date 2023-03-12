import {
  DIAGRAMS_TYPE,
  ALL_STATE,
  MODIFY_DIAGRAMS_TITLE_TYPE,
  ADD_CARD_TYPE,
  MODIFY_CARD_TYPE
} from './type'
import { CARD_STATE } from '@src/types'

// 获取流程图数据
export interface diagramsAction {
  type: DIAGRAMS_TYPE
  data: ALL_STATE
}

// 添加卡片
export interface addCardAction {
  type: ADD_CARD_TYPE
  data: CARD_STATE
}

// 修改卡片
export interface modifyCardAction {
  type: MODIFY_CARD_TYPE
  data: any
}

// 获取流程图数据
export interface modifyDiagramsTitleAction {
  type: MODIFY_DIAGRAMS_TITLE_TYPE
  title: string
}

// 定义 ModifyAction 类型
export type ModifyAction =
  | diagramsAction
  | modifyDiagramsTitleAction
  | addCardAction
  | modifyCardAction
