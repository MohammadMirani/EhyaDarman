const Joi = require("joi");
const authSchema = {
    list: Joi.object().keys({
        skip: Joi.number(),
        limit: Joi.number(),
    }),
    singleProduct: Joi.object().keys({
        product_code: Joi.string().required(),
    }),
};

module.exports = authSchema;
