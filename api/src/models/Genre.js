const { INTEGER, STRING } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("genre", {
    id: {
      type: INTEGER,
      unique: true,
      primaryKey: true,
      allowNull: false,
    },
    name: {
      type: STRING,
      unique: true,
      allowNull: false,
    },
  });
};
