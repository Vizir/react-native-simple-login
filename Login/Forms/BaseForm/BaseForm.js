import React, { Component } from 'react'

import { Logo } from '../../Structure'

class BaseForm extends Component {
  constructor (props) {
    super(props)
    this.state = {
      userIdentification: '',
      password: ''
    }
  }

  handleInputChange = (property) => (value) => {
    this.setState({ [property]: value })
  }

  renderLogo = () => {
    if (this.props.logoImage && this.props.showLogo) {
      return <Logo style={this.props.logoStyle} image={this.props.logoImage} />
    }

    return null
  }
}

BaseForm.propTypes = {
  logoStyle: React.PropTypes.any,
  logoImage: React.PropTypes.any,
  showLogo: React.PropTypes.bool
}

export default BaseForm
