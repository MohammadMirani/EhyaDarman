const Joi = require("joi");
const generalSchema = {
  getMenu: Joi.object().keys({
    locale: Joi.string(),
  }),
  registerRequest: Joi.object().keys({
    fullName: Joi.string(),
    email: Joi.string(),
    phone: Joi.string(),
    city: Joi.string(),
    description: Joi.string(),
    code: Joi.string(),
  }),
};

module.exports = generalSchema;
