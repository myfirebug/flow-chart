/*
 * @Description: 页面描述
 * @Author: hejp 378540660@qq.com
 * @Date: 2023-02-18 16:19:34
 * @LastEditors: hejp 378540660@qq.com
 * @LastEditTime: 2023-02-21 10:34:15
 * @FilePath: \flow-chart\src\pages\card-configuration\components\configuration-form\workspace\index.tsx
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
import { FC, useContext } from 'react'
import { Tooltip, Result } from 'antd'
import { CardConfigurationContext } from '../../../index'

interface IWorkspaceProps {}

const Workspace: FC<IWorkspaceProps> = () => {
  const cardConfigurationContent = useContext(CardConfigurationContext)
  return (
    <div className='app-card-configuration-form__workspace'>
      <div className='app-card-configuration-form__workspace--menu'>
        <div className='left'>
          <Tooltip placement='top' title='撤销'>
            <span className='app-icon is-disabled'>&#xe61e;</span>
          </Tooltip>
          <Tooltip placement='top' title='重做'>
            <span className='app-icon is-disabled'>&#xe60f;</span>
          </Tooltip>
          <Tooltip placement='top' title='置顶'>
            <span className='app-icon is-disabled'>&#xe786;</span>
          </Tooltip>
          <Tooltip placement='top' title='置底'>
            <span className='app-icon is-disabled'>&#xe742;</span>
          </Tooltip>
          <Tooltip placement='top' title='上移'>
            <span className='app-icon is-disabled'>&#xe7ef;</span>
          </Tooltip>
          <Tooltip placement='top' title='下移'>
            <span className='app-icon is-disabled'>&#xe7f1;</span>
          </Tooltip>
          <Tooltip placement='top' title='复制'>
            <span className='app-icon is-disabled'>&#xe765;</span>
          </Tooltip>
        </div>
        <div className='right'>
          <Tooltip placement='top' title='编辑'>
            <span className='app-icon is-selected'>&#xec88;</span>
          </Tooltip>
          <Tooltip placement='top' title='JSON'>
            <span className='app-icon'>&#xe7bd;</span>
          </Tooltip>
          <Tooltip placement='top' title='运行'>
            <span className='app-icon'>&#xe65d;</span>
          </Tooltip>
        </div>
      </div>
      <div className='app-card-configuration-form__workspace--body'>
        <div className='form'></div>
        {cardConfigurationContent.data.card?.inParams &&
        cardConfigurationContent.data.card?.inParams.length === 0 ? (
          <Result
            style={{ paddingTop: 100 }}
            status='404'
            title='暂无数据'
            subTitle='请点击左侧的组件添加表单元素'
          />
        ) : null}
      </div>
    </div>
  )
}

export default Workspace
