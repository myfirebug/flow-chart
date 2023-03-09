import { DIAGRAMS_TYPE, ALL_STATE, MODIFY_DIAGRAMS_TITLE_TYPE } from './type'

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

// 定义 ModifyAction 类型
export type ModifyAction = diagramsAction | modifyDiagramsTitleAction
