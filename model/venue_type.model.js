module.exports = (sequelize, DataTypes) => {
  const Venue_type = sequelize.define("Venue_type", {
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

  return Venue_type;
};
