/*
 * @Description: 页面描述
 * @Author: hejp 378540660@qq.com
 * @Date: 2023-02-15 21:38:06
 * @LastEditors: hejp 378540660@qq.com
 * @LastEditTime: 2023-03-12 20:59:38
 * @FilePath: \flow-chart\src\components\card\components\frame\index.tsx
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
import { FC, useEffect, useState } from 'react'
import { Group, Rect } from 'react-konva'
import Konva from 'konva'
import { CORNERRADIUS, PADDING } from '../constant'
import { CARD_STATE } from '@src/types'

interface IFrameProps {
  config: CARD_STATE
  SelectedCardsIds?: string
}

const Frame: FC<IFrameProps> = ({ config, SelectedCardsIds }) => {
  const [bgConfig, setBgConfig] = useState<Konva.RectConfig>()
  const [borderConfig, setBorderConfig] = useState<Konva.RectConfig>()
  useEffect(() => {
    setBgConfig({
      x: 0,
      y: 0,
      width: config.width,
      height: config.height,
      fill: '#f9f9f9',
      shadowColor: 'rgba(0,0,0,.3)',
      cornerRadius: CORNERRADIUS,
      shadowBlur: 10
    })
    setBorderConfig({
      x: -PADDING,
      y: -PADDING,
      width: config.width + PADDING * 2,
      height: config.height + PADDING * 2,
      stroke: '#40a9ff',
      strokeWidth: 2,
      cornerRadius: CORNERRADIUS
    })
  }, [config])
  return (
    <Group>
      {SelectedCardsIds && SelectedCardsIds.includes(config.id) ? (
        <Rect {...borderConfig} />
      ) : null}

      <Rect {...bgConfig} />
    </Group>
  )
}

export default Frame
