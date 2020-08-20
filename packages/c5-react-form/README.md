# @c5/react-form

> A component to generate a form for React.

[![NPM](https://img.shields.io/npm/v/@c5/react-form.svg)](https://www.npmjs.com/package/@c5/react-form) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Sample Generated Form

<p align="center">
  <img src="https://github.com/monologid/c5/raw/master/packages/c5-react-form/example/sample-generated-form.png" />
</p>

## Install

```bash
npm install --save @c5/react-form
```

### Other Requirements

```bash
npm install --save antd tailwind

# Afterward, follow the step-by-step to setup tailwind.
# You can find it here: https://tailwindcss.com/docs/installation/
```

## Props

| Attribute Name | Description | Default Value |
|----------------|-------------|---------------|
| formHook | You can use the antd form hook (optional) | |
| form | Array of object contains the form object | Please refer to the example below |
| onSubmit | A method when submit button is clicked and validation success | |
| onError | A method when submit button is clicked and validation failed | |

## Usage

```tsx
import React, { Component } from 'react'
import Form, { Types } from '@c5/react-form'
import 'antd/dist/antd.css'

const ExampleForm = () => {
  const [selectData, setSelectData] = React.useState(undefined);

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
```

## License

[Apache 2.0](https://github.com/monologid/c5/blob/master/LICENSE) © [Monolog](https://github.com/monolog)
