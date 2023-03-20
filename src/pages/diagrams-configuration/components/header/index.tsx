/*
 * @Description: 页面描述
 * @Author: hejp 378540660@qq.com
 * @Date: 2023-02-19 20:32:09
 * @LastEditors: hejp 378540660@qq.com
 * @LastEditTime: 2023-03-20 20:08:36
 * @FilePath: \flow-chart\src\pages\diagrams-configuration\components\header\index.tsx
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
import { FC, useCallback, useContext, useEffect, useState } from 'react'
import { Tooltip, Button, Modal, Form, Input, message } from 'antd'
import { useHistory } from 'react-router-dom'
import './index.scss'
import { DiagramsConfigurationContext } from '../../index'

interface IConfigurationHeaderProps {}

const ConfigurationHeader: FC<IConfigurationHeaderProps> = () => {
  const diagramsConfigurationContent = useContext(DiagramsConfigurationContext)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [form] = Form.useForm()
  const history = useHistory()

  useEffect(() => {
    if (form) {
      const { setFieldValue } = form
      setFieldValue('title', diagramsConfigurationContent.data.title)
    }
  }, [form, diagramsConfigurationContent.data.title])

  const handleOk = () => {
    const { validateFields } = form
    validateFields().then((values) => {
      diagramsConfigurationContent.dispatch({
        type: 'MODIFY_DIAGRAMS_TITLE',
        title: values.title
      })
      message.success('修改成功')
      setIsModalOpen(false)
    })
  }

  const shortcutKeyHandler = useCallback(
    (key: string) => {
      switch (key) {
        case 'del':
          diagramsConfigurationContent.dispatch({
            type: 'DEL_CARD'
          })
          break
        case 'copy':
          diagramsConfigurationContent.dispatch({
            type: 'COPY_CARD'
          })
          break
      }
    },
    [diagramsConfigurationContent]
  )

  const handleCancel = () => {
    setIsModalOpen(false)
  }

  return (
    <div className='app-diagrams-configuration__header'>
      <div className='left'>
        <Tooltip placement='bottom' title='返回'>
          <div className='return app-icon' onClick={() => history.goBack()}>
            &#xe720;
          </div>
        </Tooltip>
        <div className='app-icon logo'>&#xe605;</div>
        <div className='content'>
          <div className='top'>
            <span className='title'>
              {diagramsConfigurationContent.data.title}
            </span>
            <span className='app-icon' onClick={() => setIsModalOpen(true)}>
              &#xec88;
            </span>
          </div>
          <ul className='menu'>
            <li className='menu-item'>
              <div className='name'>文件</div>
              <dl className='sub-menu'>
                <dd onClick={() => setIsModalOpen(true)}>
                  <span className='app-icon'>&#xec88;</span>
                  <span className='name'>重命名</span>
                </dd>
                <dd>
                  <span className='app-icon'>&#xe63b;</span>
                  <span className='name'>保存</span>
                  <span className='value'>Ctrl+S</span>
                </dd>
                <dd>
                  <span className='app-icon'>&#xe765;</span>
                  <span className='name'>克隆</span>
                </dd>
                <dd>
                  <span className='app-icon'>&#xe8e7;</span>
                  <span className='name'>关闭</span>
                </dd>
              </dl>
            </li>
            <li className='menu-item'>
              <div className='name'>编辑</div>
              <dl className='sub-menu'>
                <dd>
                  <span className='app-icon'>&#xe61e;</span>
                  <span className='name'>撤销</span>
                  <span className='value'>Ctrl+Z</span>
                </dd>
                <dd>
                  <span className='app-icon'>&#xe60f;</span>
                  <span className='name'>恢复</span>
                  <span className='value'>Ctrl+Y</span>
                </dd>
                <dd>
                  <span className='app-icon'>&#xeb4b;</span>
                  <span className='name'>剪切</span>
                  <span className='value'>Ctrl+X</span>
                </dd>
                <dd
                  onClick={() => shortcutKeyHandler('copy')}
                  className={
                    !diagramsConfigurationContent.data.selectedCardsIds
                      ? 'is-disabled'
                      : ''
                  }>
                  <span className='app-icon'>&#xe8b0;</span>
                  <span className='name'>拷贝</span>
                  <span className='value'>Ctrl+C</span>
                </dd>
                <dd>
                  <span className='app-icon'>&#xe677;</span>
                  <span className='name'>粘贴</span>
                  <span className='value'>Ctrl+V</span>
                </dd>
                <dd
                  onClick={() => shortcutKeyHandler('del')}
                  className={
                    !diagramsConfigurationContent.data.selectedCardsIds
                      ? 'is-disabled'
                      : ''
                  }>
                  <span className='app-icon'>&#xe7c3;</span>
                  <span className='name'>删除</span>
                  <span className='value'>Delete</span>
                </dd>
              </dl>
            </li>
            <li className='menu-item'>
              <div className='name'>选择</div>
              <dl className='sub-menu'>
                <dd>
                  <span className='app-icon'>&#xe9c5;</span>
                  <span className='name'>全选</span>
                  <span className='value'>Ctrl+A</span>
                </dd>
              </dl>
            </li>
            <li className='menu-item'>
              <div className='name'>排列</div>
              <dl className='sub-menu'>
                <dd>
                  <span className='app-icon'>&#xe786;</span>
                  <span className='name'>置于顶层</span>
                  <span className='value'>Ctrl+↑</span>
                </dd>
                <dd>
                  <span className='app-icon'>&#xe742;</span>
                  <span className='name'>置于底层</span>
                  <span className='value'>Ctrl+↓</span>
                </dd>
                <dd>
                  <span className='app-icon'>&#xe7ef;</span>
                  <span className='name'>上移一层</span>
                  <span className='value'>Ctrl+Shfit+↑</span>
                </dd>
                <dd>
                  <span className='app-icon'>&#xe7f1;</span>
                  <span className='name'>下移一层</span>
                  <span className='value'>Ctrl+Shfit+↓</span>
                </dd>
              </dl>
            </li>
            <li className='menu-item'>
              <div className='name'>对齐</div>
              <dl className='sub-menu'>
                <dd>
                  <span className='app-icon'>&#xe602;</span>
                  <span className='name'>左对齐</span>
                  <span className='value'>Ctrl+L</span>
                </dd>
                <dd>
                  <span className='app-icon'>&#xe65b;</span>
                  <span className='name'>右对齐</span>
                  <span className='value'>Ctrl+R</span>
                </dd>
                <dd>
                  <span className='app-icon'>&#xe603;</span>
                  <span className='name'>顶端对齐</span>
                  <span className='value'>Ctrl+T</span>
                </dd>
                <dd>
                  <span className='app-icon'>&#xe604;</span>
                  <span className='name'>底端对齐</span>
                  <span className='value'>Ctrl+B</span>
                </dd>
              </dl>
            </li>
          </ul>
        </div>
      </div>
      <div className='right'>
        <Button type='primary'>保存</Button>
      </div>
      <Modal
        title='修改流程图标题'
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}>
        <Form style={{ maxWidth: 600 }} autoComplete='off' form={form}>
          <Form.Item
            label='流程图名称'
            name='title'
            rules={[{ required: true, message: '请输入流程图名称' }]}>
            <Input />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  )
}

export default ConfigurationHeader
