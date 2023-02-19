/*
 * @Description: 页面描述
 * @Author: hejp 378540660@qq.com
 * @Date: 2023-02-18 16:19:34
 * @LastEditors: hejp 378540660@qq.com
 * @LastEditTime: 2023-02-19 12:28:56
 * @FilePath: \flow-chart\src\pages\configuration\components\configuration-form\workspace\index.tsx
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
import { FC, useContext } from 'react'
import { Button } from 'antd'
import { CardConfigurationContext } from '../../../index'

interface IWorkspaceProps {}

const Workspace: FC<IWorkspaceProps> = () => {
  const cardConfigurationContent = useContext(CardConfigurationContext)
  return (
    <div className='app-card-configuration__workspace'>
      <div className='app-card-configuration__workspace--menu'>
        {cardConfigurationContent.data.counter}
        <Button
          onClick={() =>
            cardConfigurationContent.dispatch({ type: 'DECREMENT' })
          }>
          -
        </Button>
        <Button
          onClick={() =>
            cardConfigurationContent.dispatch({ type: 'INCREMENT' })
          }>
          +
        </Button>
      </div>
      <div className='app-card-configuration__workspace--body'></div>
    </div>
  )
}

export default Workspace
