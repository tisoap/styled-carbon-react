import React from 'react'
import PropTypes from 'prop-types'
import loadable from '@loadable/component'
import LoadingIcon from '@carbon/icons-react/es/time/32'
import IconErrorBoundary from './IconErrorBoundary'

const loadFn = ({ name, size }) => import(`@carbon/icons-react/es/${name}/${size}`)
const options = { fallback: <LoadingIcon /> }
const AsyncIcon = loadable(loadFn, options)

const Icon = ({ name, size, ...props }) => {
  if (!name || !size) return null
  if (size === 'glyph') {
    size = 'index'
  }

  return (
    <IconErrorBoundary>
      <AsyncIcon name={name} size={size} {...props} />
    </IconErrorBoundary>
  )
}

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  size: PropTypes.oneOf(['16', '20', '24', '32', 'glyph']).isRequired
}

export default Icon
