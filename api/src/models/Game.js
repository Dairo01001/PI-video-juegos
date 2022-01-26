const { STRING, TEXT, FLOAT, DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "game",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
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
        defaultValue: 0,
        set(value) {
          if (typeof value !== "number") {
            throw new Error("rating debe ser un number!");
          }
        },
      },
      platforms: {
        type: DataTypes.JSON,
        allowNull: false,
      },
    },
    { timestamps: false }
  );
};
