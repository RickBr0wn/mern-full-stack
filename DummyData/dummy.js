const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

const items = require('../routes/api/items')

const app = express()

// Middleware for body-parser
app.use(bodyParser.json())

// Database config info
const db = require('../config/keys').mongoURL

// Connect to mongoose
mongoose.connect(db)
  .then(() => console.log('MongoDB Connected..'))
  .catch(err => console.log('Error connecting to mongoDB: ', err))

const newItem = {
  temp: Math.random()*28,
  time: Date.now()
}



const port = process.env.PORT || 3000

app.listen(port, () => console.log(`Server started on ${port}`))