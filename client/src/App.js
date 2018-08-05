import React, { Component } from 'react'

import DataWindow from './components/DataWindow'
import Header from './components/Header'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <SideBar />
        <DataWindow />
      </div>
    )
  }
}

export default App