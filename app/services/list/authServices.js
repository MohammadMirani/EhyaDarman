const authService = {};
const repository = require("../../mongo/repository/index");
const bcrypt = require("bcrypt");
const http = require("http");

authService.loginFunction = async (username, password) => {
    try {
        const findUser = await repository.userRepository.findUser(username, password);
        let isPasswordValid = false;
        if (findUser) {
            isPasswordValid = await bcrypt.compareSync(password, findUser.password);
        }

        if (isPasswordValid)
            return {
                username: findUser.username,
                firstname: findUser.firstname,
                lastname: findUser.lastname,
                id: findUser._id.toString(),
                isBanned: findUser.isBanned,
            };
        return false;
    } catch (e) {
        console.error(e);
        throw e;
    }
};
authService.getUserById = async (id) => {
    try {
        return await repository.userRepository.findUserById(id);
    } catch (e) {
        console.error(e);
        throw e;
    }
};

authService.checkUserInput = async (id) => {
    try {
    } catch (e) {
        console.error(e);
        throw e;
    }
};

authService.creatNewUser = async (id) => {
    try {
    } catch (e) {
        console.error(e);
        throw e;
    }
};
authService.sendOtp = async (id) => {
    try {
    } catch (e) {
        console.error(e);
        throw e;
    }
};

authService.getGeoLocation = async (ip) => {
    return new Promise((resolve, reject) => {
        http.get(`http://ipinfo.io/${ip}`, (res) => {
            let data = "";

            res.on("data", (chunk) => {
                data += chunk;
            });

            res.on("end", () => {
                const localeObject = {
                    IR: "fa-IR",
                };
                console.log(JSON.parse(data));
                const locale = localeObject[JSON.parse(data).country] || "en-US";
                resolve(locale);
            });
        }).on("error", (err) => {
            reject(err);
        });
    });
};

module.exports = authService;
