import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import coordinatesReducer from './reducers/coordinatesReducer/coordinatesReducer'
import navigationReducer from './reducers/navigationReducer/navigationReducer'

const reducer = combineReducers({
  coordinatesState: coordinatesReducer,
  navigationState: navigationReducer
})

const store = createStore(reducer, applyMiddleware(thunk))

export default store
