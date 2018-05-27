export const INIT_TESTS = 'INIT_TESTS'
export const RUN_TEST = 'RUN_TEST'
export const RUN_ALL_TESTS = 'RUN_ALL_TESTS'
export const SET_RESULT = 'SET_RESULT'
export const SET_PENDING = 'SET_PENDING'

export const initTests = () => ({
  type: INIT_TESTS
})

export const runTest = testIndex => ({
  type: RUN_TEST,
  testIndex
})

export const runAllTests = () => ({
  type: RUN_ALL_TESTS
})

export const setPending = testIndex => ({
  type: SET_PENDING,
  testIndex
})

export const setResult = (testIndex, result) => ({
  type: SET_RESULT,
    testIndex,
    result
})