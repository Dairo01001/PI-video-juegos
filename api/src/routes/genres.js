const router = require("express").Router();
const { getGenres } = require("../lib/conect.js");

router.get("/", async (req, res) => {
  res.json(await getGenres());
});

module.exports = router;
