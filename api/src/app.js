const express = require("express");

const routes = require("./routes/index.js");

const server = express();
server.name = "API";

server.use("/", routes);

module.exports = server;
