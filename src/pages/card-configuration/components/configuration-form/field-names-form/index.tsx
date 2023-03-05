import React, { FC, useEffect } from 'react'
import { Form, Input, Button, Row, Col } from 'antd'
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons'

import { IDrawerProps } from '../settings'

interface IFieldNamesFormProps {
  drawerConf: IDrawerProps
  setDrawerConf: React.Dispatch<React.SetStateAction<IDrawerProps>>
}

const FieldNamesForm: FC<IFieldNamesFormProps> = ({
  drawerConf,
  setDrawerConf
}) => {
  const [form] = Form.useForm()

  useEffect(() => {
    if (drawerConf.details) {
      form.setFieldsValue(drawerConf.details)
    }
  }, [drawerConf.details, form])

  useEffect(() => {
    if (form) {
      setDrawerConf((state) => ({
        ...state,
        form: form
      }))
    }
  }, [setDrawerConf, form])

  return (
    <Form
      style={{ padding: 10 }}
      name='dynamic_form_item'
      form={form}
      labelCol={{ span: 7 }}
      wrapperCol={{ span: 17 }}
      colon={false}
      labelAlign='left'>
      <Form.Item
        name='label'
        label='label'
        rules={[
          {
            required: true,
            message: '请输入label'
          }
        ]}>
        <Input placeholder='请输入label' />
      </Form.Item>
      <Form.Item
        name='value'
        label='value'
        rules={[
          {
            required: true,
            message: '请输入value'
          }
        ]}>
        <Input placeholder='请输入value' />
      </Form.Item>
      <Form.Item
        name='children'
        label='children'
        rules={[
          {
            required: true,
            message: '请输入children'
          }
        ]}>
        <Input placeholder='请输入children' />
      </Form.Item>
    </Form>
  )
}

export default FieldNamesForm
