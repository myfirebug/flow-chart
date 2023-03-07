/*
 * @Description: 页面描述
 * @Author: hejp 378540660@qq.com
 * @Date: 2023-02-09 15:22:35
 * @LastEditors: hejp 378540660@qq.com
 * @LastEditTime: 2023-03-06 19:05:49
 * @FilePath: \flow-chart\src\pages\card-configuration\index.tsx
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
import { FC, useEffect } from 'react'
import { Stage } from 'react-konva'
import './index.scss'

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
  // 获取卡片数据
  useEffect(() => {}, [])

  return (
    <div className='app-card-configuration'>
      <div className='app-card-configuration__body'>
        <div className='app-card-configuration__container' id='js_stage'>
          <Stage {...stageConfig} draggable></Stage>
        </div>
      </div>
      <div className='app-card-configuration__footer'></div>
    </div>
  )
}
export default Configuration
