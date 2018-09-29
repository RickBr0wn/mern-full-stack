import React from 'react'
import Gauge from 'react-svg-gauge'

class Dial1 extends React.Component{
  state = {
    value: 21
  }

  render() {
    return (
      <div className="dial-containers">
        <Gauge value={this.state.value} width={200} height={160} label="Temp Low Today" />
        <div className="dial-containers">
          <Gauge value={this.state.value} width={200} height={160} label="Temp High Today" />
        </div>
      </div>
    )
  }
} 

export default Dial1