const express = require("express");

const api = express();
api.use(express.json());

api.get("/", (req, res) => {
  res.json({ hello: "Hello World!" });
});

module.exports = { api };
