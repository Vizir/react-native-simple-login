import PropTypes from 'prop-types';
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
  onPress: PropTypes.func,
  style: PropTypes.any,
  text: PropTypes.string,
  textStyle: PropTypes.any
}

export default Button
