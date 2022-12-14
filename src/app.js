const express = require("express");

const routes = require("./routes");
const handleError = require("./middlewares/handleError.js");

const app = express();

app.use(express.json());

app.use(routes);

app.use(handleError);

module.exports = app;