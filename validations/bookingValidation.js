const Joi = require("joi");

const validateBooking = (Booking) => {
  const schema = Joi.object({
    card_id: Joi.number().required(),
    createdAt: Joi.number().required(),
    fineshed: Joi.number().required(),
    payment_method_id: Joi.number().required(),
    delivery_method_id: Joi.number().required(),
    discount_coupon_id: Joi.number().required(),
    status_id: Joi.number().required(),
  });

  return schema.validate(Booking);
};

module.exports = { validateBooking };
