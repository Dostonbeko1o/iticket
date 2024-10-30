module.exports = (sequelize, DataTypes) => {
  const Ticket = sequelize.define("Ticket", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    event_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    seat_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    service_fee: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    status_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    ticket_type: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });

  return Ticket;
};
