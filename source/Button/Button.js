import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import { css } from '@emotion/core'
import baseStyle from './Button.style'

const dynamicStyle = props => css`
  margin: ${props.margin};
`

const StyledButton = styled.button`
  ${baseStyle};
  ${dynamicStyle};
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
  margin: PropTypes.string,
  children: PropTypes.node.isRequired
}

Button.defaultProps = {
  margin: '0'
}

export default Button
