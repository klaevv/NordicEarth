import { NAVIGATE } from '../constants/actionTypes'

const initialState = {
  currentRoute: 'home'
}

const navigationReducer = (state = initialState, action) => {
  switch (action.type) {
    case NAVIGATE:
      return {
        currentRoute: action.nextRoute
      }
    default:
      return state
  }
}

export default navigationReducer
