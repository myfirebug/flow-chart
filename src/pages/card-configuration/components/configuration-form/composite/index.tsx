/*
 * @Description: 页面描述
 * @Author: hejp 378540660@qq.com
 * @Date: 2023-02-18 16:19:34
 * @LastEditors: hejp 378540660@qq.com
 * @LastEditTime: 2023-02-23 14:22:26
 * @FilePath: \flow-chart\src\pages\card-configuration\components\configuration-form\composite\index.tsx
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
import { FC, useState, useContext, useCallback } from 'react'
import { CONTROL_DATAS } from '../constant'
import { CardConfigurationContext } from '../../../index'

interface ICompositeProps {}

const Composite: FC<ICompositeProps> = () => {
  const cardConfigurationContent = useContext(CardConfigurationContext)
  const [datas] = useState(CONTROL_DATAS)
  //添加卡片表单项
  const addCardFormItem = useCallback(
    (item: any) => {
      const { data, dispatch } = cardConfigurationContent
      const { card } = data
      if (!item.disabled && cardConfigurationContent && dispatch) {
        const arr = card
          ? card.inParams.filter((sub) => sub.formType === item.data.formType)
          : []

        dispatch({
          type: 'ADD_CARD_FROM_ITEM',
          data: {
            ...item.data,
            label: `${item.name}${arr.length}`,
            field: `${item.data.formType.toLocaleLowerCase()}${arr.length}`
          }
        })
      }
    },
    [cardConfigurationContent]
  )
  return (
    <ul className='app-card-configuration-form__composite'>
      <div className='app-card-configuration-form__composite--header'>组件</div>
      <div className='app-card-configuration-form__composite--list'>
        {datas.map((item) => (
          <li
            onClick={() => addCardFormItem(item)}
            className={`app-card-configuration-form__composite--item ${
              item.disabled ? 'is-disabled' : ''
            }`}
            key={item.value}>
            {item.value}
          </li>
        ))}
      </div>
    </ul>
  )
}

export default Composite
