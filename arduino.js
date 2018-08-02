// Global Variables
const http = require('http')
const express = require('express')
const five = require('johnny-five')
const fetch = require('node-fetch')

// Create the arduino board instance
const board = new five.Board()

// Create the app instance
const app = new express()

// POST data helper function
const helper = data => {
  fetch('http://localhost:5000/routes/api/', 
    {
      method: 'post',
      body: JSON.stringify(data)
    })
    .then(res => res.json())
    .catch(err => console.log('There has ben an error during POST: ', err))
}

// Arduino Board activation
board.on('ready', () => {
    console.log('Arduino successfully connected')

  // Create a thermometer instance
  let thermometer = new five.Thermometer({
    controller: "DS18B20",
    pin: 24
  })

  thermometer.on('change', function(){
    console.log(this.celsius)
  })
})

// Set the port number
const port = process.env.PORT || 3000

// Begin 'listening' on the pre defined port number (3000)
const server = http.createServer(app).listen(port, (req, res) => console.log('Listening on port: ' + port))