const Joi = require("joi")

const validateAdmin = (admin) => {
  const schema = Joi.object({
    name: Joi.string().min(3).required(),
    login: Joi.string().min(6).required(),
    hashed_password: Joi.string().min(4).max(8).required(),
    is_active: Joi.boolean().required(),
    is_creator: Joi.boolean().required(),
    hashed_refersh_toke: Joi.string().min(6).required(),
  })

  return schema.validate(admin)

}

module.exports = { validateAdmin }