/* eslint-disable no-undef */

import React from 'react'
import { render, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { BrowserRouter as Router } from 'react-router-dom'

import KeyCommandsPage from './KeyCommandsPage'

afterEach(cleanup)

test('renders title', () => {
  const component = render(
    <Router>
      <KeyCommandsPage />
    </Router>
  )
  expect(component.container).toHaveTextContent(
    'Key commands for the map'
  )
})

test('renders list item', () => {
  const component = render(
    <Router>
      <KeyCommandsPage />
    </Router>
  )
  expect(component.container).toHaveTextContent(
    'z rotates the camera left'
  )
})
