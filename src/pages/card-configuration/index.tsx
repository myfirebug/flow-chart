/*
 * @Description: 页面描述
 * @Author: hejp 378540660@qq.com
 * @Date: 2023-02-09 15:22:35
 * @LastEditors: hejp 378540660@qq.com
 * @LastEditTime: 2023-02-20 10:53:53
 * @FilePath: \flow-chart\src\pages\card-configuration\index.tsx
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
import React, { FC, useState, useReducer } from 'react'
import { Stage, Layer } from 'react-konva'
import './index.scss'
import Card from '@src/components/card'
import { Icard } from '@src/types'
import { showContentMenu, hideContentMenu } from '@utils/tools'
import Konva from 'konva'
// 头部
import ConfigurationHeader from './components/header'
// 卡片配置
import Sittings from './components/settings'

import { counter, initialState } from './store/reducers'
import { STATE } from './store/type'
import { ModifyAction } from './store/action'

export type IType = 'stage' | 'move' | 'port'

export type Icontent = {
  dispatch: React.Dispatch<ModifyAction>
  data: STATE
}
// context
export const CardConfigurationContext = React.createContext<Icontent>({
  data: initialState,
  dispatch: () => {}
})

interface IConfigurationProps {}

const Iconfiguration: FC<IConfigurationProps> = () => {
  const [state, dispatch] = useReducer(counter, initialState)
  // 舞台配置
  const [stageConfig, setStageConfig] = useState<any>({
    x: 0,
    y: 0,
    width: window.innerWidth - 300,
    height: window.innerHeight - 62
  })
  // 卡片
  const [cardConfig, setCardConfig] = useState<Icard[]>([
    {
      id: 2,
      width: 240,
      height: 85,
      x: 10,
      y: 10,
      title: '表格提取',
      ports: [
        {
          id: 1,
          group: 'left'
        },
        {
          id: 2,
          group: 'right'
        }
      ],
      inParams: [
        {
          label: '未命名',
          field: 'name',
          formType: 'Input',
          placeholder: '请输入用户名',
          value: ''
        }
      ]
    }
  ])

  // 鼠标按下
  const onMouseDown = (e: Konva.KonvaEventObject<MouseEvent>) => {
    const { evt } = e
    // 隐藏菜单
    if (evt.which === 1) {
      hideContentMenu()
    }
  }
  // 鼠标抬起
  const onMouseUp = (e: Konva.KonvaEventObject<MouseEvent>) => {
    console.log(e, '2')
  }
  // 鼠标移动
  const onMouseMove = (e: Konva.KonvaEventObject<MouseEvent>) => {
    // console.log(e, '3')
  }
  // 右键菜单
  const onContextMenu = (e: Konva.KonvaEventObject<MouseEvent>) => {
    e.evt.preventDefault()
    showContentMenu(e.evt)
  }
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
            {/* 舞台 */}
            <Stage
              {...stageConfig}
              onMouseUp={onMouseUp}
              onMouseMove={onMouseMove}
              onMouseDown={onMouseDown}
              onContextMenu={onContextMenu}
              draggable
              type='stage'>
              <Layer>
                {cardConfig.map((item) => (
                  <Card config={item} key={item.id} />
                ))}
              </Layer>
            </Stage>
          </div>
          {/* 卡片配置 */}
          <Sittings />
        </div>
        <div className='app-card-configuration__footer'></div>
      </div>
    </CardConfigurationContext.Provider>
  )
}
export default Iconfiguration
