require('dotenv').config()
const routes = require('./router/routes')
const express = require("express")
const app = express()
const MONGODB = require('./config/database')
MONGODB()

app.use('/', routes)

module.exports = app