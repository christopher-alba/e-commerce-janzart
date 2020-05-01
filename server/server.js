require('dotenv').config()
const path = require('path')
const express = require('express')
const products = require('./routes/products')
const server = express()
const cors = require('cors')
const jwt = require('express-jwt')
const jwksRsa = require('jwks-rsa')
var pg = require('pg')
const { auth } = require('express-openid-connect')

const config = {
  required: false,
  auth0Logout: true,
  appSession: {
    secret: 'a long, randomly-generated string stored in env'
  },
  baseURL: 'https://janzart.herokuapp.com',
  clientID: 'KCH4PtB5clG7BrkK48hetg6teztFGGmo',
  issuerBaseURL: 'https://dev-p2szhd1r.au.auth0.com'
}

// auth router attaches /login, /logout, and /callback routes to the baseURL
server.use(auth(config))

// Accept cross-origin requests from the frontend app
server.use(cors())
server.use(express.json())

server.use(express.static(path.resolve('public')))
server.use(products)
server.use('/api/v1/auth', require('./routes/auth'))
module.exports = server
