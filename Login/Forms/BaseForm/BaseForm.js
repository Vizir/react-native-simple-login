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
    return <Logo style={this.props.logoStyle} />
  }
}

export default BaseForm
