const router = require("express").Router();
const { getGameId } = require("../lib/conect.js");
const { game } = require("../db.js");

const getGamesId = async (idVideogame) => {
  const findGame = await game.findByPk(idVideogame);
  if (!findGame) {
    return await getGameId(idVideogame);
  }
  return findGame;
};

router.get("/:idVideogame", async (req, res) => {
  const { idVideogame } = req.params;
  res.json(await getGamesId(idVideogame));
});

router.post("/", async (req, res) => {
  console.log(req.body);
  res.json(200);
});

module.exports = router;
