/* global describe, it, expect, jest */

import React from 'react'
import { shallow } from 'enzyme'
import defaultLabels from '../../constants/defaultLabels'
import { ResetPasswordForm as ResetPassword } from '../'

describe('Reset Password Form', () => {
  it('can render correctly', () => {
    expect(shallow(
      <ResetPassword labels={defaultLabels} />
    )).toMatchSnapshot()
  })

  it('calls the reset password callback with the user identification when the submit button is pressed', () => {
    const onResetPassword = jest.fn()

    const wrapper = shallow(
      <ResetPassword
        labels={defaultLabels}
        onResetPassword={onResetPassword}
      />
    )

    const identificationInput = wrapper.find({label: defaultLabels.userIdentification})
    identificationInput.simulate('changeText', 'some@email.com')

    const submitButton = wrapper.find({text: defaultLabels.forgotPasswordFormButton})
    submitButton.simulate('press')

    expect(onResetPassword.mock.calls.length).toEqual(1)
    expect(onResetPassword.mock.calls[0]).toEqual(['some@email.com'])
  })
})
