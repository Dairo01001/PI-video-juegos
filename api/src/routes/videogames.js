const router = require("express").Router();
const { game, Op } = require("../db.js");
const { getGameName, getGameId, getAllGames } = require("../lib/conect.js");

const getGamesName = async (name) => {
  const findGame = await game.findAll({
    where: {
      name: {
        [Op.substring]: name,
      },
    },
  });
  return findGame.concat(await getGameName(name));
};

const getGamesId = async (idVideogame) => {
  const findGame = await game.findByPk(idVideogame);
  if (!findGame) {
    return await getGameId(idVideogame);
  }
  return findGame;
};

const getGames = async () => {
  const findGames = await game.findAll();
  return findGames.concat(await getAllGames());
};

router.get("/", async (req, res) => {
  const { name } = req.query;
  if (name) {
    return res.json(await getGamesName(name));
  }
  res.json(await getGames());
});

router.get("/:idVideogame", async (req, res) => {
  const { idVideogame } = req.params;
  res.json(await getGamesId(idVideogame));
});

router.post("/", async (req, res) => {
  let { id, name, description, released, rating, platforms, idsGenres } =
    req.body;

  const findGame = await game.findByPk(id);
  if (findGame) {
    return res.json(findGame);
  }

  released = released ? released : Date.now().toString();
  rating = rating ? rating : 0.0;

  const gameCreated = await game.create({
    id,
    name,
    description,
    released,
    rating,
    platforms,
  });
  res.json(gameCreated);
});

module.exports = router;
