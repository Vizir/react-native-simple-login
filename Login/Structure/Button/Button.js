import React from 'react'
import { Text, TouchableOpacity } from 'react-native'

const Button = (props) => {
  return (
    <TouchableOpacity onPress={props.onPress} style={props.style}>
      <Text style={props.textStyle}>
        {props.text}
      </Text>
    </TouchableOpacity>
  )
}

Button.propTypes = {
  onPress: React.PropTypes.func,
  style: React.PropTypes.any,
  text: React.PropTypes.string,
  textStyle: React.PropTypes.any
}

export default Button
