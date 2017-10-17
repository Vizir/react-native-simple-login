import React from 'react'
import PropTypes from 'prop-types'
import { View, TextInput, Image } from 'react-native'

const Input = (props) => {
  const renderIcon = () => {
    return <Image source={props.icon} style={props.iconStyle} />
  }

  return (
    <View style={props.wrapperStyle}>
      {props.icon ? renderIcon() : null}

      <TextInput
        {...props}
        placeholder={props.label}
        underlineColorAndroid='transparent'
      />
    </View>
  )
}

Input.propTypes = {
  icon: PropTypes.any,
  iconStyle: PropTypes.any,
  label: PropTypes.string,
  wrapperStyle: PropTypes.any
}

export default Input
