/*
 * @Description: 页面描述
 * @Author: hejp 378540660@qq.com
 * @Date: 2023-02-15 21:30:33
 * @LastEditors: hejp 378540660@qq.com
 * @LastEditTime: 2023-03-12 22:37:38
 * @FilePath: \flow-chart\src\components\card\index.tsx
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
import { memo, useEffect, useState } from 'react'
import { Group, Rect, Text } from 'react-konva'
import { CARD_STATE } from '@src/types'
import {
  PORT_DIMENSION,
  MARGIN_LEFT,
  TITLE_HEIGHT
} from './components/constant'
// 外框
import Frame from './components/frame'
// 标题
import Title from './components/title'
// 点位
import Port from './components/port'
import Konva from 'konva'

import { modifyCursor } from '@src/utils/tools'

interface ICardProps {
  config: CARD_STATE
  SelectedCardsIds?: string
}

const Card = memo<ICardProps>(
  ({ config, SelectedCardsIds }) => {
    const [textConfig, setTextConfig] = useState<Konva.TextConfig>()
    useEffect(() => {
      setTextConfig({
        x: MARGIN_LEFT,
        lineHeight: PORT_DIMENSION / 14,
        fontSize: 12,
        fill: '#999'
      })
    }, [config])
    // 鼠标移入
    const onMouseEnter = (e: Konva.KonvaEventObject<MouseEvent>) => {
      modifyCursor('js_stage', 'move')
    }
    // 鼠标移除
    const onMouseLeave = (e: Konva.KonvaEventObject<MouseEvent>) => {
      modifyCursor('js_stage', 'default')
    }

    return (
      <Group
        x={config.x}
        y={config.y}
        width={config.width}
        height={config.height}>
        {/* frame */}
        <Frame config={config} SelectedCardsIds={SelectedCardsIds} />
        {/* title */}
        <Title config={config} />
        <Rect
          type='move'
          id={config.id}
          width={config.width}
          height={config.height}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          cx={config.x}
          cy={config.y}
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
        {/* 入参参数 */}
        {config.inParams.map((item, index) => (
          <Text
            {...textConfig}
            key={item.id}
            text={`${item.field}：${item.value || '""'}`}
            y={
              TITLE_HEIGHT +
              (config.ports.some((item) => item.visible)
                ? PORT_DIMENSION + MARGIN_LEFT * 2
                : MARGIN_LEFT) +
              index * PORT_DIMENSION
            }
          />
        ))}
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

export default Card
