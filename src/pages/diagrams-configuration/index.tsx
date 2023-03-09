/*
 * @Description: 页面描述
 * @Author: hejp 378540660@qq.com
 * @Date: 2023-02-09 15:22:35
 * @LastEditors: hejp 378540660@qq.com
 * @LastEditTime: 2023-03-09 10:53:54
 * @FilePath: \flow-chart\src\pages\diagrams-configuration\index.tsx
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
import React, { FC, useEffect, useReducer } from 'react'
import { Stage } from 'react-konva'
import ConfigurationHeader from './components/header'
import Settings from './components/settings'
import Menus from './components/menus'
import './index.scss'
import Ajax from '@src/service'
import { ALL_STATE } from './store/type'
import { ModifyAction } from './store/action'
import { diagrams, initialState } from './store/reducers'
import { getUrl, guid } from '@src/utils/tools'
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
  width: window.innerWidth - 300,
  height: window.innerHeight - 62
}

const Configuration: FC<IConfigurationProps> = () => {
  const [state, dispatch] = useReducer(diagrams, initialState)
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
          cards: []
        }
      })
    }
  }, [])

  console.log(state, 'state')

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
            <Stage {...stageConfig} draggable></Stage>
          </div>
          <Settings />
        </div>
        <div className='app-diagrams-configuration__footer'></div>
      </div>
    </DiagramsConfigurationContext.Provider>
  )
}
export default Configuration
