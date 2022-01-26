const app = require("./src/app.js");
const { getGenres } = require("./src/lib/conect.js");
const { sequelize, genre } = require("./src/db.js");

sequelize.sync({ force: true }).then(() => {
  app.listen(app.get("port"), async () => {
    const genres = await getGenres();
    Promise.all(genres.map((genr) => genre.create(genr)));
    console.log(`App listen in port ${app.get("port")}`);
  });
});
