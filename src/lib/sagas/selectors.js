export const getTests = (state, index) => state.testReducer.testSet.get(`${index}`)
export const getAllTests = (state) => state.testReducer.testSet