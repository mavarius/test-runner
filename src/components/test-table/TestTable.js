import React from 'react'

import testContainer from '../../containers/testContainer'
import TestResults from '../test-results/TestResults'
import Tally from '../tally/Tally'
import Button from '../button/Button'

import './TestTable.css'

export const TestTable = ({ allTests, runAllTests, runTest }) => {
  return (
    <table className="test-table">
      <thead>
        <tr>
          <th>DESCRIPTION</th>
          <th>STATUS</th>
          <th>RUN</th>
        </tr>
      </thead>
      <tbody>
        {allTests.map((test, i) => (
          <TestResults testIndex={i} testDescription={test.get('description')} testResult={test.get('result')} onClick={runTest.bind(this, i)} key={`test_${i}`} />
        ))}
        <tr>
          <td/>
          <td><Tally passingTests={allTests.filter(test => test.result === 'PASS').size} totalTests={allTests.size} /></td>
          <td><Button label="RUN ALL" onClick={runAllTests} /></td>
        </tr>
      </tbody>
    </table>
  )
}

export default testContainer(TestTable)
