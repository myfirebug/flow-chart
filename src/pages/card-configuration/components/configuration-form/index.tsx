/*
 * @Description: 页面描述
 * @Author: hejp 378540660@qq.com
 * @Date: 2023-02-19 20:32:09
 * @LastEditors: hejp 378540660@qq.com
 * @LastEditTime: 2023-02-19 21:23:10
 * @FilePath: \flow-chart\src\pages\card-configuration\components\configuration-form\index.tsx
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
import React, { FC } from 'react'
import './index.scss'
import Composite from './composite'
import Workspace from './workspace'
import Settings from './settings'

interface IConfigurationForm {}

const ConfigurationForm: FC<IConfigurationForm> = () => {
  return (
    <div className='app-card-configuration-form'>
      <Composite />
      <Workspace />
      <Settings />
    </div>
  )
}

export default ConfigurationForm
