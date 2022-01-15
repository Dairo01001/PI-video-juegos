const { Sequelize, INTEGER, STRING } = require("sequelize");
const modelGenre = require("./models/Genre.js");
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

module.exports = {
  ...sequelize.models,
  conn: sequelize,
};
