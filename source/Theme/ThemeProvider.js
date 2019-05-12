import React from 'react'
import PropTypes from 'prop-types'
import { ThemeProvider as EmotionTheming } from 'emotion-theming'
import merge from 'lodash.merge'
import DefaultTheme from './DefaultTheme'
import Container from '../Container'

const ThemeProvider = ({ theme, children, ...props }) => {
  const userTheme = merge(DefaultTheme, theme)
  return (
    <EmotionTheming theme={userTheme}>
      <Container {...props}>
        {children}
      </Container>
    </EmotionTheming>
  )
}

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
  theme: PropTypes.object
}

ThemeProvider.defaultProps = {
  theme: {}
}

export default ThemeProvider
