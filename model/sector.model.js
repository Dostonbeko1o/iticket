module.exports = (sequelize, DataTypes) => {
  const Sector = sequelize.define("Sector", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  return Sector;
};
