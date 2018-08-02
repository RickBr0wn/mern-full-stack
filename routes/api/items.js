const express = require('express')
const router = express.Router()

// Item model
const Item = require('../../models/Item')

// @route   GET api/items
// @desc    Get All Items
// @access  Public
router.get('/', (req, res) => {
  Item.find()
    .sort({date: -1})
    .then(items => res.json(items))
    .catch(err => console.log('There has been an error with the GET request', err))
})

// @route   POST api/items
// @desc    Create a post
// @access  Public
router.post('/', (req, res) => {
    const newItem = new Item({
      temp: req.body.temp
    })
    newItem.save()
      .then(item => res.json(item))
      .catch(err => console.log('There has been an error with the POST request', err))
})

module.exports = router