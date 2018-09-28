import React from 'react'
import logo from '../logo.svg'

const Header = () => (
  <header className="header">
    <img src={logo} className="logo" alt="logo" />
    <h1 className="App-title">DS18b20 Temperature Data</h1>
  </header>
)

export default Header