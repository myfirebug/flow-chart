import {
  DIAGRAMS_TYPE,
  ALL_STATE,
  MODIFY_DIAGRAMS_TITLE_TYPE,
  ADD_CARD_TYPE,
  MODIFY_CARD_TYPE,
  SELECTS_CARD_TYPE,
  MODIFY_DIAGRAMS_COORDINATE_TYPE,
  ADD_EDGE_TYPE,
  DEL_CARD_TYPE,
  COPY_CARD_TYPE
} from './type'
import { CARD_STATE, COORDINATE, EDGES_STATE } from '@src/types'

// 获取流程图数据
export interface diagramsAction {
  type: DIAGRAMS_TYPE
  data: ALL_STATE
}

// 获取流程图数据
export interface modifyDiagramsTitleAction {
  type: MODIFY_DIAGRAMS_TITLE_TYPE
  title: string
}

// 获取流程图舞台坐标
export interface modifyDiagramsCoordinateAction {
  type: MODIFY_DIAGRAMS_COORDINATE_TYPE
  coordinate: COORDINATE
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

// 卡片
export interface selectsCardAction {
  type: SELECTS_CARD_TYPE
  ids: string
}

// 增加卡片连接
export interface addEdgeAction {
  type: ADD_EDGE_TYPE
  edge: EDGES_STATE
}

// 删除卡片连接
export interface delCardAction {
  type: DEL_CARD_TYPE
}

// 删除卡片连接
export interface copyCardAction {
  type: COPY_CARD_TYPE
}

// 定义 ModifyAction 类型
export type ModifyAction =
  | diagramsAction
  | modifyDiagramsTitleAction
  | addCardAction
  | modifyCardAction
  | selectsCardAction
  | modifyDiagramsCoordinateAction
  | addEdgeAction
  | delCardAction
  | copyCardAction
