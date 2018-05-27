import { take, takeEvery, put, call, select } from 'redux-saga/effects'

import { getTests, getAllTests } from './selectors'

import * as actions from '../actions'

export const runSelectedTest = function *(action) {
  yield put(actions.setPending(action.testIndex))
  const testToRun = yield select(getTests, action.testIndex)
  const results = yield call(testToRun.get('run'))
  yield put(actions.setResult(action.testIndex, results))
}

export const watchRunTest = function *() {
  yield takeEvery(actions.RUN_TEST, runSelectedTest)
}

export const watchRunAllTests = function *() {
  while (true) {
    yield take(actions.RUN_ALL_TESTS)
    const allTests = yield select(getAllTests)

    for (let i = 0; i < allTests.size; ++i) {
      yield put(actions.runTest(i))
    }
  }
}