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

Logo.propTypes = {
  style: React.PropTypes.any,
  image: React.PropTypes.any
}

export default Logo
