import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ErrorIcon from '@carbon/icons-react/lib/error/32'

class IconErrorBoundary extends Component {
  constructor (props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError () {
    return { hasError: true }
  }

  render () {
    if (this.state.hasError) {
      return <ErrorIcon />
    }

    return this.props.children
  }
}

IconErrorBoundary.propTypes = {
  children: PropTypes.node.isRequired
}

export default IconErrorBoundary
