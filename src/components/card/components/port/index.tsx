import { FC, useEffect, useState } from 'react'
import Konva from 'konva'
import { Group, Path, Rect } from 'react-konva'
import { Icard } from '@src/types'
import { modifyCursor } from '@src/utils/tools'
import {
  TITLE_HEIGHT,
  MARGIN_TOP,
  MARGIN_LEFT,
  PORT_DIMENSION
} from '../constant'

interface IPortProps {
  config: Icard
  cardId: string
  portId: string
}

const Port: FC<IPortProps> = ({ config, cardId, portId }) => {
  const [pathConfig, setPathConfig] = useState<Konva.PathConfig>()
  const [rectConfig, setRectConfig] = useState<Konva.PathConfig>()
  useEffect(() => {
    const params = {
      x: MARGIN_LEFT - 3,
      y: TITLE_HEIGHT + MARGIN_TOP - 3
    }
    setPathConfig({
      ...params,
      scaleX: 0.03,
      scaleY: 0.03,
      fill: '#1890ff',
      data: 'M514 114.3c-219.9 0-398.8 178.9-398.8 398.8 0 220 178.9 398.9 398.8 398.9s398.8-178.9 398.8-398.9c0-219.8-178.9-398.8-398.8-398.8z m232.1 440.4L582 718.8c-22.9 22.9-60.2 22.9-83.1 0-11.5-11.5-17.2-26.5-17.2-41.5s5.7-30.1 17.2-41.5l63.8-63.8H334c-32.5 0-58.8-26.3-58.8-58.8s26.3-58.8 58.8-58.8h228.7l-63.8-63.8c-22.9-22.9-22.9-60.2 0-83.1 22.9-22.9 60.2-22.9 83.1 0l164.1 164.1c22.9 23 22.9 60.2 0 83.1z'
    })
    setRectConfig({
      ...params,
      width: PORT_DIMENSION,
      height: PORT_DIMENSION
    })
  }, [config])

  // 鼠标移入
  const onMouseEnter = (e: Konva.KonvaEventObject<MouseEvent>) => {
    setPathConfig((state) => ({
      ...state,
      fill: '#40a9ff'
    }))
    modifyCursor('js_stage', 'pointer')
  }
  // 鼠标移除
  const onMouseLeave = (e: Konva.KonvaEventObject<MouseEvent>) => {
    setPathConfig((state) => ({
      ...state,
      fill: '#1890ff'
    }))
    modifyCursor('js_stage', 'default')
  }
  return (
    <Group x={config.x}>
      <Path {...pathConfig} />
      <Rect
        type='port'
        {...rectConfig}
        portId={portId}
        cardId={cardId}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      />
    </Group>
  )
}

export default Port
