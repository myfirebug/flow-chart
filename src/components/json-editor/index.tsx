import { FC, useCallback, useEffect, useRef } from 'react'
import { IAnyObject } from '@src/types'
import JSONEditor, { JSONEditorOptions } from 'jsoneditor'
import 'jsoneditor/dist/jsoneditor.css'
import './index.scss'

interface IJsonEditorProps {
  value: IAnyObject
  onChange?: (josn?: any) => void
  options?: JSONEditorOptions
}

const JsonEditor: FC<IJsonEditorProps> = ({
  value,
  onChange,
  options = {}
}) => {
  const editorRef = useRef<any>(null)
  const editorObj = useRef<any>(null)

  // 初始化JOSN编辑器
  const initEditor = useCallback(() => {
    if (!editorObj.current) {
      const totalOptions: JSONEditorOptions = {
        mode: 'code',
        onChange: () => {
          onChange && onChange(editorObj.current?.get())
        },
        ...options
      }
      editorObj.current = new JSONEditor(editorRef.current, totalOptions, value)
    }
  }, [onChange, options, value])

  useEffect(() => {
    initEditor()
  }, [initEditor])

  useEffect(() => {
    if (editorObj.current) {
      // 这里更新
      // editorObj.current.set(value)
      // editorObj.current.get()
      // console.log(editorObj.current.set, value)
    }
    return () => {
      // 销毁
      if (editorObj.current) {
        editorObj.current.destroy()
      }
    }
  }, [editorObj, value])

  console.log(editorObj.current, editorRef.current, 'editorObj.current')

  return <div ref={editorRef} className='app-json-editor'></div>
}

export default JsonEditor
