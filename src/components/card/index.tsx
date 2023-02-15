/*
 * @Description: 页面描述
 * @Author: hejp 378540660@qq.com
 * @Date: 2023-02-15 21:30:33
 * @LastEditors: hejp 378540660@qq.com
 * @LastEditTime: 2023-02-15 22:22:50
 * @FilePath: \flow-chart\src\components\card\index.tsx
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
import { FC } from 'react'
import { Group } from 'react-konva'
import { Icard } from '@src/types'
// 外框
import Frame from './components/frame'

interface ICardProps {
  config: Icard
}

const Card: FC<ICardProps> = ({ config }) => {
  return (
    <Group x={config.x} y={config.y}>
      <Frame config={config} />
    </Group>
  )
}

export default Card
