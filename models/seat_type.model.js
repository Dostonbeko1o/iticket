const bcrypt = require("bcrypt");

module.exports = (sequelize, DataTypes) => {
  const Seat_type = sequelize.define("Seat_type", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    start_age: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    finish_age: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    gender: {
      type: DataTypes.INTEGER,
      allowNull: true,
    }
  });
  Seat_type.associate = (models) => {
    Seat_type.hasMany(models.Seat, {
      foreignKey: "seat_type_id",
      as: "seat_seat",
    });
  };

  return Seat_type;
};
