/*
 * @Description: 页面描述
 * @Author: hejp 378540660@qq.com
 * @Date: 2023-02-15 21:38:06
 * @LastEditors: hejp 378540660@qq.com
 * @LastEditTime: 2023-02-15 22:34:19
 * @FilePath: \flow-chart\src\components\card\components\frame\index.tsx
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
import { FC, useEffect, useState } from 'react'
import { Group, Rect } from 'react-konva'
import { CORNERRADIUS, PADDING } from '../constant'
import { Icard } from '@src/types'

interface IFrameProps {
  config: Icard
}

const Frame: FC<IFrameProps> = ({ config }) => {
  const [bgConfig, setBgConfig] = useState<any>(null)
  const [borderConfig, setBorderConfig] = useState<any>(null)
  useEffect(() => {
    setBgConfig({
      ...config,
      fill: 'rgba(255,255,255,1)',
      shadowColor: 'rgba(0,0,0,.1)',
      cornerRadius: CORNERRADIUS,
      shadowBlur: 10
    })
    setBorderConfig({
      x: config.x - PADDING,
      y: config.y - PADDING,
      width: config.width + PADDING * 2,
      height: config.height + PADDING * 2,
      stroke: '#ccc',
      strokeWidth: 0.5,
      cornerRadius: CORNERRADIUS
    })
  }, [config])
  return (
    <Group>
      <Rect {...borderConfig} />
      <Rect {...bgConfig} />
    </Group>
  )
}

export default Frame
