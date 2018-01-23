import React from 'react'
import PropTypes from 'prop-types'
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
  style: PropTypes.any,
  image: PropTypes.any
}

export default Logo
