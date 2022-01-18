const { Sequelize, Op } = require("sequelize");
const modelGenre = require("./models/Genre.js");
const modelGame = require("./models/Game.js");
const modelPlatform = require("./models/Platform.js")
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
modelPlatform(sequelize);


const { genre, game, platform } = sequelize.models;
game.belongsToMany(genre, { through: "game_genre" });
genre.belongsToMany(game, { through: "game_genre" });

module.exports = {
  genre,
  game,
  platform,
  conn: sequelize,
  Op,
};
