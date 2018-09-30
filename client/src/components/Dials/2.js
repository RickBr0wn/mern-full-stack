import React from 'react'
import Gauge from 'react-svg-gauge'

class Dial2 extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      value: 24,
      error: null,
      isLoaded: false
    }
  }

  fetchAPI = () => {
    fetch('/api/items', { mode: 'no-cors' })
      .then(result => result.json())
      .then(response => 
        this.setState({
          isLoaded: true,
          data: response
        }),
      error => 
        this.setState({
          isLoaded: true,
          error
        })
    )
  }

  componentDidMount() {
    this.fetchAPI()
  }

  render() {
    if(this.state.isLoaded) {
      const {data} = this.state
      return (
        <div className="dial-containers">
          <Gauge value={data[0].temp} width={400} height={320} style={{fontSize:"5rem", color:"blue"}} label="Current Temp" />
        </div>
      )
    } else {
      return null
    }
  }
} 

export default Dial2