import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import rootReducer from './reducers'

function configureStore (initialState?: object) {
  return createStore(rootReducer, initialState!, compose(applyMiddleware(createSagaMiddleware())))
}

export default configureStore
