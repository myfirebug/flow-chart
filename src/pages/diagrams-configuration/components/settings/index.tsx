import { FC } from 'react'
import { Tabs } from 'antd'
import './index.scss'
interface ISettingProps {}

const Setting: FC<ISettingProps> = () => {
  return (
    <div className='app-diagrams-configuration__settings'>
      <div className='body'>
        <Tabs defaultActiveKey='1' centered>
          <Tabs.TabPane tab='图层' key='1'>
            111
          </Tabs.TabPane>
          <Tabs.TabPane tab='配置' key='2'>
            222
          </Tabs.TabPane>
        </Tabs>
      </div>
    </div>
  )
}

export default Setting
