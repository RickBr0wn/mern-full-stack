import React from 'react'

import { Line } from 'react-chartjs-2'

class Last24Hours extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [],
      error: null,
      isLoaded: false
    }
  }

  minTwoDigits = number => (number < 10 ? "0" : "") + number

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
      const requiredArray = []

      for(let i = 0; i < (60 * 24); i += 60) {
        tempArray.push(temps[i])

        const timeObj = new Date(times[i])
        let hours = timeObj.getHours()
        let minutes = timeObj.getMinutes()
        let seconds = timeObj.getSeconds()
        const theTime = `${hours}:${this.minTwoDigits(minutes)}`
        timeArray.push(theTime)
        requiredArray.push(24.00)
      }

      const dataObj = {
        labels: timeArray.reverse(),
        datasets: [{
          label: "Actual Temperature",
          borderColor: 'rgb(255, 99, 132)',
          data: tempArray.reverse()
        },{
          label: "Required Temperature",
          borderColor: 'rgb(12, 56, 132)',
          data: requiredArray
        }]
      }

      const options = {
        maintainAspectRatio: false, 
        elements: { point: { radius: 2 } },
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true,
              min: 10,
              max: 40
            }
          }]
        }
      }

      return (
        <div className="last-1">
          <h1>Last 24 Hours</h1>
          <Line data={dataObj}
                options={options} />
        </div>
      )
    }else{
      return (
        <h1>Loading Data from API</h1>
      )
    }
  }
}

export default Last24Hours