const { Router } = require("express");

const router = Router();

router.get("/", (req, res) => {
  res.json({ msg: "Hello World!" });
});

module.exports = {
  index: router,
  videogames: require("./videogames.js"),
  genres: require("./genres.js"),
  platforms: require("./platforms.js"),
  videogame: require("./videogame.js"),
};
