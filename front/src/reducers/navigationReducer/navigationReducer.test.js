import deepFreeze from 'deep-freeze'
import navigationReducer from './navigationReducer'

import { NAVIGATE } from '../../constants/actionTypes'
import { HOME, MAPS } from '../../constants/routeNames'

describe('navigationReducer', () => {
  const initialState = {
    currentRoute: HOME,
    previousRoute: null
  }

  test('has correct initial state', () => {
    const action = {
      type: 'MOCK_ACTION'
    }
    const newState = navigationReducer(undefined, action)
    expect(newState).toEqual(initialState)
  })

  test('saves routes', () => {
    const action = {
      type: NAVIGATE,
      nextRoute: MAPS,
      previousRoute: HOME
    }
    const state = initialState
    deepFreeze(state)
    const newState = navigationReducer(state, action)
    expect(newState).toEqual({
      currentRoute: MAPS,
      previousRoute: HOME
    })
  })
})
