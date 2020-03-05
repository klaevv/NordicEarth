import deepFreeze from 'deep-freeze'
import coordinatesReducer from './coordinatesReducer'
import { GET_COORDINATES_SUCCESS } from '../../constants/actionTypes'

describe('coordinatesReducer', () => {
  const initialState = {
    coordinates: [],
    isLoading: true
  }

  const coordinates = [
    {
      id: 1,
      gps: '62.738868,7.150271',
      locationName: 'Molde'
    },
    {
      id: 2,
      gps: '59.357826,17.785493',
      locationName: 'Stockholm'
    },
    {
      id: 3,
      gps: '55.668677,12.073107',
      locationName: 'Roskilde'
    }
  ]

  test('has correct initial state', () => {
    const action = {
      type: 'MOCK_ACTION'
    }
    const newState = coordinatesReducer(undefined, action)
    expect(newState).toEqual(initialState)
  })

  test('saves coordinates', () => {
    const action = {
      type: GET_COORDINATES_SUCCESS,
      coordinates
    }
    const state = initialState
    deepFreeze(state)
    const newState = coordinatesReducer(state, action)
    expect(newState).toEqual({
      coordinates,
      isLoading: false
    })
  })
})
