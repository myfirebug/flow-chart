/*
 * @Description: 页面描述
 * @Author: hejp 378540660@qq.com
 * @Date: 2023-02-15 21:38:06
 * @LastEditors: hejp 378540660@qq.com
 * @LastEditTime: 2023-03-14 20:15:21
 * @FilePath: \flow-chart\src\components\card\components\frame\index.tsx
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
import { memo, useEffect, useState } from 'react'
import { Group, Rect } from 'react-konva'
import Konva from 'konva'
import { CORNERRADIUS, PADDING } from '../constant'
import { CARD_STATE } from '@src/types'

interface IFrameProps {
  config: CARD_STATE
  SelectedCardsIds?: string
}

const Frame = memo<IFrameProps>(
  ({ config, SelectedCardsIds }) => {
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
        stroke: '#1890ff',
        strokeWidth: 2,
        cornerRadius: CORNERRADIUS
      })
    }, [config.width, config.height])
    return (
      <Group>
        {SelectedCardsIds && SelectedCardsIds.includes(config.id) ? (
          <Rect {...borderConfig} />
        ) : null}

        <Rect {...bgConfig} />
      </Group>
    )
  },
  (prevProps, nextProps) => {
    if (JSON.stringify(prevProps) === JSON.stringify(nextProps)) {
      return true
    }
    return false
  }
)

export default Frame
