module.exports = (sequelize, DataTypes) => {
  const District = sequelize.define("District", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    region_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });

  return District;
};
