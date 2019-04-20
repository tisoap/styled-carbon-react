import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'

const StyledButton = styled.button`
  color: green;
  font-weight: ${({ primary }) => primary ? 'bold' : 'normal'};
`

const Button = ({ children, ...props }) => (
  <StyledButton {...props}>
    {children}
  </StyledButton>
)

Button.propTypes = {
  /** A child node is required for this component */
  children: PropTypes.node.isRequired,
  /** Controls if the button is bold or not */
  primary: PropTypes.bool
}

Button.defaultProps = {
  primary: false
}

export default Button
