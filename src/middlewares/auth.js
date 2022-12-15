const { expressjwt: jwt } = require("express-jwt")
require('dotenv').config()

module.exports = jwt({
    secret: process.env.SECRET_KEY,
    algorithms: ["HS256"]
})