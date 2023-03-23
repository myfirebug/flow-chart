/*
 * @Description: 页面描述
 * @Author: hejp 378540660@qq.com
 * @Date: 2023-02-09 15:22:35
 * @LastEditors: hejp 378540660@qq.com
 * @LastEditTime: 2023-03-23 19:54:44
 * @FilePath: \flow-chart\src\pages\diagrams-configuration\index.tsx
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
import React, {
  FC,
  useCallback,
  useEffect,
  useMemo,
  useReducer,
  useRef,
  useState
} from 'react'
import { Stage, Layer, Group } from 'react-konva'
import ConfigurationHeader from './components/header'
import Settings from './components/settings'
import Menus from './components/menus'
import './index.scss'
import { ALL_STATE } from './store/type'
import { EDGES_STATE, COORDINATE } from '@src/types'
import { ModifyAction } from './store/action'
import { diagrams, initialState } from './store/reducers'
import { getUrl, guid } from '@src/utils/tools'
import Card from '@src/components/card'
import { KonvaEventObject } from 'konva/lib/Node'
import AuxiliaryWire from '@src/components/card/components/auxiliary-wire'
import { message } from 'antd'
import {
  PORT_DIMENSION,
  TITLE_HEIGHT,
  MARGIN_TOP,
  MARGIN_LEFT
} from '@src/components/card/components/constant'
export type Icontent = {
  dispatch: React.Dispatch<ModifyAction>
  data: ALL_STATE
}
// context
export const DiagramsConfigurationContext = React.createContext<Icontent>({
  data: initialState,
  dispatch: () => {}
})
export type IType = 'stage' | 'move' | 'port' | ''

type ILine = { id: string; target: COORDINATE; source: COORDINATE }

interface IConfigurationProps {}

const Configuration: FC<IConfigurationProps> = () => {
  const [state, dispatch] = useReducer(diagrams, initialState)
  // 舞台配置
  const [stageConfig, setStageConfig] = useState({
    x: 0,
    y: 0,
    width: window.innerWidth - 600,
    height: window.innerHeight - 62
  })
  // 鼠标的类型
  const mouseType = useRef<IType>('')
  // 位置信息
  const [coordinate, setCoordinate] = useState({
    sx: 0,
    sy: 0,
    ex: 0,
    ey: 0,
    distanceCardX: 0,
    distanceCardY: 0,
    distanceStageX: 0,
    distanceStageY: 0,
    distanceGroupX: 0,
    distanceGroupY: 0
  })
  // 卡片连接类型
  const [portType, setPortType] = useState<'left' | 'right' | ''>('')
  // 卡片连接
  const edge = useRef<EDGES_STATE>({
    id: '',
    source: {
      cell: '',
      port: ''
    },
    target: {
      cell: '',
      port: ''
    },
    data: {
      source: '',
      target: ''
    }
  })
  //
  useEffect(() => {
    const resizeHandler = () => {
      setStageConfig((state) => ({
        ...state,
        width: window.innerWidth - 600,
        height: window.innerHeight - 62
      }))
    }
    window.addEventListener('resize', resizeHandler)
    return () => {
      window.removeEventListener('resize', resizeHandler)
    }
  }, [])
  // 获取卡片数据
  useEffect(() => {
    if (getUrl('id')) {
      // 获取接口数据
    } else {
      dispatch({
        type: 'DIAGRAMS',
        data: {
          id: null,
          title: '未命名流程图',
          description: '',
          selectedCardsIds: '',
          x: 0,
          y: 0,
          cards: [],
          edges: []
        }
      })
    }
  }, [])
  const onMouseDown = useCallback(
    (e: KonvaEventObject<MouseEvent>) => {
      const { offsetX, offsetY } = e.evt
      const { type, id, cardId, portId, group } = e.target.attrs
      if (type) {
        mouseType.current = type
      }
      switch (type) {
        case 'stage':
          // 取消选中卡片
          if (state.selectedCardsIds) {
            dispatch({
              type: 'SELECTS_CARD',
              ids: ''
            })
          }
          break
        case 'port':
          setPortType(group)
          edge.current = {
            id: guid(),
            source: {
              cell: group === 'right' ? cardId : '',
              port: group === 'right' ? portId : ''
            },
            target: {
              cell: group === 'left' ? cardId : '',
              port: group === 'left' ? portId : ''
            },
            data: {
              source: group === 'right' ? cardId : '',
              target: group === 'left' ? cardId : ''
            }
          }
          break
        default:
      }
      // 选中卡片
      if (
        type !== 'stage' &&
        (!state.selectedCardsIds || !state.selectedCardsIds.includes(id))
      ) {
        dispatch({
          type: 'SELECTS_CARD',
          ids: id || cardId
        })
      }

      setCoordinate((state) => ({
        ...state,
        sx: offsetX,
        sy: offsetY,
        ex: offsetX,
        ey: offsetY,
        distanceCardX: offsetX - state.distanceGroupX,
        distanceCardY: offsetY - state.distanceGroupY,
        distanceStageX: offsetX - stageConfig.x,
        distanceStageY: offsetY - stageConfig.y,
        distanceGroupX: 0,
        distanceGroupY: 0
      }))
    },
    [state.selectedCardsIds, stageConfig.x, stageConfig.y, edge]
  )
  const onMouseMove = useCallback(
    (e: KonvaEventObject<MouseEvent>) => {
      const { offsetX, offsetY } = e.evt
      setCoordinate((state) => {
        return {
          ...state,
          ex: offsetX,
          ey: offsetY
        }
      })
      switch (mouseType.current) {
        case 'move':
          setCoordinate((state) => ({
            ...state,
            distanceGroupX: offsetX - state.distanceCardX,
            distanceGroupY: offsetY - state.distanceCardY
          }))
          break
        case 'stage':
          setStageConfig((stage) => ({
            ...stage,
            x: offsetX - coordinate.distanceStageX,
            y: offsetY - coordinate.distanceStageY
          }))
          break
      }
    },
    [coordinate.distanceStageX, coordinate.distanceStageY]
  )
  const onMouseUp = useCallback(
    (e: KonvaEventObject<MouseEvent>) => {
      const { type, cardId, portId, group } = e.target.attrs
      switch (type) {
        case 'stage':
          dispatch({
            type: 'MODIFY_DIAGRAMS_COORDINATE',
            coordinate: {
              x: stageConfig.x,
              y: stageConfig.y
            }
          })
          break
        case 'port':
          if (!group) return
          if (portType !== group) {
            const edgeStage: EDGES_STATE = {
              ...edge.current,
              source: {
                cell: group === 'right' ? cardId : edge.current.source.cell,
                port: group === 'right' ? portId : edge.current.source.port
              },
              target: {
                cell: group === 'left' ? cardId : edge.current.target.cell,
                port: group === 'left' ? portId : edge.current.target.port
              },
              data: {
                source: group === 'right' ? cardId : edge.current.source.cell,
                target: group === 'left' ? cardId : edge.current.target.cell
              }
            }

            if (edgeStage.source.cell === edgeStage.target.cell) {
              message.error('同一卡片不能连接')
              return
            }
            if (state.edges.length) {
              const index = state.edges.findIndex(
                (item) =>
                  (item.source.cell === edgeStage.source.cell &&
                    item.source.port === edgeStage.source.port) ||
                  (item.target.cell === edgeStage.target.cell &&
                    item.target.port === edgeStage.target.port)
              )

              if (index === -1) {
                dispatch({
                  type: 'ADD_EDGE',
                  edge: edgeStage
                })
              } else {
                message.error('该节点已经连接了')
              }
            } else {
              dispatch({
                type: 'ADD_EDGE',
                edge: edgeStage
              })
            }
          } else {
            message.error('只能inPort连接outPort')
          }
          break
        case 'move':
          // 重置Group坐标
          setCoordinate((state) => {
            dispatch({
              type: 'MODIFY_CARDS_COORDINATE',
              coordinate: {
                x: state.distanceGroupX,
                y: state.distanceGroupY
              }
            })
            return {
              ...state,
              distanceGroupX: 0,
              distanceGroupY: 0
            }
          })

          break
        default:
      }
      // 重置类型
      mouseType.current = ''
    },
    [mouseType, stageConfig.x, stageConfig.y, portType, state.edges, edge]
  )
  const lines = useMemo(() => {
    let result: ILine[] = []
    const { edges, cards, selectedCardsIds } = state
    if (edges) {
      edges.forEach((item) => {
        const line: ILine = {
          id: item.id,
          target: {
            x: 0,
            y: 0
          },
          source: {
            x: 0,
            y: 0
          }
        }
        let sourceCell = cards.find((card) => card.id === item.data.source)
        let targetCell = cards.find((card) => card.id === item.data.target)
        if (sourceCell && targetCell) {
          // 当前source卡片是否选中
          const isSourceSelect =
            selectedCardsIds && selectedCardsIds.includes(sourceCell.id)
          // 当前target卡片是否选中
          const isTargetSelect =
            selectedCardsIds && selectedCardsIds.includes(targetCell.id)

          const distance = {
            source: {
              x: isSourceSelect ? coordinate.distanceGroupX : 0,
              y: isSourceSelect ? coordinate.distanceGroupY : 0
            },
            target: {
              x: isTargetSelect ? coordinate.distanceGroupX : 0,
              y: isTargetSelect ? coordinate.distanceGroupY : 0
            }
          }
          let sourcePort = sourceCell.ports.find(
            (cell) => cell.id === item.source.port
          )
          let targetPort = targetCell.ports.find(
            (cell) => cell.id === item.target.port
          )
          if (sourcePort && targetPort) {
            if (sourcePort.group === 'left') {
              line.source.x =
                sourceCell.x +
                MARGIN_LEFT +
                PORT_DIMENSION / 2 +
                distance.source.x
              line.source.y =
                sourceCell.y +
                TITLE_HEIGHT +
                MARGIN_TOP +
                PORT_DIMENSION / 2 +
                +distance.source.y
            } else {
              line.source.x =
                sourceCell.x +
                sourceCell.width -
                MARGIN_LEFT -
                PORT_DIMENSION / 2 +
                +distance.source.x
              line.source.y =
                sourceCell.y +
                TITLE_HEIGHT +
                MARGIN_TOP +
                PORT_DIMENSION / 2 +
                +distance.source.y
            }
            if (targetPort.group === 'left') {
              line.target.x =
                targetCell.x +
                MARGIN_LEFT +
                PORT_DIMENSION / 2 +
                distance.target.x
              line.target.y =
                targetCell.y +
                TITLE_HEIGHT +
                MARGIN_TOP +
                PORT_DIMENSION / 2 +
                +distance.target.y
            } else {
              line.target.x =
                targetCell.x +
                targetCell.width -
                MARGIN_LEFT -
                PORT_DIMENSION / 2 +
                +distance.target.x
              line.target.y =
                targetCell.y +
                TITLE_HEIGHT +
                MARGIN_TOP +
                PORT_DIMENSION / 2 +
                +distance.target.y
            }
            result.push(line)
          }
        }
      })
    }
    return result
  }, [state, coordinate.distanceGroupX, coordinate.distanceGroupY])

  // 选中的卡片
  const selectCards = useMemo(() => {
    return state.selectedCardsIds
      ? state.cards.filter((item) => state.selectedCardsIds.includes(item.id))
      : []
  }, [state])

  // 选中的卡片
  const noSelectCards = useMemo(() => {
    return state.selectedCardsIds
      ? state.cards.filter((item) => !state.selectedCardsIds.includes(item.id))
      : state.cards
  }, [state])

  return (
    <DiagramsConfigurationContext.Provider
      value={{
        dispatch: dispatch,
        data: state
      }}>
      <div className='app-diagrams-configuration'>
        <ConfigurationHeader />
        <div className='app-diagrams-configuration__body'>
          <Menus />
          <div className='app-diagrams-configuration__container' id='js_stage'>
            <Stage
              {...stageConfig}
              type='stage'
              onMouseDown={onMouseDown}
              onMouseMove={onMouseMove}
              onMouseUp={onMouseUp}>
              <Layer>
                {noSelectCards
                  ? noSelectCards.map((item) => (
                      <Card
                        config={item}
                        key={item.id}
                        SelectedCardsIds={state.selectedCardsIds}
                      />
                    ))
                  : null}
                <Group
                  x={coordinate.distanceGroupX}
                  y={coordinate.distanceGroupY}>
                  {selectCards
                    ? selectCards.map((item) => (
                        <Card
                          config={item}
                          key={item.id}
                          SelectedCardsIds={state.selectedCardsIds}
                        />
                      ))
                    : null}
                </Group>
              </Layer>
              <Layer>
                {mouseType.current === 'port' ? (
                  <AuxiliaryWire
                    s={{
                      x: coordinate.sx - state.x,
                      y: coordinate.sy - state.y
                    }}
                    e={{
                      x: coordinate.ex - state.x,
                      y: coordinate.ey - state.y
                    }}
                  />
                ) : null}
              </Layer>
              <Layer>
                {lines.map((item) => (
                  <AuxiliaryWire
                    key={item.id}
                    s={{
                      x: item.source.x,
                      y: item.source.y
                    }}
                    e={{
                      x: item.target.x,
                      y: item.target.y
                    }}
                  />
                ))}
              </Layer>
            </Stage>
          </div>
          <Settings />
        </div>
        <div className='app-diagrams-configuration__footer'></div>
      </div>
    </DiagramsConfigurationContext.Provider>
  )
}
export default Configuration
