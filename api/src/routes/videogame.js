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

router.get("/", (req, res) => {
  res.status(204).end();
});

router.get("/:idVideogame", async (req, res) => {
  const { idVideogame } = req.params;
  res.status(200).json(await getGamesId(idVideogame));
});

router.post("/", async (req, res) => {
  const { name, description, released, rating, platforms, genres } = req.body;

  if (!name || !description || !platforms) {
    return res.status(400).json({
      error: "'name', 'description' y 'platforms' son requeridas",
    });
  }

  try {
    const [creatingGame, created] = await game.findOrCreate({
      where: {
        name,
      },
      defaults: {
        name,
        description,
        released: released || "",
        rating: released || 0,
        platforms,
      },
    });

    if (!created) {
      return res
        .status(400)
        .json({ error: "El Juego ya se encuentra en la base de datos." });
    }

    if (genres) {
      const genresDataBase = await genre.findAll({
        where: {
          name: genres,
        },
      });
      await creatingGame.addGenres(genresDataBase);
    }

    res.status(201).json(creatingGame);
  } catch (err) {
    console.log(err);
    res.status(400).json({ error: err });
  }
});

module.exports = router;
