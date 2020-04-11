const path = require('path')
const express = require('express')

const server = express()

server.use(express.json())


server.use(express.static(path.resolve('public')))

module.exports = server
