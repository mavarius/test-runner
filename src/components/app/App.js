import React, { Component } from 'react'

import testContainer from '../../containers/testContainer'
import TestTable from '../test-table/TestTable'

import './App.css'

class App extends Component {
  componentDidMount() {
    this.props.initTests()
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Test Runner</h1>
        </header>
        <TestTable />
      </div>
    )
  }
}

export default testContainer(App)
