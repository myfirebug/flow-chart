/*
 * @Description: 页面描述
 * @Author: hejp 378540660@qq.com
 * @Date: 2023-02-09 15:22:35
 * @LastEditors: hejp 378540660@qq.com
 * @LastEditTime: 2023-02-09 16:28:15
 * @FilePath: \flow-chart\src\pages\configuration\index.tsx
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
import { FC, useState } from 'react'
import { Tooltip } from 'antd'
import './index.scss'

interface IConfigurationProps {}

const Iconfiguration: FC<IConfigurationProps> = () => {
  const [title, setTitle] = useState('未全名文件')
  return (
    <div className='app-configuration'>
      <div className='app-configuration__header'>
        <div className='left'>
          <Tooltip placement='bottom' title='返回'>
            <div className='return app-icon'>&#xe720;</div>
          </Tooltip>
          <div className='app-icon logo'>&#xe605;</div>
          <div className='title'>{title}</div>
          <Tooltip placement='bottom' title='编辑'>
            <div className='app-icon edit'>&#xec88;</div>
          </Tooltip>
        </div>
        <div className='right'>
          <Tooltip placement='bottom' title='保存'>
            <div className='app-icon save'>&#xe791;</div>
          </Tooltip>
        </div>
      </div>
      <div className='app-configuration__body'>
        <div className='app-configuration__shortcutMenu'></div>
        <div className='app-configuration__container'></div>
      </div>
      <div className='app-configuration__footer'></div>
    </div>
  )
}
export default Iconfiguration
