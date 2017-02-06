import React from 'react'
import { View } from 'react-native'

import BaseForm from '../BaseForm'
import { Input, Button } from '../../Structure'

class Login extends BaseForm {
  submit = () => {
    this.props.onLogin(this.state.userIdentification, this.state.password)
  }

  renderResetPasswordLink = () => {
    return (
      <Button
        onPress={this.props.onResetPasswordClick}
        style={this.props.loginResetPasswordLinkStyle}
        textStyle={this.props.loginResetPasswordLinkTextStyle}
        text={this.props.labels.forgotPassword}
      />
    )
  }

  render () {
    return (
      <View style={this.props.loginFormWrapperStyle}>
        { this.renderLogo() }

        <View style={this.props.fieldsetWrapperStyle}>
          <Input
            icon={this.props.userIdentificationInputIcon}
            iconStyle={this.props.inputIconStyle}
            onChangeText={this.handleInputChange('userIdentification')}
            label={this.props.labels.userIdentification}
            wrapperStyle={this.props.inputWrapperStyle}
            style={this.props.inputStyle}
            placeholderTextColor={this.props.inputPlaceholderTextColor}
          />

          <Input
            icon={this.props.passwordInputIcon}
            iconStyle={this.props.inputIconStyle}
            onChangeText={this.handleInputChange('password')}
            secureTextEntry
            label={this.props.labels.password}
            wrapperStyle={this.props.inputWrapperStyle}
            style={this.props.inputStyle}
            placeholderTextColor={this.props.inputPlaceholderTextColor}
          />
        </View>

        {
          this.props.haveResetPassword ? this.renderResetPasswordLink() : null
        }

        <Button
          onPress={this.submit}
          style={[
            this.props.baseButtonStyle,
            this.props.loginFormSubmitButtonStyle
          ]}
          textStyle={[
            this.props.baseButtonTextStyle,
            this.props.loginFormSubmitButtonTextStyle
          ]}
          text={this.props.labels.loginFormButton}
        />

      </View>
    )
  }
}

export default Login
