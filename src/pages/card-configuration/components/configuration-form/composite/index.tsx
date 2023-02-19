/*
 * @Description: 页面描述
 * @Author: hejp 378540660@qq.com
 * @Date: 2023-02-18 16:19:34
 * @LastEditors: hejp 378540660@qq.com
 * @LastEditTime: 2023-02-19 21:22:21
 * @FilePath: \flow-chart\src\pages\card-configuration\components\configuration-form\composite\index.tsx
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
import { FC, useState } from 'react'
import { CONTROL_DATAS } from '../constant'

interface ICompositeProps {}

const Composite: FC<ICompositeProps> = () => {
  const [datas, setDatas] = useState(CONTROL_DATAS)
  return (
    <ul className='app-card-configuration-form__composite'>
      <div className='app-card-configuration-form__composite--header'>组件</div>
      <div className='app-card-configuration-form__composite--list'>
        {datas.map((item) => (
          <li
            className='app-card-configuration-form__composite--item'
            key={item.value}>
            {item.value}
          </li>
        ))}
      </div>
    </ul>
  )
}

export default Composite
