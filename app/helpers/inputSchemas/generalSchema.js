const Joi = require("joi");
const generalSchema = {
    getMenu: Joi.object().keys({
        locale: Joi.string(),
    }),
};

module.exports = generalSchema;
