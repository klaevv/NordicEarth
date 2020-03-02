import { NAVIGATE } from '../constants/actionTypes'

export const navigateAction = (nextRoute) => ({
  type: NAVIGATE,
  nextRoute
})
