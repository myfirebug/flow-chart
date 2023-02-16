import { FC, useState, useEffect } from 'react'
import { Group, Rect, Text, Image as KonvaImage } from 'react-konva'
import Konva from 'konva'
import { Icard } from '@src/types'
import { TITLE_HEIGHT, TITLE_FONTSIZE, CORNERRADIUS } from '../constant'

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
      text: '初始化',
      fontSize: TITLE_FONTSIZE,
      fill: '#666',
      x: 36,
      fontStyle: 'bold',
      lineHeight: TITLE_HEIGHT / TITLE_FONTSIZE
    })
  }, [config])

  useEffect(() => {
    let imageObj = new Image()
    imageObj.src = require('@src/assets/image/common/avatar.png')
    imageObj.onload = function () {
      setImageConfig({
        x: 10,
        y: 12,
        image: imageObj,
        width: 16,
        height: 16
      })
    }
  }, [])

  console.log(bgConfig, 'bgConfig')

  return (
    <Group x={config.x} y={config.y}>
      <Rect {...bgConfig} />
      <Text {...textConfig} />
      {imageConfig ? <KonvaImage {...imageConfig} /> : null}
      <Rect {...lineConfig} />
    </Group>
  )
}

export default Title
