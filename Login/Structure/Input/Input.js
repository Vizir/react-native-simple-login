import React from 'react'
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
  icon: React.PropTypes.any,
  iconStyle: React.PropTypes.any,
  label: React.PropTypes.string,
  wrapperStyle: React.PropTypes.any
}

export default Input
