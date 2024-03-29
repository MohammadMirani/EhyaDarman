const Joi = require("joi");
const authSchema = {
    list: Joi.object().keys({
        skip: Joi.number(),
        limit: Joi.number(),
        locale: Joi.string(),
        code: Joi.string().allow("")
    }),
    singleProduct: Joi.object().keys({
        productCode: Joi.string().required(),
    }),
};

module.exports = authSchema;
