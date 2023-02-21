/*
 * @Description: 页面描述
 * @Author: hejp 378540660@qq.com
 * @Date: 2023-02-18 16:19:34
 * @LastEditors: hejp 378540660@qq.com
 * @LastEditTime: 2023-02-21 13:18:43
 * @FilePath: \flow-chart\src\pages\card-configuration\components\configuration-form\settings\index.tsx
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
import { FC, useCallback, useContext, useEffect } from 'react'
import {
  Form,
  Input,
  InputNumber,
  FormInstance,
  Select,
  Collapse,
  Switch,
  Slider,
  Empty
} from 'antd'
import configuration from '@src/form/tools'
import { CardConfigurationContext } from '../../../index'
const { TextArea } = Input
const { Option } = Select
const { Panel } = Collapse
const { inputConfigure } = configuration
interface ISittingsProps {}

console.log(inputConfigure, '12312')

const Sittings: FC<ISittingsProps> = () => {
  const cardConfigurationContent = useContext(CardConfigurationContext)
  // 配置from
  const [configureForm] = Form.useForm()
  useEffect(() => {
    const { data } = cardConfigurationContent
    const { card, selectFormItemId } = data
    if (data && selectFormItemId && card) {
      const index = card?.inParams.findIndex(
        (item) => item.id === selectFormItemId
      )
      if (index !== -1) {
        configureForm.setFieldsValue(card?.inParams[index])
      }
    }
  }, [cardConfigurationContent])
  /**
   *
   * @param callback 返回的方法
   * @param name 表单名
   * @param value 表单值
   * @param field 字段名
   */
  const onChangeHandler = useCallback(
    (name: string, value: any) => {
      cardConfigurationContent.dispatch({
        type: 'MODIFY_CARD_FROM_ITEM',
        data: { [name]: value }
      })
    },
    [cardConfigurationContent]
  )
  /**
   * 基础表单
   * @param item 单个配置项
   * @param form 表单实例
   * @param callback 返回方法
   * @param field 字段名
   * @param isUpdate 是否change更新
   * @returns
   */
  const baseForm = (
    item: any,
    form: FormInstance<any>,
    isUpdate: boolean = true
  ) => {
    return (
      <>
        {item.componentName === 'Input' && (
          <Form.Item
            label={item.label}
            name={item.name}
            tooltip={item.tooltip}
            rules={[{ required: item.require }]}>
            <Input
              allowClear
              disabled={item.disabled}
              onBlur={(e) =>
                isUpdate && onChangeHandler(item.name, e.target.value)
              }
              placeholder={item.placeholder}
            />
          </Form.Item>
        )}
        {item.componentName === 'InputNumber' && (
          <Form.Item
            label={item.label}
            name={item.name}
            tooltip={item.tooltip}
            rules={[{ required: item.require }]}>
            <InputNumber
              disabled={item.disabled}
              min={item.min}
              max={item.max}
              onBlur={(e) =>
                isUpdate &&
                onChangeHandler(
                  item.name,
                  e.target.value ? Number(e.target.value) : 0
                )
              }
              style={{ width: '100%' }}
              placeholder={item.placeholder}
            />
          </Form.Item>
        )}
        {item.componentName === 'TextArea' && (
          <Form.Item
            label={item.label}
            name={item.name}
            tooltip={item.tooltip}
            rules={[{ required: item.require }]}>
            <TextArea
              allowClear
              disabled={item.disabled}
              onBlur={(e) =>
                isUpdate && onChangeHandler(item.name, e.target.value)
              }
              rows={8}
              placeholder={item.placeholder}
            />
          </Form.Item>
        )}
        {item.componentName === 'Switch' && (
          <Form.Item
            label={item.label}
            name={item.name}
            tooltip={item.tooltip}
            valuePropName='checked'
            rules={[{ required: item.require }]}>
            <Switch
              onChange={(value) =>
                isUpdate && onChangeHandler(item.name, value)
              }
            />
          </Form.Item>
        )}
        {item.componentName === 'Slider' && (
          <Form.Item
            label={item.label}
            name={item.name}
            tooltip={item.tooltip}
            rules={[{ required: item.require }]}>
            <Slider
              min={item.min || 0}
              max={item.max || 100}
              disabled={item.disabled}
              step={item.step || 1}
              onAfterChange={(value) =>
                isUpdate && onChangeHandler(item.name, value)
              }
            />
          </Form.Item>
        )}
        {item.componentName === 'Select' && (
          <Form.Item
            label={item.label}
            name={item.name}
            tooltip={item.tooltip}
            rules={[{ required: item.require }]}>
            <Select
              allowClear
              disabled={item.disabled}
              onChange={(value: string) =>
                isUpdate && onChangeHandler(item.name, value)
              }
              placeholder={item.placeholder}>
              {item.options.map((item: any) => (
                <Option key={item.code} value={item.code}>
                  {item.name}
                </Option>
              ))}
            </Select>
          </Form.Item>
        )}
      </>
    )
  }
  // 判断数据是Array 或者 object
  const judgeType = (data: any, type: string) => {
    return Object.prototype.toString.call(data) === type
  }
  /**
   * 动态渲染表单
   * @param datas 数据
   * @param form 表单实例
   * @param callback 返回函数
   * @param field 字段名
   * @param isUpdate 是否change更新
   * @returns
   */
  const renderDynamicForm = (
    datas: any,
    form: FormInstance<any>,
    isUpdate: boolean = true
  ) => {
    return datas.map((item: any, index: number) => {
      if (judgeType(item, '[object Object]')) {
        const relationFields =
          item.relationFields !== undefined
            ? item.relationFields.split(',')
            : []
        return (
          <div key={index}>
            {!relationFields.length ? (
              baseForm(item, form, isUpdate)
            ) : (
              <Form.Item noStyle shouldUpdate>
                {({ getFieldValue }) => {
                  if (
                    relationFields.every((subItem: string) =>
                      item.relationValues.includes(
                        String(getFieldValue(subItem))
                      )
                    )
                  ) {
                    return baseForm(item, form, isUpdate)
                  }
                }}
              </Form.Item>
            )}
          </div>
        )
      }
      if (judgeType(item, '[object Array]')) {
        return (
          <div key={index}>
            {item.map((subItem: any, subIndex: number) => {
              const relationFields =
                subItem.relationFields !== undefined
                  ? subItem.relationFields.split(',')
                  : []
              return (
                <Collapse key={subIndex} activeKey={0}>
                  {subItem.relationFields === undefined ? (
                    <Panel header={subItem.name} key={subIndex}>
                      {renderDynamicForm(subItem.list, form, isUpdate)}
                    </Panel>
                  ) : (
                    <Form.Item noStyle shouldUpdate>
                      {({ getFieldValue }) => {
                        if (
                          relationFields.every((subbItem: string) =>
                            subItem.relationValues.includes(
                              String(getFieldValue(subbItem))
                            )
                          )
                        ) {
                          return (
                            <Collapse key={subIndex}>
                              <Panel
                                header={subItem.name}
                                key={subItem + subIndex}>
                                {renderDynamicForm(
                                  subItem.list,
                                  form,
                                  isUpdate
                                )}
                              </Panel>
                            </Collapse>
                          )
                        }
                      }}
                    </Form.Item>
                  )}
                </Collapse>
              )
            })}
          </div>
        )
      }
    })
  }

  return (
    <div className='app-card-configuration-form__settings'>
      <div className='header'>属性配置</div>
      <div className='body'>
        {cardConfigurationContent.data.selectFormItemId ? (
          <Form
            form={configureForm}
            labelCol={{ span: 7 }}
            wrapperCol={{ span: 17 }}
            autoComplete='off'
            colon={false}
            labelAlign='left'>
            {renderDynamicForm(inputConfigure.configure, configureForm, true)}
          </Form>
        ) : (
          <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
        )}
      </div>
    </div>
  )
}

export default Sittings
