const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')

const server = express()

const routes = require('./src/routes/index')


//middleware
server.use('/', express.static(path.join(__dirname, 'public')))
server.use(bodyParser.urlencoded({ extended: true }))

//routes
server.use('/', routes)

server.listen(process.env.PORT || 3000)
