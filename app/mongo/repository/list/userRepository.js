const Models = require("../../models/index");
const userRepository = {};

userRepository.findUser = async (username) => {
    try {
        return await Models.User.findOne({ username: username });
    } catch (e) {
        console.error("userRepository.findUser", e);
        throw e;
    }
};

userRepository.findUserById = async (id) => {
    try {
        return await Models.User.findById(id);
    } catch (e) {
        console.error("userRepository.findUserById", e);
        throw e;
    }
};

module.exports = userRepository;
