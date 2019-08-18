import React from 'react'
import PropTypes from 'prop-types'
import loadable from '@loadable/component'
import LoadingIcon from '@carbon/icons-react/lib/time/32'
import IconErrorBoundary from './IconErrorBoundary'

const loadFn = ({ name, size }) => import(`@carbon/icons-react/lib/${name}/${size}`)
const options = { fallback: <LoadingIcon /> }
const AsyncIcon = loadable(loadFn, options)

const Icon = ({
  'aria-hidden': aria,
  className,
  fill,
  height,
  name,
  size,
  viewBox,
  width
}) => {
  if (!name || !size) return null

  const iconSize = (size === 'glyph')
    ? 'index'
    : size

  return (
    <IconErrorBoundary>
      <AsyncIcon
        aria-hidden={aria}
        className={className}
        fill={fill}
        height={height}
        name={name}
        size={iconSize}
        viewBox={viewBox}
        width={width}
      />
    </IconErrorBoundary>
  )
}

Icon.propTypes = {
  'aria-hidden': PropTypes.bool,
  className: PropTypes.string,
  fill: PropTypes.string,
  height: PropTypes.number,
  name: PropTypes.string.isRequired,
  size: PropTypes.oneOf(['16', '20', '24', '32', 'glyph']).isRequired,
  viewBox: PropTypes.string,
  width: PropTypes.number
}

export default Icon
