import { FC } from 'react'
import { Collapse } from 'antd'
import './index.scss'

const { Panel } = Collapse

interface ISettingProps {}

const Setting: FC<ISettingProps> = () => {
  return (
    <div className='app-diagrams-configuration__menus'>
      <div className='body'>
        <Collapse defaultActiveKey={['1']}>
          <Panel header='基础' key='1'>
            <p>1</p>
          </Panel>
          <Panel header='其他' key='2'>
            <p>2</p>
          </Panel>
        </Collapse>
      </div>
    </div>
  )
}

export default Setting
