/*
 * @Description: 页面描述
 * @Author: hejp 378540660@qq.com
 * @Date: 2023-02-15 21:30:33
 * @LastEditors: hejp 378540660@qq.com
 * @LastEditTime: 2023-02-16 12:48:01
 * @FilePath: \flow-chart\src\components\card\index.tsx
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
import { FC } from 'react'
import { Group } from 'react-konva'
import { Icard } from '@src/types'
// 外框
import Frame from './components/frame'
// 标题
import Title from './components/title'

interface ICardProps {
  config: Icard
}

const Card: FC<ICardProps> = ({ config }) => {
  return (
    <Group {...config}>
      <Frame config={config} />
      <Title config={config} />
    </Group>
  )
}

export default Card
