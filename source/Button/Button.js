import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'

const StyledButton = styled.button`
  color: green;
  font-weight: ${({ primary }) => primary ? 'bold' : 'normal'};
`

const Button = ({ children, primary }) => (
  <StyledButton primary={primary}>
    {children}
  </StyledButton>
)

Button.propTypes = {
  children: PropTypes.node.isRequired,
  primary: PropTypes.bool
}

Button.defaultProps = {
  primary: false
}

export default Button
