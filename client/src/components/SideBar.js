import React from 'react'
import logo from '../logo.svg'

class SideBar extends React.Component {
  render() {
    return(
      <div className="side-bar">
        {/* <img src={logo} className="logo" alt="logo" /> */}
        <div className="menu-title">DS18b20 Temperature Data</div>
        <div className="menu-items">
          <div className="menu-item">Live Data</div>
          <div className="menu-item">Historic Data</div>
          <div className="menu-item">Live Stream</div>
          <div className="menu-item">Options</div>
          <div className="menu-item">GitHub</div>
        </div>
      </div>
    )
  }
}

export default SideBar