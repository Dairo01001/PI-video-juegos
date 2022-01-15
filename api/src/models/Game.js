const {
  INTEGER,
  STRING,
  TEXT,
  DATEONLY,
  NOW,
  FLOAT,
  ENUM,
} = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("game", {
    id: {
      type: INTEGER,
      unique: true,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: STRING,
      unique: true,
      allowNull: false,
    },
    description: {
      type: TEXT,
      allowNull: false,
    },
    released: {
      type: DATEONLY,
      set(value) {
        this.setDataValue("released", value ? value : NOW);
      },
    },
    rating: {
      type: FLOAT,
    },
    platforms: {
      type: ENUM("PC"),
      allowNull: false,
    },
  });
};
