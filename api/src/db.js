const { Sequelize, Op } = require("sequelize");
const modelGenre = require("./models/Genre.js");
const modelGame = require("./models/Game.js");
const modelPlatform = require("./models/Platform.js");
const config = require("./config");

const sequelize = new Sequelize(
  `postgres://${config.DB.USER}:${config.DB.PASSWORD}@${config.DB.HOST}/videogames`,
  {
    logging: false,
    native: false,
  }
);

modelGenre(sequelize);
modelGame(sequelize);
modelPlatform(sequelize);

const { genre, game, platform } = sequelize.models;
game.belongsToMany(genre, { through: "game_genre", timestamps: false });
genre.belongsToMany(game, { through: "game_genre", timestamps: false });

module.exports = {
  genre,
  game,
  platform,
  sequelize,
  Op,
};
