const Joi = require("joi");

const validateCustomer_type = (Customer_type) => {
  const schema = Joi.object({
    customer_id: Joi.number().required(),
    name: Joi.string().required(),
    phone: Joi.string().required(),
    number: Joi.string().required(),
    year: Joi.string().required(),
    month: Joi.string().required(),
    is_active: Joi.boolean().required(),
    is_main: Joi.boolean().required(),
  });

  return schema.validate(Customer_type);
};

module.exports = { validateCustomer_type };
