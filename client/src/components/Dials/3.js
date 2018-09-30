import React from 'react'
import Gauge from 'react-svg-gauge'

class Dial3 extends React.Component{
  state = {
    value: 29
  }

  render() {
    return (
      <div className="dial-containers">
        <Gauge value={this.state.value} width={200} height={160} label="Humidty Low Today" />
        <div className="dial-containers">
          <Gauge value={this.state.value} width={200} height={160} label="Humidty High Today" />
        </div>
      </div>
    )
  }
} 

export default Dial3