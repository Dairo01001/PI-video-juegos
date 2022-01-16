const router = require("express").Router();
const { getGames } = require("../lib/conect.js");

router.get("/", async (req, res) => {
  const { idVideogame } = req.body;
  const { name } = req.query;
  res.json(await getGames(name, idVideogame));
});

router.post("/", (req, res) => {
  res.json({ msg: "Hello Posts" });
});

module.exports = router;
