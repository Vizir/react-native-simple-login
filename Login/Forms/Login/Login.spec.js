/* global describe, it, expect, jest */

import React from 'react'
import { shallow } from 'enzyme'
import defaultLabels from '../../constants/defaultLabels'
import { LoginForm as Login } from '../'

describe('Login Form', () => {
  it('can render correctly', () => {
    expect(shallow(
      <Login labels={defaultLabels} />
    )).toMatchSnapshot()
  })

  it('renders the reset password button when haveResetPassword is set to true', () => {
    const onResetPasswordClick = jest.fn()

    const wrapper = shallow(
      <Login
        labels={defaultLabels}
        haveResetPassword
        onResetPasswordClick={onResetPasswordClick}
      />
    )

    const resetPasswordButton = wrapper.find({text: defaultLabels.forgotPassword})

    expect(resetPasswordButton.length).toEqual(1)
    resetPasswordButton.simulate('press')
    expect(onResetPasswordClick.mock.calls.length).toEqual(1)
  })

  it('does not render the reset password button when haveResetPassword is set to false', () => {
    const onResetPasswordClick = jest.fn()

    const wrapper = shallow(
      <Login
        labels={defaultLabels}
        haveResetPassword={false}
        onResetPasswordClick={onResetPasswordClick}
      />
    )

    expect(wrapper.find({
      title: defaultLabels.forgotPassword
    }).length).toEqual(0)
  })

  it('calls the login callback with the user identification and password when the submit button is pressed', () => {
    const onLogin = jest.fn()

    const wrapper = shallow(
      <Login
        labels={defaultLabels}
        onLogin={onLogin}
      />
    )

    const identificationInput = wrapper.find({label: defaultLabels.userIdentification})
    identificationInput.simulate('changeText', 'some@email.com')

    const passwordInput = wrapper.find({label: defaultLabels.password})
    passwordInput.simulate('changeText', 'Password')

    const submitButton = wrapper.find({text: defaultLabels.loginFormButton})
    submitButton.simulate('press')

    expect(onLogin.mock.calls.length).toEqual(1)
    expect(onLogin.mock.calls[0]).toEqual(['some@email.com', 'Password'])
  })

  it('only renders the logo if there is one and it should be rendered', () => {
    const wrapper = shallow(
      <Login
        labels={defaultLabels}
        onLogin={jest.fn()}
      />
    )
    expect(wrapper.find('Logo').length).toEqual(0)

    wrapper.setProps({logoImage: 'fakeImage', showLogo: false})
    expect(wrapper.find('Logo').length).toEqual(0)

    wrapper.setProps({logoImage: null, showLogo: true})
    expect(wrapper.find('Logo').length).toEqual(0)

    wrapper.setProps({logoImage: 'fakeImage', showLogo: true})
    expect(wrapper.find('Logo').length).toEqual(1)

    expect(wrapper).toMatchSnapshot()
  })
})
