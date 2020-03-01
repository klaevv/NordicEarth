/* eslint-disable no-undef */

import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, cleanup } from '@testing-library/react'
import { BrowserRouter as Router } from 'react-router-dom'

import HomePage from './HomePage'

afterEach(cleanup)

test('renders title', () => {
  const component = render(
    <Router>
      <HomePage />
    </Router>
  )
  expect(component.container).toHaveTextContent(
    'Experience the magic of Nordic Earth'
  )
})

test('renders list item', () => {
  const component = render(
    <Router>
      <HomePage />
    </Router>
  )
  expect(component.container).toHaveTextContent(
    'You can also make cool CGI panoramic content for your videos or articles.'
  )
})
