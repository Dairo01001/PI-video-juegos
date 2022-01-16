const router = require("express").Router();
const { getGenres } = require("../lib/conect.js");
const { genre } = require("../db.js");

router.get("/", async (req, res) => {
  const genres = await genre.findAll();
  if (genres.length !== 0) {
    return res.json(genres);
  }
  const genresApi = await getGenres();
  Promise.all(
    genresApi.map((genreApi) => {
      return genre.create({ id: genreApi.id, name: genreApi.name });
    })
  ).then((results) => {
    return res.json(results);
  });
});

module.exports = router;
