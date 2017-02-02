import React, { Component } from 'react'
import defaultLabels from './constants/defaultLabels'

import { LoginForm, ResetPasswordForm } from './Forms'

class Login extends Component {
  constructor (props) {
    super(props)
    this.state = {resetPasswordActive: false}
  }

  changeToResetPasswordForm = () => {
    this.setState({resetPasswordActive: true})
  }

  changeToLoginForm = () => {
    this.setState({resetPasswordActive: false})
  }

  getLabels = () => {
    return {
      ...defaultLabels,
      ...this.props.labels
    }
  }

  onLogin = (userIdentification, password) => {
    this.props.onLogin(userIdentification, password)
  }

  onResetPassword = (userIdentification) => {
    this.props.onResetPassword(userIdentification)
    this.changeToLoginForm()
  }

  renderResetPassword = () => {
    return (
      <ResetPasswordForm
        {...this.props}
        labels={this.getLabels()}
        onBackClick={this.changeToLoginForm}
        onResetPassword={this.onResetPassword}
      />
    )
  }

  renderLoginForm = () => {
    return (
      <LoginForm
        {...this.props}
        labels={this.getLabels()}
        onResetPasswordClick={this.changeToResetPasswordForm}
        onLogin={this.onLogin}
      />
    )
  }

  render () {
    if (this.state.resetPasswordActive) {
      return this.renderResetPassword()
    }

    return this.renderLoginForm()
  }
}

Login.propTypes = {

}

Login.defaultProps = {
  labels: {},
  haveResetPassword: true
}

export default Login
