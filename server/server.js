require('dotenv').config()
const path = require('path')
const express = require('express')
const products = require('./routes/products')
const server = express()
const cors = require("cors");
const jwt = require("express-jwt");
const jwksRsa = require("jwks-rsa");
var pg = require('pg');

// Accept cross-origin requests from the frontend app
server.use(cors());
server.use(express.json())


server.use(express.static(path.resolve('public')))
server.use(products)
server.use('/api/v1/auth', require('./routes/auth'))


module.exports = server
