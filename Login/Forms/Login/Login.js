import React from 'react'
import { View, Button } from 'react-native'

import BaseForm from '../BaseForm'
import { Input } from '../../Structure'

class Login extends BaseForm {
  login = () => {
    this.props.onLogin(this.state.userIdentification, this.state.password)
  }

  renderResetPasswordButton = () => {
    return (
      <Button
        onPress={this.props.onResetPasswordClick}
        style={this.props.goToResetPasswordButtonStyle}
        title={this.props.labels.forgotPassword}
      />
    )
  }

  render () {
    return (
      <View style={this.props.style}>
        { this.renderLogo() }

        <Input
          onChangeText={this.handleInputChange('userIdentification')}
          type='text'
          label={this.props.labels.userIdentification}
          style={this.props.inputStyle}
        />

        <Input
          onChangeText={this.handleInputChange('password')}
          type='password'
          label={this.props.labels.password}
          style={this.props.inputStyle}
        />

        {
          this.props.haveResetPassword ? this.renderResetPasswordButton() : null
        }

        <Button
          onPress={this.login}
          style={this.props.buttonStyle}
          title={this.props.labels.loginFormButton}
        />

      </View>
    )
  }
}

export default Login
