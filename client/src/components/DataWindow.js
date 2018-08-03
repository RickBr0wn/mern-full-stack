import React from 'react'

import { Line } from 'react-chartjs-2'

class DataWindow extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [],
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
  
  render(){
    if(this.state.isLoaded) {
      const { data } = this.state
      const temps = data.map(item => item.temp)
      const times = data.map(item => item.time)
      const ids = data.map(item => item._id)
      const tempArray = []
      const timeArray = []

      for(let i = (times.length - 150); i < times.length; i++) {
        tempArray.push(temps[i])

        const timeObj = new Date(times[i])
        let hours = timeObj.getHours()
        let minutes = timeObj.getMinutes()
        let seconds = timeObj.getSeconds()
        const theTime = `${hours}:${minutes}:${seconds}`
        timeArray.push(theTime)

      }

      const dataObj = {
        labels: timeArray,
        datasets: [{
        label: "Temperature",
        borderColor: 'rgb(255, 99, 132)',
        data: tempArray,
        }]
      }

      return (
        <div>
          <h1>Data Window</h1>
          <Line data={dataObj}
                options={{maintainAspectRatio: false}}
                height={300}
                width={800} />
        </div>
      )
    }else{
      return (
        <h1>Loading Data from API</h1>
      )
    }
  }
}

export default DataWindow