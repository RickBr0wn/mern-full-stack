import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'

import DataWindow from './components/DataWindow'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">DS18b20 Temperature Data</h1>
        </header>
        <DataWindow />
      </div>
    )
  }
}

export default App