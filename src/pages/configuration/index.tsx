/*
 * @Description: 页面描述
 * @Author: hejp 378540660@qq.com
 * @Date: 2023-02-09 15:22:35
 * @LastEditors: hejp 378540660@qq.com
 * @LastEditTime: 2023-02-18 16:14:12
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
//  配置表单
import ConfigurationForm from './components/configuration-form'
// 头部
import ConfigurationHeader from './components/header'
export type IType = 'stage' | 'title' | 'port'

interface IConfigurationProps {}

const Iconfiguration: FC<IConfigurationProps> = () => {
  // 舞台配置
  const [stageConfig, setStageConfig] = useState<any>({
    x: 0,
    y: 0,
    width: window.innerWidth,
    height: window.innerHeight - 102
  })
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
            {...stageConfig}
            onMouseUp={onMouseUp}
            onMouseMove={onMouseMove}
            onMouseDown={onMouseDown}
            type='stage'>
            <Layer>
              {cardConfig.map((item) => (
                <Card config={item} key={item.id} />
              ))}
            </Layer>
          </Stage>
          <Drawer
            title='表单配置'
            width='90%'
            open={true}
            maskClosable={false}
            bodyStyle={{ padding: 0 }}
            headerStyle={{borderBottom: '1px solid #ddd'}}
            extra={
              <Space>
                <Button>取消</Button>
                <Button type='primary'>保存</Button>
              </Space>
            }>
            <ConfigurationForm />
          </Drawer>
        </div>
      </div>
      <div className='app-configuration__footer'></div>
    </div>
  )
}
export default Iconfiguration
