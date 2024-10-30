module.exports = (sequelize, DataTypes) => {
  const Venue = sequelize.define("Venue", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    location: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    site: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    venue_type_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    schema: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    region_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    district_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });

  return Venue;
};
