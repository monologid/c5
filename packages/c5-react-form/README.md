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
| form | Array of object contains the form object | Please refer to the example below |
| onFinish | A method when submit button is clicked and validation success | |
| onFinishFailed | A method when submit button is clicked and validation failed | |

## Usage

```tsx
import React, { Component } from 'react'
import Form from '@c5/react-form'
import 'antd/dist/antd.css'

const ExampleForm = () => {
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
```

## License

[MIT](https://github.com/monologid/c5/blob/master/LICENSE) © [Monolog](https://github.com/monolog)
