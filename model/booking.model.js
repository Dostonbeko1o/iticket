module.exports = (sequelize, DataTypes) => {
  const Booking = sequelize.define("Booking", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    card_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    createdAt: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    fineshed: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    payment_method_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    delivery_method_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    discount_coupon_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    status_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });

  return Booking;
};
