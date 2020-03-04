import { NAVIGATE } from '../constants/actionTypes'

export const navigateAction = (nextRoute, previousRoute) => ({
  type: NAVIGATE,
  nextRoute,
  previousRoute
})
