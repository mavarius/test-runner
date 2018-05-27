import TestSetRecord from '../records/TestSetRecord'
import TestRecord from '../records/TestRecord'

import testSetData from '../testSetData'
import * as actions from '../actions'

export default function testReducer (state = new TestSetRecord(), action) {
  switch (action.type) {
    case actions.INIT_TESTS:
      return state.merge({'testSet': testSetData.map((data, i) => new TestRecord({ ...data, id:`${i+1}` }))})
    case actions.SET_PENDING:
      return state.mergeIn(['testSet', action.testIndex], { result: 'in progress...' })
    case actions.SET_RESULT:
      return state.mergeIn(['testSet', action.testIndex], { result: action.result ? 'PASS' : 'FAIL' })
    default:
      return state
  }
}
