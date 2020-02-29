import { GET_COORDINATES_SUCCESS } from '../constants/actionTypes'

const initialState = {
  coordinates: []
}

const coordinatesReducer = (state = initialState, action) => {
  console.log(action)
  switch (action.type) {
    case GET_COORDINATES_SUCCESS:
      return {
        coordinates: action.coordinates
      }
    default:
      return state
  }
  return state
}

export default coordinatesReducer
