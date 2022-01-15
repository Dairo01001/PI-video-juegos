const router = require("express").Router();
const { genre } = require("../db.js");

router.get("/", async (req, res) => {
  const genres = await genre.findAll();
  if (genres.length !== 0) return res.json(genres);
});

module.exports = router;
