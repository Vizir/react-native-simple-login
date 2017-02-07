import React, { Component } from 'react'
import DefaultStyles from './DefaultStyles'
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
        showLogo={this.props.showLogoOnResetPassword}
      />
    )
  }

  renderLoginForm = () => {
    return (
      <LoginForm
        {...this.props}
        haveResetPassword={!!this.props.onResetPassword}
        labels={this.getLabels()}
        onResetPasswordClick={this.changeToResetPasswordForm}
        onLogin={this.onLogin}
        showLogo={this.props.showLogoOnLogin}
      />
    )
  }

  render () {
    if (this.state.resetPasswordActive && this.props.onResetPassword) {
      return this.renderResetPassword()
    }

    return this.renderLoginForm()
  }
}

Login.propTypes = {
  labels: React.PropTypes.object,
  logoImage: React.PropTypes.any,
  onLogin: React.PropTypes.func.isRequired,
  onResetPassword: React.PropTypes.func,
  passwordInputIcon: React.PropTypes.any,
  resetPasswordHeaderRenderer: React.PropTypes.func,
  showLogoOnLogin: React.PropTypes.bool,
  showLogoOnResetPassword: React.PropTypes.bool,
  userIdentificationInputIcon: React.PropTypes.any,
  inputPlaceholderTextColor: React.PropTypes.string,

  backButtonStyle: React.PropTypes.any,
  backButtonTextStyle: React.PropTypes.any,
  baseButtonStyle: React.PropTypes.any,
  baseButtonTextStyle: React.PropTypes.any,
  inputIconStyle: React.PropTypes.any,
  loginResetPasswordLinkStyle: React.PropTypes.any,
  loginResetPasswordLinkTextStyle: React.PropTypes.any,
  fieldsetWrapperStyle: React.PropTypes.any,
  inputWrapperStyle: React.PropTypes.any,
  inputStyle: React.PropTypes.any,
  loginFormSubmitButtonStyle: React.PropTypes.any,
  loginFormSubmitButtonTextStyle: React.PropTypes.any,
  loginFormWrapperStyle: React.PropTypes.any,
  logoStyle: React.PropTypes.any,
  resetPasswordFormWrapperStyle: React.PropTypes.any,
  resetPasswordFormSubmitButtonTextStyle: React.PropTypes.any,
  resetPasswordFormSubmitButtonStyle: React.PropTypes.any
}

Login.defaultProps = {
  labels: {},
  showLogoOnLogin: true,
  showLogoOnResetPassword: true,
  inputPlaceholderTextColor: '#ccc',
  userIdentificationInputIcon: require('./Images/email_icon.png'),
  passwordInputIcon: require('./Images/password_icon.png'),
  backButtonStyle: DefaultStyles.backButton,
  backButtonTextStyle: DefaultStyles.backButtonText,
  baseButtonStyle: DefaultStyles.baseButton,
  baseButtonTextStyle: DefaultStyles.baseButtonText,
  fieldsetWrapperStyle: DefaultStyles.fieldsetWrapper,
  inputIconStyle: DefaultStyles.inputIcon,
  inputStyle: DefaultStyles.input,
  inputWrapperStyle: DefaultStyles.inputWrapper,
  loginFormWrapperStyle: DefaultStyles.formWrappper,
  loginResetPasswordLinkStyle: DefaultStyles.loginResetPasswordLink,
  loginResetPasswordLinkTextStyle: DefaultStyles.loginResetPasswordLinkText,
  logoStyle: DefaultStyles.logo,
  resetPasswordFormSubmitButtonStyle: DefaultStyles.resetPasswordFormSubmitButton,
  resetPasswordFormWrapperStyle: DefaultStyles.formWrappper
}

export default Login
