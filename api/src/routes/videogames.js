const router = require("express").Router();
const { getGamesAPI } = require("../lib/conectAPI.js");

router.get("/", async (req, res) => {
  const { name } = req.query;
  res.json(await getGamesAPI());
});

module.exports = router;
