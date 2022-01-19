const express = require("express");
const morgan = require("morgan");
require("./db.js");

const {
  index,
  videogames,
  genres,
  platforms,
  videogame,
} = require("./routes/index.js");

const server = express();
server.name = "API";

server.use(morgan("dev"));
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
server.use("/videogame", videogame);
server.use("/videogames", videogames);
server.use("/genres", genres);
server.use("/platforms", platforms);

module.exports = server;
