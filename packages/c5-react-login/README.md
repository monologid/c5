# @c5/react-login

> A login component for React.

[![NPM](https://img.shields.io/npm/v/@c5/react-login.svg)](https://www.npmjs.com/package/@c5/react-login) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Sample Login Form

<p align="center">
  <img src="https://github.com/monologid/c5/raw/master/packages/c5-react-login/example/sample-login.png" />
</p>

## Install

```bash
npm install --save @c5/react-login
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
| title | Set title of the component | Sign In |
| description | Set description under the title | |
| usernameLabel | Customize username label | Username |
| passwordLabel | Customize password label | Password |
| registrationUrl | Set registration url (if any) | # |
| registrationText | Set registration text | Create account |
| signInText | Set sign in text | Sign In |
| forgotPasswordUrl | Set forgot password url | # |
| onSubmit | A method when submit button is clicked and validation success | |
| onError | A method when submit button is clicked and validation failed | |

## Usage

```tsx
import React, { Component } from 'react'
import Login from '@c5/react-login'
import 'antd/dist/antd.css'

const ExampleLogin = () => {
  const onSubmit = values => {
    console.dir(values);
  }

  const onError = err => {
    console.dir(err)
  }

  return <Login
    description='to continue to Cosmiq'
    registrationUrl='https://cosmiq.app'
    forgotPasswordUrl='https://cosmiq.app'
    onSubmit={onSubmit}
    onError={onError} />
}
```

## License

[Apache 2.0](https://github.com/monologid/c5/blob/master/LICENSE) © [Monolog](https://github.com/monolog)
