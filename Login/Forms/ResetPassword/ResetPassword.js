import React from 'react'
import { View } from 'react-native'

import BaseForm from '../BaseForm'
import { Input, Button } from '../../Structure'

class ResetPassword extends BaseForm {
  submit = () => {
    this.props.onResetPassword(this.state.userIdentification)
  }

  renderHeader = () => {
    if (this.props.resetPasswordHeaderRenderer) {
      return this.props.resetPasswordHeaderRenderer(this.props.onBackClick)
    }

    return (
      <Button
        onPress={this.props.onBackClick}
        style={this.props.backButtonStyle}
        textStyle={this.props.backButtonTextStyle}
        text={this.props.labels.back}
      />
    )
  }

  render () {
    return (
      <View style={this.props.resetPasswordFormWrapperStyle}>
        { this.renderHeader() }

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
        </View>

        <Button
          onPress={this.submit}
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
