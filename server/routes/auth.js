const router = require('express').Router()
const checkJwt = require('../config/auth01')
var requestbad = require('request')

// Define an endpoint that must be called with an access token
// GET - /api/v1/auth/external

router.get('/external', (req, res) => {
  console.log('recieved get request from api')

  var options = {
    method: 'POST',
    url: 'https://dev-p2szhd1r.au.auth0.com/oauth/token',
    headers: { 'content-type': 'application/x-www-form-urlencoded' },
    form: {
      grant_type: 'client_credentials',
      client_id: '3TTcRC9VlJoczRbNzZ3syxFn6jR35FOy',
      client_secret: 'gmfxXWKnpCXL2OcoCNGkJHw8TFvwBH4AT5rz4KjLRjd7MfZwW4-F5LRYcOMBhAD0',
      audience: 'https://dev-p2szhd1r.au.auth0.com/api/v2/'
    }
  }

  requestbad(options, function (error, response, body) {
    if (error) throw new Error(error)
    console.log(body)

    res.json(JSON.parse(body))
  })
})

// router.get()
// var request = require("request");

// var options = {
//     method: 'POST',
//     url: process.env.URL,
//     headers: { 'content-type': 'application/json' },
//     body: `'{"client_id":${process.env.CLIENT_ID},"client_secret":${process.env.CLIENT_SECRET},"audience":${process.env.AUDIENCE},"grant_type":${process.env.GRANT_TYPE}}`
// };

// request(options, function (error, response, body) {
//     if (error) throw new Error(error);

//     console.log(body);
// });

module.exports = router
