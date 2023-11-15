const Models = require("../../models/index");
const userRepository = {};

userRepository.findUser = async (username) => {
    try {
        return await Models.User.findOne({ username: username });
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
        return await Models.User.create(input);
    } catch (e) {
        console.error("creatUser", e);
        throw e;
    }
};

module.exports = userRepository;
