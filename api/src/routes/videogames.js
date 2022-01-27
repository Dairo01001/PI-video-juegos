const router = require("express").Router();
const { game, Op, genre } = require("../db.js");
const { getGameName, getAllGames } = require("../lib/conect.js");

const getGamesName = async (name) => {
  const findGame = await game.findAll({
    where: {
      name: {
        [Op.substring]: name,
      },
    },
    include: genre,
  });
  return findGame.concat(await getGameName(name));
};

const getGames = async () => {
  const findGames = await game.findAll({ include: genre });
  return findGames.concat(await getAllGames());
};

router.get("/", async (req, res) => {
  const { name } = req.query;
  if (name) {
    return res.status(200).json(await getGamesName(name));
  }
  res.status(200).json(await getGames());
});

module.exports = router;
