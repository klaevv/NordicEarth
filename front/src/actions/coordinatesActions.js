import { GET_COORDINATES_SUCCESS } from '../constants/actionTypes'

export const getCoordinatesSuccessAction = (coordinates) => ({
  type: GET_COORDINATES_SUCCESS,
  coordinates
})
