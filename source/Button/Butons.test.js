import React from 'react'
import { render } from 'react-testing-library'
import Button from './Button'

test('renders a button', () => {
  const text = 'Click Me'
  const { getByText } = render(<Button>{text}</Button>)
  expect(getByText(text)).toBeInTheDocument()
})
