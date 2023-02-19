import { FC, useState } from 'react'
import { Tooltip, Modal, Form, Input } from 'antd'

interface IConfigurationHeaderProps {}

const ConfigurationHeader: FC<IConfigurationHeaderProps> = () => {
  const [form] = Form.useForm()
  // 标题
  const [title, setTitle] = useState('未命名卡片')
  // 是否显示弹窗
  const [visible, setVisible] = useState(false)
  // 提交表单
  const onOk = () => {
    form.validateFields().then((res) => {
      setTitle(res.name)
      setVisible(false)
    })
  }
  return (
    <>
      <div className='app-configuration__header'>
        <div className='left'>
          <Tooltip placement='bottom' title='返回'>
            <div className='return app-icon'>&#xe720;</div>
          </Tooltip>
          <div className='app-icon logo'>&#xe605;</div>
          <div className='title'>{title}</div>
          <Tooltip placement='bottom' title='编辑'>
            <div className='app-icon edit' onClick={() => setVisible(true)}>
              &#xec88;
            </div>
          </Tooltip>
        </div>
        <div className='right'>
          <Tooltip placement='bottom' title='保存'>
            <div className='app-icon save'>&#xe791;</div>
          </Tooltip>
        </div>
      </div>
      {/* 修改标题弹窗 */}
      <Modal
        title='修改标题'
        open={visible}
        onOk={onOk}
        destroyOnClose
        onCancel={() => setVisible(false)}>
        <Form
          name='basic'
          autoComplete='off'
          form={form}
          initialValues={{
            name: title
          }}>
          <Form.Item
            label='标题'
            name='name'
            rules={[{ required: true, message: '请输入标题' }]}>
            <Input />
          </Form.Item>
        </Form>
      </Modal>
    </>
  )
}

export default ConfigurationHeader
