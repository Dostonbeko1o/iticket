module.exports = (sequelize, DataTypes) => {
  const Venue_photo = sequelize.define("Venue_photo", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    venue_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    url: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  return Venue_photo;
};
