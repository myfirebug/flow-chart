/*
 * @Description: 页面描述
 * @Author: hejp 378540660@qq.com
 * @Date: 2023-02-09 15:22:35
 * @LastEditors: hejp 378540660@qq.com
 * @LastEditTime: 2023-02-17 10:16:16
 * @FilePath: \flow-chart\src\pages\configuration\index.tsx
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
import { FC, useState } from 'react'
import { Drawer, Button, Space } from 'antd'
import { Stage, Layer } from 'react-konva'
import './index.scss'
import Card from '@src/components/card'
import { Icard } from '@src/types'
import Konva from 'konva'
// 头部
import ConfigurationHeader from './components/header'

interface IConfigurationProps {}

const Iconfiguration: FC<IConfigurationProps> = () => {
  // 卡片
  const [cardConfig, setCardConfig] = useState<Icard[]>([
    {
      id: 2,
      width: 240,
      height: 85,
      x: 100,
      y: 100,
      title: '表格提取',
      ports: [
        {
          id: 1,
          group: 'left'
        },
        {
          id: 2,
          group: 'right'
        }
      ],
      inParams: [
        {
          field: 'name',
          formType: 'Input',
          placeholder: '请输入用户名',
          value: ''
        }
      ]
    }
  ])

  // 鼠标按下
  const onMouseDown = (e: Konva.KonvaEventObject<MouseEvent>) => {
    console.log(e, '1')
  }
  // 鼠标抬起
  const onMouseUp = (e: Konva.KonvaEventObject<MouseEvent>) => {
    console.log(e, '2')
  }
  // 鼠标移动
  const onMouseMove = (e: Konva.KonvaEventObject<MouseEvent>) => {
    // console.log(e, '3')
  }
  return (
    <div className='app-configuration'>
      {/* 头部 */}
      <ConfigurationHeader />
      <div className='app-configuration__body'>
        <div className='app-configuration__shortcutMenu'></div>
        <div className='app-configuration__container' id='js_stage'>
          {/* 舞台 */}
          <Stage
            width={window.innerWidth}
            height={window.innerHeight - 102}
            onMouseUp={onMouseUp}
            onMouseMove={onMouseMove}
            onMouseDown={onMouseDown}>
            <Layer>
              {cardConfig.map((item) => (
                <Card config={item} key={item.id} />
              ))}
            </Layer>
          </Stage>
          <Drawer
            title='Create a new account'
            width={720}
            bodyStyle={{ paddingBottom: 80 }}
            extra={
              <Space>
                <Button>Cancel</Button>
                <Button type='primary'>Submit</Button>
              </Space>
            }></Drawer>
        </div>
      </div>
      <div className='app-configuration__footer'></div>
    </div>
  )
}
export default Iconfiguration
