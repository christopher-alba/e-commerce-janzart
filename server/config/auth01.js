const jwt = require("express-jwt");
const jwksRsa = require("jwks-rsa");

// Set up Auth0 configuration
const authConfig = {
    domain: "dev-p2szhd1r.au.auth0.com",
    audience: "https://dev-p2szhd1r.au.auth0.com/api/v2/"
};

// using JWKS from YOUR_DOMAIN
const checkJwt = jwt({
    secret: jwksRsa.expressJwtSecret({
        cache: true,
        rateLimit: true,
        jwksRequestsPerMinute: 5,
        jwksUri: `https://${authConfig.domain}/.well-known/jwks.json`
    }),

    audience: authConfig.audience,
    issuer: `https://${authConfig.domain}/`,
    algorithms: ["RS256"]
});

module.exports = checkJwt