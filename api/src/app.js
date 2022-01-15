const express = require("express");

const { index, videogames, genres } = require("./routes/index.js");

const server = express();
server.name = "API";

server.use(express.json());
server.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header("Access-Control-Allow-Credentials", "true");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});

server.use("/", index);
server.use("/videogames", videogames);
server.use("/genres", genres);

module.exports = server;
