const router = require("express").Router();
const { genre } = require("../db.js");
const { getGenres } = require("../lib/conect.js");

router.get("/", async (req, res) => {
  const genres = await genre.findAll();
  if (genres.length === 0) {
    return res
      .status(201)
      .json(
        await Promise.all((await getGenres()).map((genr) => genre.create(genr)))
      );
  }
  return res.status(200).json(genres);
});

module.exports = router;
