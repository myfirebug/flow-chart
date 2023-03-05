/*
 * @Description: 页面描述
 * @Author: hejp 378540660@qq.com
 * @Date: 2023-02-09 15:22:35
 * @LastEditors: hejp 378540660@qq.com
 * @LastEditTime: 2023-03-05 22:18:01
 * @FilePath: \flow-chart\src\pages\card-configuration\index.tsx
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
import React, { FC, useState, useReducer, useEffect } from 'react'
import { Stage, Layer } from 'react-konva'
import './index.scss'
import Card from '@src/components/card'
import { showContentMenu, hideContentMenu, getUrl, guid } from '@utils/tools'
import Konva from 'konva'
// 头部
import ConfigurationHeader from './components/header'
// 卡片配置
import Sittings from './components/settings'

import { counter, initialState } from './store/reducers'
import { ALL_STATE } from './store/type'
import { ModifyAction } from './store/action'

export type IType = 'stage' | 'move' | 'port'

export type Icontent = {
  dispatch: React.Dispatch<ModifyAction>
  data: ALL_STATE
}
// context
export const CardConfigurationContext = React.createContext<Icontent>({
  data: initialState,
  dispatch: () => {}
})

interface IConfigurationProps {}

// 舞台配置
const stageConfig = {
  x: 0,
  y: 0,
  width: window.innerWidth - 300,
  height: window.innerHeight - 62
}

const Configuration: FC<IConfigurationProps> = () => {
  const [state, dispatch] = useReducer(counter, initialState)
  // 获取卡片数据
  useEffect(() => {
    // 如果ID存在调用获取卡片详情接口
    const id = getUrl('id')
    if (!id) {
      dispatch({
        type: 'CARD',
        data: {
          id: guid(),
          width: 200,
          height: 80,
          title: '未命名卡片',
          x: 10,
          y: 10,
          ports: [
            {
              id: guid(),
              group: 'left',
              visible: true
            },
            {
              id: guid(),
              group: 'right',
              visible: true
            }
          ],
          inParams: []
        }
      })
    }
  }, [])

  return (
    <CardConfigurationContext.Provider
      value={{
        dispatch,
        data: state
      }}>
      <div className='app-card-configuration'>
        {/* 头部 */}
        <ConfigurationHeader />
        <div className='app-card-configuration__body'>
          <div className='app-card-configuration__container' id='js_stage'>
            <Stage {...stageConfig}>
              <Layer>{state.card ? <Card config={state.card} /> : null}</Layer>
            </Stage>
          </div>
          <Sittings />
        </div>
        <div className='app-card-configuration__footer'></div>
      </div>
    </CardConfigurationContext.Provider>
  )
}
export default Configuration
