import React, { FC, useEffect } from 'react'
import { Form, Input, Button, Drawer, Row, Col, Space } from 'antd'
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons'

import { IDrawerProps } from '../settings'

interface IMockFormProps {
  drawerConf: IDrawerProps
  setDrawerConf: React.Dispatch<React.SetStateAction<IDrawerProps>>
  saveMockHandler: (data: never[]) => void
}

const MockForm: FC<IMockFormProps> = ({
  drawerConf,
  setDrawerConf,
  saveMockHandler
}) => {
  // mock配置
  const [mockForm] = Form.useForm()

  useEffect(() => {
    if (drawerConf.mock && drawerConf.mock.length) {
      mockForm.setFieldsValue({
        mock: drawerConf.mock
      })
    }
  }, [drawerConf.mock, mockForm])

  // 保存模拟数据
  const saveMock = () => {
    mockForm.validateFields().then((res) => {
      saveMockHandler(res.mock)
    })
  }
  return (
    <Drawer
      title='配置mock数据'
      width={600}
      bodyStyle={{ padding: 0 }}
      headerStyle={{
        borderBottom: '1px solid #ddd',
        padding: '10px'
      }}
      onClose={() => setDrawerConf((state) => ({ ...state, visible: false }))}
      extra={
        <Space>
          <Button type='primary' onClick={saveMock}>
            确定
          </Button>
        </Space>
      }
      open={drawerConf.visible}>
      <Form name='dynamic_form_item' form={mockForm}>
        <Form.List name='mock'>
          {(fields, { add, remove }, { errors }) => {
            return (
              <>
                <Row
                  style={{
                    background: '#eee',
                    lineHeight: '30px',
                    color: '#999',
                    fontWeight: 'bold',
                    marginBottom: 20
                  }}>
                  <Col span={11} style={{ padding: '0 10px' }}>
                    键名
                  </Col>
                  <Col span={11} style={{ padding: '0 10px' }}>
                    键值
                  </Col>
                  <Col span={2} style={{ padding: '0 10px' }}>
                    操作
                  </Col>
                </Row>
                {fields.map((field) => {
                  return (
                    <Row key={field.key}>
                      <Col span={11} style={{ paddingLeft: 10 }}>
                        <Form.Item
                          name={[field.name, 'label']}
                          validateTrigger={['onBlur']}
                          rules={[
                            {
                              required: true,
                              message: '请输入键名'
                            }
                          ]}>
                          <Input placeholder='请输入键名' />
                        </Form.Item>
                      </Col>
                      <Col span={11} style={{ paddingLeft: 10 }}>
                        <Form.Item
                          name={[field.name, 'value']}
                          validateTrigger={['onBlur']}
                          rules={[
                            {
                              required: true,
                              message: '请输入键值'
                            }
                          ]}>
                          <Input placeholder='请输入键值' />
                        </Form.Item>
                      </Col>
                      <Col span={2} style={{ padding: '5px 0 0 10px' }}>
                        {fields.length > 1 ? (
                          <MinusCircleOutlined
                            className='dynamic-delete-button'
                            onClick={() => remove(field.name)}
                          />
                        ) : null}
                      </Col>
                    </Row>
                  )
                })}
                <Form.Item style={{ padding: '0 10px' }}>
                  <Button
                    type='dashed'
                    onClick={() => add()}
                    block
                    icon={<PlusOutlined />}>
                    添加
                  </Button>
                </Form.Item>
              </>
            )
          }}
        </Form.List>
      </Form>
    </Drawer>
  )
}

export default MockForm
