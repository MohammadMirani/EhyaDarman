const authService = {};
const repository = require("../../mongo/repository/index");
const bcrypt = require("bcrypt");
const http = require("http");
const redisClient = require("../../cors/ioRedisClient");

authService.loginFunction = async (username, password) => {
  try {
    const findUser = await repository.userRepository.findUser(
      username,
      password
    );

    let isPasswordValid = false;
    if (findUser) {
      isPasswordValid = await bcrypt.compareSync(password, findUser.password);
    }


    if (isPasswordValid)
      return {
        phone: findUser.phone,
        firstName: findUser.firstName,
        lastName: findUser.lastName,
        id: findUser._id.toString(),
        isBanned: findUser.isBanned,
      };
    return false;
  } catch (e) {
    console.error(e);
    throw e;
  }
};

authService.loginByPhoneAndOTP = async (phone, otp) => {
  try {
    const findUser = await repository.userRepository.findUserByPhone(phone);

    const savedOtp = await redisClient.get(phone);
    const check = otp === savedOtp;
    if (!check) {
      return false;
    }


    if( !findUser.isPhoneVerified){
      await repository.userRepository.verifyPhone(phone)
    }

    await redisClient.del(phone);

    return {
      phone: findUser.phone,
      email: findUser.email,
      firstName: findUser.firstName,
      lastName: findUser.lastName,
      id: findUser._id.toString(),
      isBanned: findUser.isBanned,
    };
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

authService.otpLoginProcess = async (data) => {
  try {
    const isUser = await repository.userRepository.findUserByPhone(data.phone);

    if (!isUser) {
      if (data.phone && data.email) {
        const checkRepetitiveInfo =
          await repository.userRepository.checkUserExistence(data);
        if (checkRepetitiveInfo) throw "اطلاعات وارد شده تکراری است.";

        await repository.userRepository.creatUser(data);
      } else {
        throw "کاربر قبلا ثبت نام نکرده است، لطفا اطلاعات ضروری را وارد کنید.";
      }
    }
  } catch (e) {
    console.error(e);
    throw e;
  }
};

authService.checkUserInput = async (userInput) => {
  try {
    //          firstname: Joi.string(),
    //         lastname: Joi.string(),
    //         phone: Joi.string().required(),
    //         email: Joi.string().required(),
    //         password: Joi.string().required(),
    // const
  } catch (e) {
    console.error(e);
    throw e;
  }
};

authService.creatNewUser = async (userInput) => {
  try {
    await repository.userRepository.creatUser(userInput);
  } catch (e) {
    console.error(e);
    throw e;
  }
};
authService.sendOtp = async (phone) => {
  try {
    //todo connect with sms panel

    return "55555";
  } catch (e) {
    console.error(e);
    throw e;
  }
};

authService.saveOtpInRedis = async (phone, otp) => {
  try {
    await redisClient.setex(phone, 180, otp);
    return true;
  } catch (e) {
    console.error(e);
    throw e;
  }
};

authService.getGeoLocation = async (ip) => {
  return new Promise((resolve, reject) => {
    http
      .get(`http://ipinfo.io/${ip}`, (res) => {
        let data = "";

        res.on("data", (chunk) => {
          data += chunk;
        });

        res.on("end", () => {
          const localeObject = {
            IR: "fa-IR",
          };
          // console.log(JSON.parse(data));
          const locale = localeObject[JSON.parse(data).country] || "en-US";
          resolve(locale);
        });
      })
      .on("error", (err) => {
        reject(err);
      });
  });
};

module.exports = authService;
