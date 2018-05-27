import React, { Component } from 'react'

import Button from '../button/Button'
import './TestResults.css'

export class TestResults extends Component {
  getMessageColor = () => {
    const { testResult } = this.props
    
    switch(testResult) {
      case 'PASS':
        return 'result-pass'
      case 'FAIL':
        return 'result-fail'
      case 'in progress...':
        return 'result-pending'
      default:
        return 'result-default'
    }
  }

  render() {
    const { testDescription, testResult, onClick } = this.props

    return (
      <tr className="test-results">
        <td className="description">{testDescription}</td>
        <td className={this.getMessageColor()}>{testResult}</td>
        <td><Button label="Run this test" onClick={onClick} /></td>
      </tr>
    )
  }
}

export default TestResults
