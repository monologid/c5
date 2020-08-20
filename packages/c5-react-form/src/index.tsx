import * as React from 'react'
import {
  Button,
  DatePicker,
  Form as F,
  Input,
  InputNumber,
  Select,
  Switch
} from 'antd'
import { formatTimeStr } from 'antd/lib/statistic/utils';

export const Types = {
  DATE: 'DATE',
  NUMBER: 'NUMBER',
  PASSWORD: 'PASSWORD',
  TEXT: 'TEXT',
  TEXTAREA: 'TEXTAREA',
  SELECT: 'SELECT',
  SWITCH: 'SWITCH'
}

interface Props {
  forms: Array<any>,
  onSubmit: any,
  onError: any
}

export const Form = (props: Props) => {
  const {
    forms,
    onSubmit,
    onError
  } = props;

  return (
    <React.Fragment>
      <F layout='vertical' onFinish={onSubmit} onFinishFailed={onError}>
        {forms.map(form => {
          if (form && !form.visible) return;
          if (form.type === Types.SWITCH) {
            return (
              <React.Fragment key={form.key}>
                <F.Item key={form.key} id={form.key} label={form.title} name={form.key} rules={form.rules} valuePropName="checked">
                  {createForm(form)}
                </F.Item>
              </React.Fragment>
            );
          }

          return (
            <React.Fragment key={form.key}>
              <F.Item key={form.key} label={form.title} name={form.key} rules={form.rules} required={form.required}>
                {createForm(form)}
              </F.Item>
            </React.Fragment>
          )
        })}

        <div className='flex justify-end items-center'>
          <Button type='primary' htmlType='submit'>Submit</Button>
        </div>
      </F>
    </React.Fragment>
  )
}

const createForm = (form) => {
  let f;

  switch (form.type) {
    case Types.DATE:
      f = <DatePicker />;
      break;
    case Types.NUMBER:
      f = <InputNumber />;
      break;
    case Types.PASSWORD:
      f = <Input.Password />;
      break;
    case Types.TEXT:
      f = <Input />;
      break;
    case Types.TEXTAREA:
      f = <Input.TextArea />;
      break;
    case Types.SELECT:
      f = <React.Fragment>
            <Select
              showSearch
              onChange={form.onChange}
              placeholder='Please select an option'
              optionFilterProp="children">
              {form.options.map(item => (
                <Select.Option key={item.value} value={item.value}>{item.label}</Select.Option>
              ))}
            </Select>
          </React.Fragment>;
      break;
    case Types.SWITCH:
      f = <Switch />;
      break;
  }

  return f;
}