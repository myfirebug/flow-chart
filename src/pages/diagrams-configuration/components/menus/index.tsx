import { FC, useEffect, useState } from 'react'
import { Collapse } from 'antd'
import { CARD_STATE } from '@src/types'
import './index.scss'
import Ajax from '@src/service'

const { Panel } = Collapse

interface ISettingProps {}

const Setting: FC<ISettingProps> = () => {
  const [baseList, setBaseList] = useState<CARD_STATE[]>([])
  const [otherList, setOtherList] = useState<CARD_STATE[]>([])
  useEffect(() => {
    Ajax.cardList().then((res) => {
      const { data } = res
      setBaseList(data.filter((item: any) => item.type === 'base'))
      setOtherList(data.filter((item: any) => item.type === 'other'))
    })
  }, [])

  return (
    <div className='app-diagrams-configuration__menus'>
      <div className='body'>
        <Collapse defaultActiveKey={['1']}>
          <Panel header='基础卡片' key='1'>
            <ul className='menu-list'>
              {baseList.map((item) => (
                <li className='menu-item' draggable key={item.id}>
                  {item.title}
                </li>
              ))}
            </ul>
          </Panel>
          <Panel header='其他卡片' key='2'>
            <ul className='menu-list'>
            {otherList.map((item) => (
                <li className='menu-item' draggable key={item.id}>
                  {item.title}
                </li>
              ))}
            </ul>
          </Panel>
        </Collapse>
      </div>
    </div>
  )
}

export default Setting
