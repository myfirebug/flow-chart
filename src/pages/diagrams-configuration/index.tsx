/*
 * @Description: 页面描述
 * @Author: hejp 378540660@qq.com
 * @Date: 2023-02-09 15:22:35
 * @LastEditors: hejp 378540660@qq.com
 * @LastEditTime: 2023-03-13 22:35:55
 * @FilePath: \flow-chart\src\pages\diagrams-configuration\index.tsx
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
import React, { FC, useCallback, useEffect, useReducer, useState } from 'react'
import { Stage, Layer, Path } from 'react-konva'
import ConfigurationHeader from './components/header'
import Settings from './components/settings'
import Menus from './components/menus'
import './index.scss'
import { ALL_STATE } from './store/type'
import { ModifyAction } from './store/action'
import { diagrams, initialState } from './store/reducers'
import { getUrl } from '@src/utils/tools'
import Card from '@src/components/card'
import { KonvaEventObject } from 'konva/lib/Node'
import AuxiliaryWire from '@src/components/card/components/auxiliary-wire'
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
          cards: []
        }
      })
    }
  }, [])

  const onMouseDown = useCallback(
    (e: KonvaEventObject<MouseEvent>) => {
      console.log(e, 'eee')
      const { offsetX, offsetY } = e.evt
      const { type, cx, cy, id, cardId, portId } = e.target.attrs
      if (type) {
        setType(type)
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

      // 取消选中卡片
      if (type === 'stage' && state.selectedCardsIds) {
        dispatch({
          type: 'SELECTS_CARD',
          ids: ''
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
      if (type === 'stage') {
        dispatch({
          type: 'MODIFY_DIAGRAMS_COORDINATE',
          coordinate: {
            x: stageConfig.x,
            y: stageConfig.y
          }
        })
      }
      setType('')
    },
    [stageConfig.x, stageConfig.y, type]
  )

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
