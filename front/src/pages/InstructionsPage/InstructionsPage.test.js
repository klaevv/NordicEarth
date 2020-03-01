/* eslint-disable no-undef */

import React from 'react'
import { render, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { BrowserRouter as Router } from 'react-router-dom'

import InstructionsPage from './InstructionsPage'

afterEach(cleanup)

test('renders title', () => {
  const component = render(
    <Router>
      <InstructionsPage />
    </Router>
  )
  expect(component.container).toHaveTextContent(
    'Do it yourself'
  )
})

test('renders list item', () => {
  const component = render(
    <Router>
      <InstructionsPage />
    </Router>
  )
  expect(component.container).toHaveTextContent(
    'Use gdalinfo to extract information about files, and to see whether GDAL can understand the file.'
  )
})
