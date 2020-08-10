import React from 'react'

import Login from '@c5/react-login'

export default () => {
  const onFinish = values => {
    console.dir(values);
  }

  const onFinishFailed = err => {
    console.dir(err)
  }

  return <Login
    description='to continue to Cosmiq'
    registrationUrl='https://cosmiq.app'
    forgotPasswordUrl='https://cosmiq.app'
    onFinish={onFinish}
    onFinishFailed={onFinishFailed} />
}