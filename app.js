const express = require("express");
const dotenv = require("dotenv");
const { sequelize } = require("./model");
const adminRoutes = require("./routes/adminRoutes");
const seat_typeRoutes = require("./routes/seat_typeRoutes");
const venue_typeRoutes = require("./routes/venue_typeRoutes");
const human_categoryRoutes = require("./routes/human_categoryRoutes");
const venue_photoRoutes = require("./routes/venue_photoRoutes");
const seatRoutes = require("./routes/seatRoutes");
const event_typeRoutes = require("./routes/event_typeRoutes");
const venueRoutes = require("./routes/venueRoutes");
const customer_typeRoutes = require("./routes/customer_typeRoutes");
const eventRoutes = require("./routes/eventRoutes");
const bookingRoutes = require("./routes/bookingRoutes");
const ticketRoutes = require("./routes/ticketRoutes");
const cartRoutes = require("./routes/cartRoutes");
const customerRoutes = require("./routes/customerRoutes");
const customer_addressRoutes = require("./routes/customer_addressRoutes");
const districtRoutes = require("./routes/districtRoutes");
const flatRoutes = require("./routes/flatRoutes");
const sectorRoutes = require("./routes/sectorRoutes");
const genderRoutes = require("./routes/genderRoutes");
const countryRoutes = require("./routes/countryRoutes");
const setupSwagger = require("./swagger/swagger");

dotenv.config();

const app = express();

app.use(express.json());

app.use("/api", adminRoutes);
app.use("/api", seat_typeRoutes);
app.use("/api", venue_typeRoutes);
app.use("/api", human_categoryRoutes);
app.use("/api", venue_photoRoutes);
app.use("/api", seatRoutes);
app.use("/api", event_typeRoutes);
app.use("/api", venueRoutes);
app.use("/api", customer_typeRoutes);
app.use("/api", eventRoutes);
app.use("/api", bookingRoutes);
app.use("/api", ticketRoutes);
app.use("/api", cartRoutes);
app.use("/api", customerRoutes);
app.use("/api", customer_addressRoutes);
app.use("/api", districtRoutes);
app.use("/api", flatRoutes);
app.use("/api", sectorRoutes);
app.use("/api", genderRoutes);
app.use("/api", countryRoutes);

setupSwagger(app);

const PORT = process.env.PORT || 3000;

sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});
