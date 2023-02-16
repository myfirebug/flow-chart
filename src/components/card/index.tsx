/*
 * @Description: 页面描述
 * @Author: hejp 378540660@qq.com
 * @Date: 2023-02-15 21:30:33
 * @LastEditors: hejp 378540660@qq.com
 * @LastEditTime: 2023-02-16 15:46:27
 * @FilePath: \flow-chart\src\components\card\index.tsx
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
import { FC } from 'react'
import { Group } from 'react-konva'
import { Icard } from '@src/types'
import { PORT_DIMENSION, MARGIN_LEFT } from './components/constant'
// 外框
import Frame from './components/frame'
// 标题
import Title from './components/title'
// 点位
import Port from './components/port'

interface ICardProps {
  config: Icard
}

const Card: FC<ICardProps> = ({ config }) => {
  return (
    <Group {...config}>
      {/* frame */}
      <Frame config={config} />
      {/* title */}
      <Title config={config} />
      {/* 连线的点 */}
      {config.ports
        ? config.ports.map((item: any) => {
            if (item.group === 'left') {
              return <Port config={{ ...config, x: 0 }} key={item.id} />
            } else if (item.group === 'right') {
              return (
                <Port
                  key={item.id}
                  config={{
                    ...config,
                    x:
                      config.width - PORT_DIMENSION - MARGIN_LEFT * 2
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
