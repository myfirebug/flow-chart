/*
 * @Description: 页面描述
 * @Author: hejp 378540660@qq.com
 * @Date: 2023-02-18 16:19:34
 * @LastEditors: hejp 378540660@qq.com
 * @LastEditTime: 2023-02-20 15:11:47
 * @FilePath: \flow-chart\src\pages\card-configuration\components\settings\index.tsx
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
import { FC, useState, useContext, useEffect, useCallback } from 'react'
import { Form, Input, Checkbox, Button, Drawer, Space } from 'antd'

//  配置表单
import ConfigurationForm from '../configuration-form'

import { CardConfigurationContext } from '../../index'

interface ISittingsProps {}

const Sittings: FC<ISittingsProps> = () => {
  const [form] = Form.useForm()
  const cardConfigurationContent = useContext(CardConfigurationContext)
  // 是否显示配置表单
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (cardConfigurationContent.card) {
      const { title, width, ports } = cardConfigurationContent.card
      form.setFieldsValue({
        title: title,
        width: width,
        ports: ports.filter((item) => item.visible).map((item) => item.group)
      })
    }
  }, [cardConfigurationContent.card, form])

  const changeHander = useCallback(
    (value: any, field: string) => {
      switch (field) {
        case 'title':
          cardConfigurationContent.dispatch({
            type: 'MODIFY_CARD_TITLE',
            title: value
          })
          break
        case 'ports':
          cardConfigurationContent.dispatch({
            type: 'MODIFY_CARD_PORTS',
            data: value
          })
          break
      }
    },
    [cardConfigurationContent]
  )
  return (
    <div className='app-card-configuration__aside'>
      <div className='header'>卡片配置</div>
      <div className='body'>
        <Form
          form={form}
          name='basic'
          labelAlign='left'
          colon={false}
          labelCol={{ span: 9 }}
          wrapperCol={{ span: 15 }}
          requiredMark={false}
          autoComplete='off'>
          <Form.Item label='卡片名称' name='title'>
            <Input onChange={(e) => changeHander(e.target.value, 'title')} />
          </Form.Item>
          <Form.Item label='卡片宽度' name='width'>
            <Input disabled />
          </Form.Item>
          <Form.Item name='ports' label='连接点'>
            <Checkbox.Group onChange={(e) => changeHander(e, 'ports')}>
              <Checkbox value='left' style={{ lineHeight: '32px' }}>
                左连接点
              </Checkbox>
              <Checkbox value='right' style={{ lineHeight: '32px' }}>
                右连接点
              </Checkbox>
            </Checkbox.Group>
          </Form.Item>
          <Form.Item name='inParams' label='入参配置'>
            <Button
              type='primary'
              style={{ width: '100%' }}
              onClick={() => setVisible(true)}>
              配置
            </Button>
          </Form.Item>
        </Form>
      </div>
      <Drawer
        title='参数配置'
        width='70%'
        open={visible}
        maskClosable={false}
        closable={false}
        bodyStyle={{ padding: 0 }}
        headerStyle={{
          borderBottom: '1px solid #ddd',
          padding: '10px'
        }}
        extra={
          <Space>
            <Button onClick={() => setVisible(false)}>取消</Button>
            <Button type='primary' onClick={() => setVisible(false)}>
              保存
            </Button>
          </Space>
        }>
        <ConfigurationForm />
      </Drawer>
    </div>
  )
}

export default Sittings
