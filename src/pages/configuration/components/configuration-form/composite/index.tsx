/*
 * @Description: 页面描述
 * @Author: hejp 378540660@qq.com
 * @Date: 2023-02-18 16:19:34
 * @LastEditors: hejp 378540660@qq.com
 * @LastEditTime: 2023-02-18 16:54:46
 * @FilePath: \flow-chart\src\pages\configuration\components\configuration-form\composite\index.tsx
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
import { FC, useState } from 'react'
import { CONTROL_DATAS } from '../constant'

interface ICompositeProps {}

const Composite: FC<ICompositeProps> = () => {
  const [datas, setDatas] = useState(CONTROL_DATAS)
  return (
    <ul className='app-configuration__composite'>
      <div className='app-configuration__composite--header'>组件</div>
      <div className='app-configuration__composite--list'>
        {datas.map((item) => (
          <li
            className='app-configuration__composite--item'
            key={item.value}
            draggable>
            {item.value}
          </li>
        ))}
      </div>
    </ul>
  )
}

export default Composite
