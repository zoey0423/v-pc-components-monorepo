import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import { Button } from './Button'

test('click works', () => {
  const fn = vi.fn()
  render(<Button onClick={fn}>OK</Button>)
  fireEvent.click(screen.getByText('OK'))
  expect(fn).toHaveBeenCalled()
})
