import { FC, useContext, useMemo } from 'react'
import { Tabs, Result } from 'antd'
import './index.scss'
import CustomForm from '@src/form'
import { IPARAM } from '@src/types'
import { DiagramsConfigurationContext } from '../../index'

interface ISettingProps {}

const Setting: FC<ISettingProps> = () => {
  const diagramsConfigurationContext = useContext(DiagramsConfigurationContext)

  const list = useMemo(() => {
    const { cards, selectedCardsIds } = diagramsConfigurationContext.data
    let result: IPARAM[] = []
    let index = cards.findIndex(
      (item) => selectedCardsIds && selectedCardsIds.includes(item.id)
    )
    if (index !== -1) {
      result = cards[index].inParams
    }

    return result
  }, [diagramsConfigurationContext])
  return (
    <div className='app-diagrams-configuration__settings'>
      <div className='body'>
        <Tabs defaultActiveKey='1' centered>
          <Tabs.TabPane tab='图层' key='1'>
            {diagramsConfigurationContext.data.cards.length ? (
              <ul className='card-list'>
                {diagramsConfigurationContext.data.cards.map((item) => (
                  <li
                    onClick={() =>
                      diagramsConfigurationContext.dispatch({
                        type: 'SELECTS_CARD',
                        ids: item.id
                      })
                    }
                    className={`card-item ${
                      diagramsConfigurationContext.data.selectedCardsIds &&
                      diagramsConfigurationContext.data.selectedCardsIds.includes(
                        item.id
                      )
                        ? 'is-active'
                        : ''
                    }`}
                    key={item.id}>
                    <div className='title'>{item.title}</div>
                  </li>
                ))}
              </ul>
            ) : (
              <Result
                status='404'
                title='暂无数据'
                subTitle='点击卡片，添加卡片'
              />
            )}
          </Tabs.TabPane>
          <Tabs.TabPane tab='配置' key='2'>
            {list.length ? (
              <CustomForm list={list} />
            ) : (
              <Result
                status='404'
                title='暂无数据'
                subTitle='需要选中卡片才有数据哦'
              />
            )}
          </Tabs.TabPane>
        </Tabs>
      </div>
    </div>
  )
}

export default Setting
