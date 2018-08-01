const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Create the Schema
const DataSchema = new Schema({
  temp: {
    type: Number,
    required: true
  },
  time: {
    type: Date,
    default: Date.now
  }
})

module.exports = Data = mongoose.model('data', DataSchema)