const { INTEGER, STRING, TEXT, FLOAT } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "game",
    {
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
        type: STRING,
      },
      rating: {
        type: FLOAT,
      },
      platforms: {
        type: TEXT,
        allowNull: false,
      },
    },
    { timestamps: false }
  );
};