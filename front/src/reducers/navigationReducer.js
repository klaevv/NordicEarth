import { NAVIGATE } from '../constants/actionTypes'
import { HOME } from '../constants/routeNames'

const initialState = {
  currentRoute: HOME,
  previousRoute: null
}

const navigationReducer = (state = initialState, action) => {
  switch (action.type) {
    case NAVIGATE:
      return {
        currentRoute: action.nextRoute,
        previousRoute: action.previousRoute
      }
    default:
      return state
  }
}

export default navigationReducer
