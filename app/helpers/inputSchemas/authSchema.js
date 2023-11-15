const Joi = require("joi");
const authSchema = {
    login: Joi.object().keys({
        username: Joi.string().required(),
        password: Joi.string().required(),
    }),
    signup: Joi.object().keys({
        firstname: Joi.string(),
        lastname: Joi.string(),
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
    }),
};

module.exports = authSchema;
