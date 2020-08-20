import React from 'react'

import { Form, Types } from '@c5/react-form'

export default () => {
  const [selectData, setSelectData] = React.useState(undefined)

  const forms = [
    { key: 'text', title: 'Text', type: Types.TEXT, required: true, rules: [{ required: true, message: 'Please input your Fullname!' }], visible: true },
    { key: 'textarea', title: 'Text Area', type: Types.TEXTAREA, required: false, rules: [], visible: true },
    { key: 'date', title: 'Date', type: Types.DATE, required: false, rules: [], visible: true },
    { key: 'number', title: 'Number', type: Types.NUMBER, required: false, rules: [], visible: true },
    { key: 'password', title: 'Password', type: Types.PASSWORD, required: false, rules: [], visible: true },
    { key: 'select', title: 'Select', type: Types.SELECT, required: false, rules: [],
      options: [
        { label: 'One', value: 'one' },
        { label: 'Two', value: 'Two' },
        { label: 'Three', value: 'three' }
      ],
      onChange: value => setSelectData(value),
      visible: true
    },
    { key: 'switch', title: 'Switch', type: Types.SWITCH, required: false, visible: true }
  ]

  const onSubmit = values => {
    values.select = selectData;
    console.dir(values);

    // The value of `date` is using MomentJS,
    // so you can use the format(...) method to format the date
    console.dir(values.date.format('YYYY-MM-DD'))
  }

  const onError = err => {
    console.dir(err);
  }

  return (
    <div className='h-screen flex justify-center items-center'>
      <div className='border p-10' style={{width: 400}}>
        <Form
          forms={forms}
          onSubmit={onSubmit}
          onError={onError} />
      </div>
    </div>
  )
}