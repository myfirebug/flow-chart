import { useState, useEffect, memo } from 'react'
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
interface ITitleProp {
  config: Icard
}

const Title = memo<ITitleProp>(
  ({ config }) => {
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
    }, [config.width, config.title])

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

    return (
      <Group>
        <Rect {...bgConfig} />
        <Text {...textConfig} />
        {imageConfig ? <KonvaImage {...imageConfig} /> : null}
        <Rect {...lineConfig} />
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

export default Title
