import React from 'react'
import { render } from 'react-testing-library'
import Container from './Container'

test('renders a button', () => {
  const text = 'Test'
  const { getByText } = render(<Container>{text}</Container>)
  expect(getByText(text)).toBeInTheDocument()
})
