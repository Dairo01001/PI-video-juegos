const router = require("express").Router();

router.get("/", (req, res) => {
  const { name } = req.query;
  res.json({ msg: name ? name : "Video Games" });
});

module.exports = router;
