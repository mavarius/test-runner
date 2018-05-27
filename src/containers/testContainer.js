import { connect } from 'react-redux'
import { initTests, runTest, runAllTests } from '../lib/actions'

const mapStateToProps = (state, props) => ({
  allTests: state.testReducer.testSet
})

const mapDispatchToProps = (dispatch, props) => ({
  initTests: () => dispatch(initTests()),
  runTest: testIndex => dispatch(runTest(testIndex)),
  runAllTests: () => dispatch(runAllTests())
})

const testContainer = component => {
  return connect(mapStateToProps, mapDispatchToProps)(component)
}

export default testContainer