const router = require("express").Router();
const { game, Op } = require("../db.js");
const { getGameName, getAllGames } = require("../lib/conect.js");

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

module.exports = router;
