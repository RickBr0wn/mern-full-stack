const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

const app = express()

// Middleware for body-parser
app.use(bodyParser.json())

