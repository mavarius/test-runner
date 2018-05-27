import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import createSagaMiddleware from 'redux-saga'

import reducer from './reducers'
import rootSaga from './sagas'

const sagaMiddleware = createSagaMiddleware()

let middleware = [
  sagaMiddleware
]

const store = createStore(reducer, composeWithDevTools(
  applyMiddleware(...middleware)
))

sagaMiddleware.run(rootSaga)

export default store