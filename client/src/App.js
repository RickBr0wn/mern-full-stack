import React, { Component } from 'react'

import Last1Hour from './components/Last1Hour'
import Header from './components/Header'
import SideBar from './components/SideBar'
import Dial1 from './components/Dials/1'
import Dial2 from './components/Dials/2'
import Dial3 from './components/Dials/3'

class App extends Component {
  render() {
    return (
      <div className="main-container">
        <Header />
        <SideBar />
        <Dial1 />
        <Dial2 />
        <Dial3 />
        <Last1Hour />
      </div>
    )
  }
}

export default App