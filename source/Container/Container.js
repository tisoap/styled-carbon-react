import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import baseStyle from './Container.style'

const StyledContainer = styled.div`
  ${baseStyle}
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
  children: PropTypes.node.isRequired
}

export default Container
