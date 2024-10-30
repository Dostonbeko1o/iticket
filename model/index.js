const Sequelize = require("sequelize");
const sequelize = require("../config/database");

const Admin = require("./admin.model")(sequelize, Sequelize);
const Seat_type = require("./seat_type.model")(sequelize, Sequelize);
const Venue_type = require("./venue_type.model")(sequelize, Sequelize);
const Human_category = require("./human_category.model")(sequelize, Sequelize);
const Venue_photo = require("./venue_photo.model")(sequelize, Sequelize);
const Seat = require("./seat.model")(sequelize, Sequelize);
const Event_type = require("./event_type.model")(sequelize, Sequelize);
const Venue = require("./venue.model")(sequelize, Sequelize);
const Customer_type = require("./custome_type.model")(sequelize, Sequelize);
const Event = require("./event.model")(sequelize, Sequelize);
const Booking = require("./booking.model")(sequelize, Sequelize);
const Ticket = require("./ticket.model")(sequelize, Sequelize);
const Cart = require("./cart.model")(sequelize, Sequelize);
const Customer = require("./customer.model")(sequelize, Sequelize);
const Customer_address = require("./customer_address.model")(
  sequelize,
  Sequelize
);
const District = require("./district.model")(sequelize, Sequelize);
const Flat = require("./flat.model")(sequelize, Sequelize);
const Sector = require("./sector.model")(sequelize, Sequelize);
const Gender = require("./gender.model")(sequelize, Sequelize);
const Country = require("./country.model")(sequelize, Sequelize);

Seat.associate(sequelize.models);
Seat_type.associate(sequelize.models);

module.exports = {
  sequelize,
  Admin,
  Seat_type,
  Venue_type,
  Human_category,
  Venue_photo,
  Seat,
  Event_type,
  Venue,
  Customer_type,
  Event,
  Booking,
  Ticket,
  Cart,
  Customer,
  Customer_address,
  District,
  Flat,
  Sector,
  Gender,
  Country,
};
