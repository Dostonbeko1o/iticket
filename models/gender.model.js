const bcrypt = require("bcrypt");

module.exports = (sequelize, DataTypes) => {
  const Gender = sequelize.define("Gender", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  });

  return Gender;
};
