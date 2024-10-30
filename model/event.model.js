module.exports = (sequelize, DataTypes) => {
  const Event = sequelize.define("Event", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    photo: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    start_date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    start_time: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    finish_date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    finish_time: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    info: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    event_type_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    human_category_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    venue_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    lang_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    release_date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  });

  return Event;
};
