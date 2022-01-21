const router = require("express").Router();
const { getGameId } = require("../lib/conect.js");
const { game, genre } = require("../db.js");

const getGamesId = async (idVideogame) => {
  if (idVideogame.length > 10) {
    const findGame = await game.findByPk(idVideogame, {
      include: genre,
    });
    return findGame;
  }
  return await getGameId(idVideogame);
};

router.get("/:idVideogame", async (req, res) => {
  const { idVideogame } = req.params;
  res.json(await getGamesId(idVideogame));
});

router.post("/", async (req, res) => {
  const { name, description, released, rating, platforms, genres } = req.body;
  try {
    const createdGame = await game.create({
      name,
      description,
      released,
      rating,
      platforms,
    });
    Promise.all(genres.map((genre) => createdGame.addGenres(genre))).then(
      () => {
        res.json(createdGame);
      }
    );
  } catch (error) {
    res.json(error);
  }
});

module.exports = router;
