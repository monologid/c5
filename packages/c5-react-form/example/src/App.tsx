import React from 'react'

import { Form, Types } from '@c5/react-form'

export default () => {
  const forms = [
    { key: 'text', title: 'Text', type: Types.TEXT, required: true, rules: [{ required: true, message: 'Please input your Fullname!' }] },
    { key: 'textarea', title: 'Text Area', type: Types.TEXTAREA, required: false, rules: [] },
    { key: 'date', title: 'Date', type: Types.DATE, required: false, rules: [] },
    { key: 'number', title: 'Number', type: Types.NUMBER, required: false, rules: [] },
    { key: 'password', title: 'Password', type: Types.PASSWORD, required: false, rules: [] },
    { key: 'select', title: 'Select', type: Types.SELECT, required: false, rules: [],
      options: [
        { label: 'One', value: 'one' },
        { label: 'Two', value: 'Two' },
        { label: 'Three', value: 'three' }
      ]
    },
    { key: 'switch', title: 'Switch', type: Types.SWITCH, required: false }
  ]

  const onFinish = values => {
    console.dir(values)
  }

  const onFinishFailed = err => {
    console.dir(err);
  }

  return (
    <div className='h-screen flex justify-center items-center'>
      <div className='border p-10' style={{width: 400}}>
        <Form
          forms={forms}
          onFinish={onFinish} 
          onFinishFailed={onFinishFailed} />
      </div>
    </div>
  )
}