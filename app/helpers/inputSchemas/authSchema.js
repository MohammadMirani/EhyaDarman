const Joi = require("joi");
const authSchema = {
    login: Joi.object().keys({
        username: Joi.string().required(),
        password: Joi.string().required(),
    }),
    signup: Joi.object().keys({
        firstname: Joi.string(),
        lastname: Joi.string(),
        mobile: Joi.string().required(),
        password: Joi.string(),
        otp: Joi.string(),
    }),
    sendOtp: Joi.object().keys({
        mobile: Joi.string().required(),
    }),
};

module.exports = authSchema;
