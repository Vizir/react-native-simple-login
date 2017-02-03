import React from 'react'
import { View } from 'react-native'

import BaseForm from '../BaseForm'
import { Input, Button } from '../../Structure'

class ResetPassword extends BaseForm {
  resetPassword = () => {
    this.props.onResetPassword(this.state.userIdentification)
  }

  render () {
    return (
      <View style={this.props.resetPasswordFormWrapperStyle}>
        <Button
          onPress={this.props.onBackClick}
          style={this.props.backButtonStyle}
          textStyle={this.props.backButtonTextStyle}
          text='⬅'
        />

        { this.renderLogo() }

        <View style={this.props.fieldsetWrapperStyle}>
          <Input
            onChangeText={this.handleInputChange('userIdentification')}
            label={this.props.labels.userIdentification}
            wrapperStyle={this.props.inputWrapperStyle}
            style={this.props.inputStyle}
            placeholderTextColor={this.props.inputPlaceholderTextColor}
          />
        </View>

        <Button
          onPress={this.resetPassword}
          style={[
            this.props.baseButtonStyle,
            this.props.resetPasswordFormSubmitButtonStyle
          ]}
          textStyle={[
            this.props.baseButtonTextStyle,
            this.props.resetPasswordFormSubmitButtonTextStyle
          ]}
          text={this.props.labels.forgotPasswordFormButton}
        />

      </View>
    )
  }
}

export default ResetPassword
