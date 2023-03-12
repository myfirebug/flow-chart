/*
 * @Description: 页面描述
 * @Author: hejp 378540660@qq.com
 * @Date: 2023-02-09 15:22:35
 * @LastEditors: hejp 378540660@qq.com
 * @LastEditTime: 2023-03-12 20:37:01
 * @FilePath: \flow-chart\src\pages\diagrams-configuration\index.tsx
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
import React, { FC, useEffect, useReducer, useState } from 'react'
import { Stage, Layer } from 'react-konva'
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
export type Icontent = {
  dispatch: React.Dispatch<ModifyAction>
  data: ALL_STATE
}
// context
export const DiagramsConfigurationContext = React.createContext<Icontent>({
  data: initialState,
  dispatch: () => {}
})
export type IType = 'stage' | 'move' | 'port'

interface IConfigurationProps {}

// 舞台配置
const stageConfig = {
  x: 0,
  y: 0,
  width: window.innerWidth - 600,
  height: window.innerHeight - 62
}

const Configuration: FC<IConfigurationProps> = () => {
  const [state, dispatch] = useReducer(diagrams, initialState)
  // 鼠标的类型
  const [type, setType] = useState<IType>()

  console.log(type, 'type')

  // 获取卡片数据
  useEffect(() => {
    if (getUrl('id')) {
    } else {
      dispatch({
        type: 'DIAGRAMS',
        data: {
          id: null,
          title: '未命名流程图',
          description: '',
          SelectedCardsIds: '',
          cards: []
        }
      })
    }
  }, [])

  console.log(state, 'state')

  const onMouseDown = (e: KonvaEventObject<MouseEvent>) => {
    console.log(e, 'eee')
    const { type } = e.target.attrs
    if (type) {
      setType(type)
    }
  }
  const onMouseMove = (e: KonvaEventObject<MouseEvent>) => {}

  const onMouseUp = (e: KonvaEventObject<MouseEvent>) => {}

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
                        SelectedCardsIds={state.SelectedCardsIds}
                      />
                    ))
                  : null}
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
