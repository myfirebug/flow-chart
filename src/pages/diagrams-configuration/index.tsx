/*
 * @Description: 页面描述
 * @Author: hejp 378540660@qq.com
 * @Date: 2023-02-09 15:22:35
 * @LastEditors: hejp 378540660@qq.com
 * @LastEditTime: 2023-03-14 20:33:49
 * @FilePath: \flow-chart\src\pages\diagrams-configuration\index.tsx
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
import React, {
  FC,
  useCallback,
  useEffect,
  useMemo,
  useReducer,
  useState
} from 'react'
import { Stage, Layer } from 'react-konva'
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
  const [type, setType] = useState<IType>()
  // 位置信息
  const [coordinate, setCoordinate] = useState({
    sx: 0,
    sy: 0,
    ex: 0,
    ey: 0,
    distanceCardX: 0,
    distanceCardY: 0,
    distanceStageX: 0,
    distanceStageY: 0
  })
  // 卡片连接类型
  const [portType, setPortType] = useState<'left' | 'right' | ''>('')
  // 卡片连接
  const [, setEdge] = useState<EDGES_STATE>({
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
      console.log(e, 'eee')
      const { offsetX, offsetY } = e.evt
      const { type, cx, cy, id, cardId, portId, group } = e.target.attrs
      if (type) {
        setType(type)
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
          setEdge({
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
          })
          break
        default:
      }
      // 选中卡片
      if (
        type !== 'stage' &&
        (!state.selectedCardsIds || !state.selectedCardsIds.includes(id))
      ) {
        console.log(id, cardId)
        dispatch({
          type: 'SELECTS_CARD',
          ids: id || cardId
        })
      }

      setCoordinate({
        sx: offsetX,
        sy: offsetY,
        ex: offsetX,
        ey: offsetY,
        distanceCardX: offsetX - cx,
        distanceCardY: offsetY - cy,
        distanceStageX: offsetX - stageConfig.x,
        distanceStageY: offsetY - stageConfig.y
      })
    },
    [state.selectedCardsIds, stageConfig.x, stageConfig.y]
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
      switch (type) {
        case 'move':
          dispatch({
            type: 'MODIFY_CARD',
            data: {
              x: offsetX - coordinate.distanceCardX,
              y: offsetY - coordinate.distanceCardY
            }
          })
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
    [
      type,
      coordinate.distanceCardX,
      coordinate.distanceCardY,
      coordinate.distanceStageX,
      coordinate.distanceStageY
    ]
  )

  const onMouseUp = useCallback(
    (e: KonvaEventObject<MouseEvent>) => {
      const { cardId, portId, group } = e.target.attrs
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
          if (portType !== group) {
            setEdge((edgeState) => {
              const edge = {
                ...edgeState,
                source: {
                  cell: group === 'right' ? cardId : edgeState.source.cell,
                  port: group === 'right' ? portId : edgeState.source.port
                },
                target: {
                  cell: group === 'left' ? cardId : edgeState.target.cell,
                  port: group === 'left' ? portId : edgeState.target.port
                },
                data: {
                  source: group === 'right' ? cardId : edgeState.source.cell,
                  target: group === 'left' ? cardId : edgeState.target.cell
                }
              }
              if (state.edges.length) {
                const index = state.edges.findIndex(
                  (item) =>
                    item.source.cell === edge.source.cell &&
                    item.source.port === edge.source.port &&
                    item.target.cell === edge.target.cell &&
                    item.target.port === edge.target.port
                )
                if (index === -1) {
                  dispatch({
                    type: 'ADD_EDGE',
                    edge: edge
                  })
                } else {
                  message.error('不能连接一样的线')
                }
              } else {
                dispatch({
                  type: 'ADD_EDGE',
                  edge: edge
                })
              }
              console.log(edge, 'edge')
              return edge
            })
          } else {
            message.error('只能inPort连接outPort')
          }
          break
        default:
      }
      setType('')
    },
    [type, stageConfig.x, stageConfig.y, portType, state.edges]
  )

  const lines = useMemo(() => {
    let result: ILine[] = []
    if (state.edges) {
      state.edges.forEach((item) => {
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
        let sourceCell = state.cards.find(
          (card) => card.id === item.data.source
        )
        let targetCell = state.cards.find(
          (card) => card.id === item.data.target
        )
        if (sourceCell && targetCell) {
          let sourcePort = sourceCell.ports.find(
            (cell) => cell.id === item.source.port
          )
          let targetPort = targetCell.ports.find(
            (cell) => cell.id === item.target.port
          )
          if (sourcePort && targetPort) {
            if (sourcePort.group === 'left') {
              line.source.x = sourceCell.x + MARGIN_LEFT + PORT_DIMENSION / 2
              line.source.y =
                sourceCell.y + TITLE_HEIGHT + MARGIN_TOP + PORT_DIMENSION / 2
            } else {
              line.source.x =
                sourceCell.x +
                sourceCell.width -
                MARGIN_LEFT -
                PORT_DIMENSION / 2
              line.source.y =
                sourceCell.y + TITLE_HEIGHT + MARGIN_TOP + PORT_DIMENSION / 2
            }
            if (targetPort.group === 'left') {
              line.target.x = targetCell.x + MARGIN_LEFT + PORT_DIMENSION / 2
              line.target.y =
                targetCell.y + TITLE_HEIGHT + MARGIN_TOP + PORT_DIMENSION / 2
            } else {
              line.target.x =
                targetCell.x +
                targetCell.width -
                MARGIN_LEFT -
                PORT_DIMENSION / 2
              line.target.y =
                targetCell.y + TITLE_HEIGHT + MARGIN_TOP + PORT_DIMENSION / 2
            }
            result.push(line)
          }
        }
      })
    }
    return result
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
                {state.cards
                  ? state.cards.map((item) => (
                      <Card
                        config={item}
                        key={item.id}
                        SelectedCardsIds={state.selectedCardsIds}
                      />
                    ))
                  : null}
              </Layer>
              <Layer>
                {type === 'port' ? (
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
