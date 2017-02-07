/* global describe, it, expect, jest */

import React from 'react'
import { Button } from 'react-native'
import { shallow } from 'enzyme'
import * as Forms from './Forms'
import Login from '../'

describe('Login component', () => {
  it('can render correctly', () => {
    expect(shallow(
      <Login onLogin={jest.fn()} />
    )).toMatchSnapshot()
  })

  it('can render correctly with reset password', () => {
    const wrapper = shallow(
      <Login onLogin={jest.fn()} onResetPassword={jest.fn()} />
    )

    wrapper.setState({ resetPasswordActive: true })

    expect(wrapper).toMatchSnapshot()
  })

  it('correctly calls the onLogin when the login form is submitted', () => {
    Forms.LoginForm = (props) => {
      return (
        <Button
          title='submit'
          onPress={() => props.onLogin('email', 'password')} />
      )
    }
    Forms.LoginForm.displayName = 'LoginForm'

    const onLogin = jest.fn()
    const wrapper = shallow(
      <Login onLogin={onLogin} />
    )

    wrapper.shallow().find('Button').simulate('press')

    expect(onLogin.mock.calls.length).toEqual(1)
    expect(onLogin.mock.calls[0]).toEqual(['email', 'password'])
  })

  it('correctly calls the onResetPassword when the reset password form is submitted', () => {
    Forms.ResetPasswordForm = (props) => {
      return (
        <Button
          title='submit'
          onPress={() => props.onResetPassword('email')} />
      )
    }
    Forms.ResetPasswordForm.displayName = 'ResetPasswordForm'

    const onResetPassword = jest.fn()
    const wrapper = shallow(
      <Login onLogin={jest.fn()} onResetPassword={onResetPassword} />
    )

    wrapper.setState({ resetPasswordActive: true })

    wrapper.shallow().find('Button').simulate('press')

    expect(onResetPassword.mock.calls.length).toEqual(1)
    expect(onResetPassword.mock.calls[0]).toEqual(['email'])
  })

  describe('navigation between login and reset password', () => {
    it('shows the reset password form when the link on login is pressed', () => {
      Forms.LoginForm = (props) => {
        return (
          <Button
            title='go to reset password'
            onPress={() => props.onResetPasswordClick()} />
        )
      }
      Forms.LoginForm.displayName = 'LoginForm'

      const wrapper = shallow(
        <Login onLogin={jest.fn()} onResetPassword={jest.fn()} />
      )

      wrapper.setState({ resetPasswordActive: false })
      wrapper.shallow().find('Button').simulate('press')

      expect(wrapper.state('resetPasswordActive')).toEqual(true)
    })

    it('shows the login form when the reset password form is submited', () => {
      Forms.ResetPasswordForm = (props) => {
        return (
          <Button
            title='submit'
            onPress={() => props.onResetPassword('email')} />
        )
      }
      Forms.ResetPasswordForm.displayName = 'ResetPasswordForm'

      const wrapper = shallow(
        <Login onLogin={jest.fn()} onResetPassword={jest.fn()} />
      )

      wrapper.setState({ resetPasswordActive: true })
      wrapper.shallow().find('Button').simulate('press')

      expect(wrapper.state('resetPasswordActive')).toEqual(false)
    })
  })
})
