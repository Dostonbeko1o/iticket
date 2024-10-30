const { type } = require("express/lib/response");

module.exports = (sequelize, DataTypes) => {
  const Event_type = sequelize.define("Event_type", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    parent_event_type_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });

  return Event_type;
};
