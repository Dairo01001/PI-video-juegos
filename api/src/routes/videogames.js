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
  const { idVideogame } = req.body;
  const { name } = req.query;
  if (name && idVideogame) {
    return res.status(404).json({ msg: "Send 'name' or 'id'" });
  }
  if (name) {
    return res.json(await getGamesName(name));
  }
  if (idVideogame) {
    return res.json(await getGamesId(idVideogame));
  }
  res.json(await getGames());
});

router.post("/", (req, res) => {
  res.json({ msg: "Hello Posts" });
});

module.exports = router;
