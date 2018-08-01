const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Create the Schema
const ItemSchema = new Schema({
  temp: {
    type: Number,
    required: true
  },
  time: {
    type: Date,
    default: Date.now
  }
})

module.exports = Item = mongoose.model('item', ItemSchema)