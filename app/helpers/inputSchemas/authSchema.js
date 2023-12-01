const Joi = require("joi");
const authSchema = {
    login: Joi.object().keys({
        username: Joi.string().required(),
        password: Joi.string().required(),
    }),
    signup: Joi.object().keys({
        firstName: Joi.string().required(),
        lastName: Joi.string().required(),
        phone: Joi.string().required(),
        email: Joi.string().required(),
        password: Joi.string().required(),
    }),
    sendOtp: Joi.object().keys({
        phone: Joi.string().required(),
    }),
    loginWithOtp: Joi.object().keys({
        phone: Joi.string().required(),
        otp: Joi.string().required(),
        firstName: Joi.string(),
        lastName: Joi.string(),
        email: Joi.string(),
        password: Joi.string(),
    }),
};

module.exports = authSchema;
