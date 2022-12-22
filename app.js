const express = require('express')

const {Server: HttpServer} = require('http')
const {Server:IoServer} = require('socket.io')

const _ = require('lodash')

const indexRouter = require('./src/routes/index')

const errorHandler = require('./src/middlewares/errorHandler')
require('dotenv').config()

const app = express()

const http = new HttpServer(app)
const io = new IoServer(http)

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static(__dirname + '/public'))

app.use('/',indexRouter)

app.use(errorHandler)

module.exports = http