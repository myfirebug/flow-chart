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
        console.log(confs, 'confs')
        axios({
          url: confs.url,
          method: confs.method,
          params: confs.method === 'GET' ? confs.params : null,
          data: confs.method === 'POST' ? confs.params : null
        }).then((res: any) => {
          console.log(res, '1231')
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
