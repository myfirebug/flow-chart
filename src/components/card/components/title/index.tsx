import { FC, useState, useEffect } from 'react'
import { Group, Rect, Text, Image as KonvaImage } from 'react-konva'
import Konva from 'konva'
import { Icard } from '@src/types'
import {
  TITLE_HEIGHT,
  TITLE_FONTSIZE,
  CORNERRADIUS,
  MARGIN_LEFT,
  ICON_DIMENSION
} from '../constant'
import { modifyCursor } from '@src/utils/tools'
interface ITitleProp {
  config: Icard
}

const Title: FC<ITitleProp> = ({ config }) => {
  const [bgConfig, setBgConfig] = useState<Konva.RectConfig>()
  const [textConfig, setTextConfig] = useState<Konva.TextConfig>()
  const [lineConfig, setLineConfig] = useState<Konva.RectConfig>()
  const [imageConfig, setImageConfig] = useState<Konva.ImageConfig>()
  useEffect(() => {
    setBgConfig({
      x: 0,
      y: 0,
      width: config.width,
      height: TITLE_HEIGHT,
      fillLinearGradientStartPoint: { x: 0, y: 0 },
      fillLinearGradientEndPoint: { x: 0, y: config.width },
      fillLinearGradientColorStops: [0, '#e1f2ff', 0.15, '#f9f9f9'],
      cornerRadius: [CORNERRADIUS, CORNERRADIUS, 0, 0]
    })
    setLineConfig({
      x: 0,
      y: TITLE_HEIGHT,
      width: config.width,
      height: 1,
      fillLinearGradientStartPoint: { x: 0, y: 0 },
      fillLinearGradientEndPoint: { x: config.width, y: 0 },
      fillLinearGradientColorStops: [0, '#ddd', 1, '#fff']
    })
    setTextConfig({
      text: config.title,
      fontSize: TITLE_FONTSIZE,
      fill: '#666',
      x: ICON_DIMENSION + MARGIN_LEFT * 2,
      fontStyle: 'bold',
      lineHeight: TITLE_HEIGHT / TITLE_FONTSIZE
    })
  }, [config])

  useEffect(() => {
    let imageObj = new Image()
    imageObj.src = require('@src/assets/image/common/avatar.png')
    imageObj.onload = function () {
      setImageConfig({
        x: MARGIN_LEFT,
        y: 12,
        image: imageObj,
        width: ICON_DIMENSION,
        height: ICON_DIMENSION
      })
    }
  }, [])

  // 鼠标移入
  const onMouseEnter = (e: Konva.KonvaEventObject<MouseEvent>) => {
    modifyCursor('js_stage', 'move')
  }
  // 鼠标移除
  const onMouseLeave = (e: Konva.KonvaEventObject<MouseEvent>) => {
    modifyCursor('js_stage', 'default')
  }

  return (
    <Group>
      <Rect {...bgConfig} />
      <Text {...textConfig} />
      {imageConfig ? <KonvaImage {...imageConfig} /> : null}
      <Rect {...lineConfig} />
      <Rect
        type='title'
        width={bgConfig?.width}
        height={bgConfig?.height}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      />
    </Group>
  )
}

export default Title
