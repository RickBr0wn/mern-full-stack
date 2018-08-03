import React from 'react'

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
      const {data} = this.state
      console.log(data)
      return (
        <div>
          <h1>Data Window</h1>
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