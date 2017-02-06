import React from 'react'
import { Image } from 'react-native'

const Logo = (props) => {
  return (
    <Image
      resizeMode='contain'
      source={props.image}
      style={props.style}
    />
  )
}

export default Logo
