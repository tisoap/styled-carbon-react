import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import { space } from 'styled-system'
import baseStyle from './Button.style'
import ButtonIcon from './ButtonIcon'

const StyledButton = styled.button`
  ${baseStyle};
  ${space};
`

const Button = ({ children, icon, ...props }) => {
  const hasChildren = !!(children)
  const iconOnly = (icon && !hasChildren)
  const empty = (!hasChildren && !icon)

  if (empty) return null

  const buttonIcon = (icon)
    ? <ButtonIcon name={icon} iconOnly={iconOnly} />
    : null

  return (
    <StyledButton icon={icon} iconOnly={iconOnly} {...props}>
      {children}
      {buttonIcon}
    </StyledButton>
  )
}

Button.propTypes = {
  ...space.propTypes,
  icon: PropTypes.string
}

export default Button
