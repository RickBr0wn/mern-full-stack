// Global Variables
const http = require('http')
const express = require('express')
const five = require('johnny-five')
const fetch = require('node-fetch')

const delay = ms => new Promise(resolve => setTimeout(resolve, ms))

// Create the arduino board instance
const board = new five.Board()

// Create the app instance
const app = new express()

// POST data helper function
const helper = data => {
  const obj = {
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'POST',
    body: JSON.stringify(data)
  }
  fetch('http://localhost:5000/api/items', obj)
    .then(res => res.json())
    .catch(err => console.log('There has been an error during POST: ', err))
}

const timer = 1000*60

// Arduino Board activation
board.on('ready', () => {
  console.log('Arduino successfully connected')

  // Create a thermometer instance
  const thermometer = new five.Thermometer({
    controller: "DS18B20",
    pin: 2,
    freq: timer
  })

  thermometer.on('data', function(){
    const temp = this.celsius
    const obj = {
      temp: temp.toFixed(1)
    }
    console.log(obj)   
    helper(obj)
  })
})

// Set the port number
const port = process.env.PORT || 3001

// Begin 'listening' on the pre defined port number (3001)
const server = http.createServer(app).listen(port, (req, res) => console.log('Listening on port: ' + port))