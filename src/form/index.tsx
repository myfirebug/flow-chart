import { memo, useCallback, useEffect, useMemo } from 'react'
import { Form } from 'antd'
import { IPARAM } from '@src/types'
// 输入框
import CustomInput from './input'
// 数字输入框
import CustomInputNumber from './input-number'
// switch
import CustomSwitch from './switch'
// select
import CustomSelect from './select'
// checkbox-group
import CustomCheckboxGroup from './checkbox-group'
// radio-group
import CustomRadioGroup from './radio-group'
// cascader
import CustomCascader from './cascader'
import './index.scss'

interface ICustomFormProps {
  list: IPARAM[]
  selectHandler?: (
    id: string,
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => void
  changeHandler?: (id: string, value: any) => void
  selectId?: string
}

const CustomForm = memo<ICustomFormProps>(
  ({ list, selectHandler, selectId, changeHandler }) => {
    // 配置from
    const [form] = Form.useForm()
    useEffect(() => {
      if (list && form) {
        let params: any = {}
        list.forEach((item) => {
          params[item.field] = item.value || undefined
        })
        form.setFieldsValue(params)
      }
    }, [form, list])
    // 获取参数
    const getParams = useCallback(
      (dependency: never[]) => {
        let result: any = {}
        if (dependency) {
          dependency.forEach((item) => {
            const index = list.findIndex((sub) => sub.field === item)
            if (index !== -1) {
              result[item] = list[index].value
            }
          })
        }
        return result
      },
      [list]
    )
    return (
      <Form
        labelCol={{ span: 7 }}
        wrapperCol={{ span: 17 }}
        autoComplete='off'
        colon={false}
        className='app-configuration-form'
        labelAlign='left'
        form={form}>
        {list.map((item) => {
          if (
            item.formType === 'Input' ||
            item.formType === 'TextArea' ||
            item.formType === 'Password'
          ) {
            return (
              <CustomInput
                type={item.formType}
                key={item.id}
                item={item}
                changeHandler={changeHandler}
                selectHandler={selectHandler}
                selectId={selectId}
              />
            )
          }
          if (item.formType === 'InputNumber') {
            return (
              <CustomInputNumber
                key={item.id}
                item={item}
                selectHandler={selectHandler}
                selectId={selectId}
              />
            )
          }
          if (item.formType === 'Switch') {
            return (
              <CustomSwitch
                key={item.id}
                item={item}
                selectHandler={selectHandler}
                selectId={selectId}
              />
            )
          }
          if (item.formType === 'Select') {
            return (
              <CustomSelect
                key={item.id}
                item={{
                  ...item,
                  params: getParams(item.dependency)
                }}
                selectHandler={selectHandler}
                selectId={selectId}
              />
            )
          }
          if (item.formType === 'CheckboxGroup') {
            return (
              <CustomCheckboxGroup
                key={item.id}
                item={{
                  ...item,
                  params: getParams(item.dependency)
                }}
                selectHandler={selectHandler}
                selectId={selectId}
              />
            )
          }
          if (item.formType === 'RadioGroup') {
            return (
              <CustomRadioGroup
                key={item.id}
                item={{
                  ...item,
                  params: getParams(item.dependency)
                }}
                selectHandler={selectHandler}
                selectId={selectId}
              />
            )
          }
          if (item.formType === 'Cascader') {
            return (
              <CustomCascader
                key={item.id}
                item={{
                  ...item,
                  params: getParams(item.dependency)
                }}
                selectHandler={selectHandler}
                selectId={selectId}
              />
            )
          }

          return null
        })}
      </Form>
    )
  },
  (prevProps, nextProps) => {
    if (JSON.stringify(prevProps) === JSON.stringify(nextProps)) {
      return true
    }
    return false
  }
)

export default CustomForm
