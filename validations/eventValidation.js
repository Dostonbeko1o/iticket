const Joi = require("joi");

const validateEvent = (event) => {
  const schema = Joi.object({
    name: Joi.number().required(),
    photo: Joi.string().required(),
    start_date: Joi.date().required(),
    start_time: Joi.number().required(),
    finish_date: Joi.date().required(),
    finish_time: Joi.number().required(),
    info: Joi.string().required(),
    event_type_id: Joi.number().required(),
    human_category_id: Joi.number().required(),
    venue_id: Joi.number().required(),
    lang_id: Joi.number().required(),
    release_date: Joi.date().required(),
  });

  return schema.validate(event);
};

module.exports = { validateEvent };
