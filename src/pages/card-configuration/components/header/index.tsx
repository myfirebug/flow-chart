/*
 * @Description: 页面描述
 * @Author: hejp 378540660@qq.com
 * @Date: 2023-02-19 20:32:09
 * @LastEditors: hejp 378540660@qq.com
 * @LastEditTime: 2023-02-19 21:38:27
 * @FilePath: \flow-chart\src\pages\card-configuration\components\header\index.tsx
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
import { FC } from 'react'
import { Tooltip, Button } from 'antd'
import { getUrl } from '@utils/tools'
import { useHistory } from 'react-router-dom'

interface IConfigurationHeaderProps {}

const ConfigurationHeader: FC<IConfigurationHeaderProps> = () => {
  const history = useHistory()
  return (
    <>
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
          <Button type='primary'>保存</Button>
        </div>
      </div>
    </>
  )
}

export default ConfigurationHeader
