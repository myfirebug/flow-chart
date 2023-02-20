/*
 * @Description: 页面描述
 * @Author: hejp 378540660@qq.com
 * @Date: 2023-02-15 21:30:33
 * @LastEditors: hejp 378540660@qq.com
 * @LastEditTime: 2023-02-20 15:18:13
 * @FilePath: \flow-chart\src\components\card\index.tsx
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
import { FC } from 'react'
import { Group, Rect } from 'react-konva'
import { Icard } from '@src/types'
import { PORT_DIMENSION, MARGIN_LEFT } from './components/constant'
// 外框
import Frame from './components/frame'
// 标题
import Title from './components/title'
// 点位
import Port from './components/port'
import Konva from 'konva'

import { modifyCursor } from '@src/utils/tools'

interface ICardProps {
  config: Icard
}

const Card: FC<ICardProps> = ({ config }) => {
  // 鼠标移入
  const onMouseEnter = (e: Konva.KonvaEventObject<MouseEvent>) => {
    modifyCursor('js_stage', 'move')
  }
  // 鼠标移除
  const onMouseLeave = (e: Konva.KonvaEventObject<MouseEvent>) => {
    modifyCursor('js_stage', 'default')
  }

  return (
    <Group {...config}>
      {/* frame */}
      <Frame config={config} />
      {/* title */}
      <Title config={config} />
      <Rect
        type='move'
        data-id={config.id}
        width={config.width}
        height={config.height}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      />
      {/* 连线的点 */}
      {config.ports
        ? config.ports.map((item: any) => {
            if (item.group === 'left' && item.visible) {
              return <Port config={{ ...config, x: 0 }} key={item.id} />
            } else if (item.group === 'right' && item.visible) {
              return (
                <Port
                  key={item.id}
                  config={{
                    ...config,
                    x: config.width - PORT_DIMENSION - MARGIN_LEFT * 2
                  }}
                />
              )
            } else {
              return null
            }
          })
        : null}
    </Group>
  )
}

export default Card
