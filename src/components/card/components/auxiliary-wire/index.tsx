/*
 * @Description: 页面描述
 * @Author: hejp 378540660@qq.com
 * @Date: 2023-02-15 21:38:06
 * @LastEditors: hejp 378540660@qq.com
 * @LastEditTime: 2023-03-12 20:59:38
 * @FilePath: \flow-chart\src\components\card\components\frame\index.tsx
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
import { FC, useMemo } from 'react'
import { COORDINATE } from '@src/types'
import { Path } from 'react-konva'
interface IAuxiliaryWireProps {
  s: COORDINATE
  e: COORDINATE
}

const AuxiliaryWire: FC<IAuxiliaryWireProps> = ({ s, e }) => {
  const data = useMemo(() => {
    const offset = 4
    const deltaY = Math.abs(e.y - s.y)
    const control = Math.floor((deltaY / 3) * 2)

    const v1 = { x: s.x, y: s.y + offset + control }
    const v2 = { x: e.x, y: e.y - offset - control }

    return `M ${s.x} ${s.y}
       L ${s.x} ${s.y + offset}
       C ${v1.x} ${v1.y} ${v2.x} ${v2.y} ${e.x} ${e.y - offset}
       L ${e.x} ${e.y}
      `
  }, [s, e])
  return <Path data={data} stroke='#1890ff' strokeWidth={2} />
}

export default AuxiliaryWire
