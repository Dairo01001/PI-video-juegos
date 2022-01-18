const router = require("express").Router();
const { getPlatforms } = require("../lib/conect.js");
const { platform } = require("../db.js");

router.get("/", async (req, res) => {
  const platforms = await platform.findAll();
  if (platforms.length !== 0) {
    return res.json(platforms);
  }
  const platformsApi = await getPlatforms();
  Promise.all(
    platformsApi.map(({ id, name }) => {
      return platform.create({ id, name });
    })
  ).then((results) => {
    return res.json(results);
  });
});

module.exports = router;
