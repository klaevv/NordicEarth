import { GET_COORDINATES_SUCCESS } from '../constants/actionTypes'

const initialState = {
  coordinates: [],
  isLoading: true
}

const coordinatesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_COORDINATES_SUCCESS:
      return {
        coordinates: action.coordinates,
        isLoading: false
      }
    default:
      return state
  }
}

export default coordinatesReducer
