const Models = require("../../models/index");
const bcrypt = require("bcrypt")
const userRepository = {};

userRepository.findUser = async (username) => {
    try {
        return await Models.User.findOne({ $or : [{phone : username} , {email : username}] });
    } catch (e) {
        console.error("findUser", e);
        throw e;
    }
};
userRepository.findUserByPhone = async (phone) => {
    try {
        return await Models.User.findOne({ phone: phone });
    } catch (e) {
        console.error("findUserByMobile", e);
        throw e;
    }
};

userRepository.findUserById = async (id) => {
    try {
        return await Models.User.findById(id);
    } catch (e) {
        console.error("findUserById", e);
        throw e;
    }
};

userRepository.creatUser = async (input) => {
    try {
        const hashPassword = await bcrypt.hash( input.password , 10)
        input.password = hashPassword
        return await Models.User.create(input);
    } catch (e) {
        console.error("creatUser", e);
        throw e;
    }
};
userRepository.verifyPhone = async (phone) => {
    try {

        await Models.User.findOneAndUpdate({phone : phone},{isPhoneVerified : true})
    } catch (e) {
        console.error("creatUser", e);
        throw e;
    }
};

userRepository.checkUserExistence = async (input) => {
    try {
        return await Models.User.findOne({ $or: [{ phone: input.phone }, { email: input.email }] });

    } catch (e) {
        console.error("creatUser", e);
        throw e;
    }
};

module.exports = userRepository;
