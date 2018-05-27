import { all } from 'redux-saga/effects'

import { watchRunTest, watchRunAllTests } from './testSagas'

// ROOT SAGA
const rootSaga = function *() {
  yield all([
    watchRunTest(),
    watchRunAllTests()
  ])
}

export default rootSaga