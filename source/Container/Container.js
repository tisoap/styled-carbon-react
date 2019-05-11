import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import baseStyle from './Container.style'
import { space } from 'styled-system'

const StyledContainer = styled.div`
  ${baseStyle}
  ${space}
`

const Container = ({ children, ...props }) => {
  if (!children) return null

  return (
    <StyledContainer {...props}>
      {children}
    </StyledContainer>
  )
}

Container.propTypes = {
  ...space.propTypes,
  children: PropTypes.node.isRequired
}

export default Container
