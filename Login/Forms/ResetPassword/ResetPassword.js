import React from 'react'
import { View, Button } from 'react-native'

import BaseForm from '../BaseForm'
import { Input } from '../../Structure'

class ResetPassword extends BaseForm {
  resetPassword = () => {
    this.props.onResetPassword(this.state.userIdentification)
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

        <Button
          onPress={this.resetPassword}
          style={this.props.buttonStyle}
          title={this.props.labels.forgotPasswordFormButton}
        />

      </View>
    )
  }
}

export default ResetPassword
