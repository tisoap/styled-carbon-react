import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import { space } from 'styled-system'
import baseStyle from './Button.style'

const StyledButton = styled.button`
  ${baseStyle};
  ${space};
`

const Button = ({ children, ...props }) => {
  if (!children) return null

  return (
    <StyledButton {...props}>
      {children}
    </StyledButton>
  )
}

Button.propTypes = {
  ...space.propTypes,
  children: PropTypes.node.isRequired
}

export default Button
