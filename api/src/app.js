const express = require("express");
const morgan = require("morgan");
const config = require("./config");

const {
  index,
  videogames,
  genres,
  platforms,
  videogame,
} = require("./routes/index.js");

const app = express();

app.set("port", 3002);

app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header("Access-Control-Allow-Credentials", "true");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});

app.use("/", index);
app.use("/videogame", videogame);
app.use("/videogames", videogames);
app.use("/genres", genres);
app.use("/platforms", platforms);

module.exports = app;
