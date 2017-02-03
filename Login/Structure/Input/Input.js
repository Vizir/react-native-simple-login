import React from 'react'
import { View, TextInput } from 'react-native'

const Input = (props) => {
  return (
    <View style={props.wrapperStyle}>
      <TextInput
        {...props}
        placeholder={props.label}
        underlineColorAndroid='transparent'
      />
    </View>
  )
}

export default Input
