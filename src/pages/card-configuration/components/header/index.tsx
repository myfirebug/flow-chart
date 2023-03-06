/*
 * @Description: 页面描述
 * @Author: hejp 378540660@qq.com
 * @Date: 2023-02-19 20:32:09
 * @LastEditors: hejp 378540660@qq.com
 * @LastEditTime: 2023-02-20 19:46:07
 * @FilePath: \flow-chart\src\pages\card-configuration\components\header\index.tsx
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
import { FC, useCallback, useContext } from 'react'
import { Tooltip, Button, message } from 'antd'
import { getUrl, guid } from '@utils/tools'
import { useHistory } from 'react-router-dom'
import { CardConfigurationContext } from '../../index'
import Ajax from '@src/service'

interface IConfigurationHeaderProps {}

const ConfigurationHeader: FC<IConfigurationHeaderProps> = () => {
  const cardConfigurationContent = useContext(CardConfigurationContext)
  const history = useHistory()

  const save = useCallback(() => {
    if (cardConfigurationContent) {
      if (
        !cardConfigurationContent.data.card?.ports.some((item) => item.visible)
      ) {
        message.error('必须选择一个连接点')
      } else {
        Ajax.cardAddOrEdit({
          id: cardConfigurationContent.data.card.id || guid()
        }).then(() => {
          message.success('保存成功')
          history.goBack()
        })
      }
    }
  }, [cardConfigurationContent, history])
  return (
    <div className='app-card-configuration__header'>
      <div className='left'>
        <Tooltip placement='bottom' title='返回'>
          <div className='return app-icon' onClick={() => history.goBack()}>
            &#xe720;
          </div>
        </Tooltip>
        <div className='app-icon logo'>&#xe605;</div>
        <div className='title'>{getUrl('id') ? '编辑卡片' : '新增卡片'}</div>
      </div>
      <div className='right'>
        <Button type='primary' onClick={save}>
          保存
        </Button>
      </div>
    </div>
  )
}

export default ConfigurationHeader
