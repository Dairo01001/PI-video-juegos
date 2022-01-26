const router = require("express").Router();
const { genre } = require("../db.js");

router.get("/", async (req, res) => {
  const genres = await genre.findAll();
  return res.json(genres);
});

module.exports = router;
