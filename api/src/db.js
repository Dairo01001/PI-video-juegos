const { Sequelize } = require("sequelize");
const modelGenre = require("./models/Genre.js");
const modelGame = require("./models/Game.js");
const dotenv = require("dotenv");

dotenv.config();
const { DB_HOST, DB_USER, DB_PASS } = process.env;

const sequelize = new Sequelize(
  `postgres://${DB_USER}:${DB_PASS}@${DB_HOST}/videogames`,
  {
    logging: false,
    native: false,
  }
);

modelGenre(sequelize);
modelGame(sequelize);

const { genre, game } = sequelize.models;
game.belongsToMany(genre, { through: "game_genre" });
genre.belongsToMany(game, { through: "game_genre" });

module.exports = {
  ...sequelize.models,
  conn: sequelize,
};
