import React from 'react'
import { TextInput } from 'react-native'

const Input = (props) => {
  return (
    <TextInput {...props} style={{height: 40, width: 200}} />
  )
}

export default Input
