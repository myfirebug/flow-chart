import { FC, useEffect, useState, useContext } from 'react'
import { Collapse } from 'antd'
import { CARD_STATE } from '@src/types'
import { guid } from '@src/utils/tools'
import './index.scss'
import Ajax from '@src/service'
import { DiagramsConfigurationContext } from '../../index'

const { Panel } = Collapse

interface ISettingProps {}

const Setting: FC<ISettingProps> = () => {
  const diagramsConfigurationContent = useContext(DiagramsConfigurationContext)
  const [baseList, setBaseList] = useState<CARD_STATE[]>([])
  const [otherList, setOtherList] = useState<CARD_STATE[]>([])
  useEffect(() => {
    Ajax.cardList().then((res) => {
      const { data } = res
      setBaseList(data.filter((item: any) => item.type === 'base'))
      setOtherList(data.filter((item: any) => item.type === 'other'))
    })
  }, [])

  const addCardHandler = (card: CARD_STATE) => {
    diagramsConfigurationContent.dispatch({
      type: 'ADD_CARD',
      data: {
        ...card,
        id: guid(),
        inParams: card.inParams
          ? card.inParams.map((item) => ({
              ...item,
              id: guid()
            }))
          : [],
        ports: card.ports
          ? card.ports.map((item) => ({
              ...item,
              id: guid()
            }))
          : []
      }
    })
  }

  return (
    <div className='app-diagrams-configuration__menus'>
      <div className='body'>
        <Collapse defaultActiveKey={['1']}>
          <Panel header='基础卡片' key='1'>
            <ul className='menu-list'>
              {baseList.map((item) => (
                <li
                  className='menu-item'
                  key={item.id}
                  onClick={() => addCardHandler(item)}>
                  {item.title}
                </li>
              ))}
            </ul>
          </Panel>
          <Panel header='其他卡片' key='2'>
            <ul className='menu-list'>
              {otherList.map((item) => (
                <li
                  className='menu-item'
                  key={item.id}
                  onClick={() => addCardHandler(item)}>
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
