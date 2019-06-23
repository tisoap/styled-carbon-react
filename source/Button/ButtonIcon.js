import React from 'react'
import styled from '@emotion/styled'
import PropTypes from 'prop-types'
import Icon from '../Icon'

const StyledButtonIcon = styled(Icon)`
  position: ${props => props.iconOnly ? 'static' : 'absolute'};
  flex-shrink: 0;
  height: 16px;
  right: 16px;
  transition: all 70ms cubic-bezier(0,0,.38,.9);
  width: 16px;
`

const ButtonIcon = (props) => {
  return (
    <StyledButtonIcon
      width={16}
      height={16}
      viewBox='0 0 16 16'
      aria-hidden
      fill='#fff'
      size='16'
      name='add'
      {...props}
    />
  )
}

ButtonIcon.propTypes = {
  iconOnly: PropTypes.bool
}

ButtonIcon.defaultProps = {
  iconOnly: false
}

export default ButtonIcon
