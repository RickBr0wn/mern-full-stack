import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header'
import Content from './Components/Content'

class App extends Component {
  constructor() {
    super()
    this.state = {
      isLoaded: false,
      data: [],
      error: null
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
    return (
      <div className="App">
        <Header />
        {
          this.state.isLoaded ? <Content dataProp={this.state} /> : <h1>Loading API Data..</h1>
        }
      </div>
    );
  }
}

export default App;
