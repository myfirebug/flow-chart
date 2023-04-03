/*
 * @Description: 页面描述
 * @Author: hejp 378540660@qq.com
 * @Date: 2023-02-28 10:49:44
 * @LastEditors: hejp 378540660@qq.com
 * @LastEditTime: 2023-03-29 17:50:45
 * @FilePath: \flow-chart\src\hooks\useRequest.ts
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
import { useEffect, useState } from 'react'
import axios from 'axios'
import { IAnyObject } from '@src/types'

function UseRequest(props: string) {
  const [data, setData] = useState([])

  // 初始化数据
  useEffect(() => {
    const confs: IAnyObject = JSON.parse(props)
    if (confs.dataType === 'mock') {
      setData(confs.mock)
    } else {
      if (confs.url && confs.method) {
        const header: any = {}
        if (confs.isHeader && confs.headerField && confs.headerValue) {
          header[confs.headerField] = confs.headerValue
        }
        axios({
          url: confs.url,
          method: confs.method,
          params: confs.method === 'GET' ? confs.params : null,
          data: confs.method === 'POST' ? confs.params : null
        }).then((res: any) => {
          if (confs.correspondField && res[confs.correspondField]) {
            setData(res[confs.correspondField])
          } else {
            setData(res.data || [])
          }
        })
      }
    }
  }, [props])

  return data
}

export default UseRequest
