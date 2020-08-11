import * as React from 'react'
import { Button, Form, Input } from 'antd'

interface Props {
  title?: string,
  description?: string,
  usernameLabel?: string,
  passwordLabel?: string,
  registrationUrl?: string,
  registrationText?: string,
  signInText?: string,
  forgotPasswordUrl?: string,
  onSubmit: any,
  onError: any
}

export default (props: Props) => {
  const {
    title = 'Sign in',
    description,
    usernameLabel = 'Username',
    passwordLabel = 'Password',
    registrationUrl = '#',
    registrationText = 'Create account',
    signInText = 'Sign In',
    forgotPasswordUrl = '#',
    onSubmit,
    onError,
  } = props;

  return (
    <div className='h-screen flex flex-col justify-center items-center'>
      <div className='border shadow p-16' style={{width: 400}}>
        <div className='text-center text-xl mb-1'>{title}</div>
        <div className='text-center text-sm'>{description}</div>

        <div className='mt-10'>
          <Form layout='vertical' onFinish={onSubmit} onFinishFailed={onError}>
            <Form.Item label={usernameLabel} name='username' rules={[{ required: true, message: `Please input your ${usernameLabel}!` }]}>
              <Input />
            </Form.Item>

            <Form.Item label={passwordLabel} name='password' rules={[{ required: true, message: `Please input your ${passwordLabel}!` }]}>
              <Input.Password />
            </Form.Item>

            { registrationUrl !== '#' &&
              <div className='text-xs' style={{marginTop: -10}}>
                <a href={forgotPasswordUrl}>Forgot password?</a>
              </div>
            }

            <div className='w-full flex justify-between items-center mt-10'>
              <div>
                { registrationUrl !== '#' &&
                  <a href={registrationUrl}>{registrationText}</a>
                }
                { registrationUrl === '#' &&
                  <a href={forgotPasswordUrl}>Forgot password?</a>
                }
              </div>
              <div>
                <Button type='primary' htmlType='submit'>{signInText}</Button>
              </div>
            </div>
          </Form>
        </div>
      </div>
    </div>
  )
}