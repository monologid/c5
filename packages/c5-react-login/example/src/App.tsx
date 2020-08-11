import React from 'react'

import Login from '@c5/react-login'

export default () => {
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