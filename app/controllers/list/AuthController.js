const { authServices } = require("../../services/index");
const passport = require("passport");
const { error, log } = require("winston");

class authController {
  constructor() {}

  async login(req, res, next) {
    try {
      passport.authenticate("usernamePassword", (err, user, info) => {
        if (err) {
          return res.status(500).json({ message: "Server Error" });
        }
        if (!user) {
          return res.status(401).json({ message: info });
        }
        req.login(user, (err) => {
          if (err) {
            return res.status(500).json({ message: "خطای سرور" });
          }
          return res.status(200).json({ message: "با موفقیت وارد شدید." });
        });
      })(req, res, next);
    } catch (e) {
      console.log("login", e);
      res.status(500).send({ message: "خطای سرور" });
    }
  }

  async logout(req, res, next) {
    try {
      req.logout((err) => {
        if (err) {
          return res.status(500).send({ message: "خطای سرور" });
        }
        res.status(200).send({ message: "با موفقیت خارج شدید." });
      });
    } catch (e) {
      console.error(e);
      return res.status(500).send({ message: "خطای سرور" });
    }
  }

  async checkAuth(req, res, next) {
    try {
      if (req.isAuthenticated())
        return res
          .status(200)
          .send({ message: "کاربر با موفقیت احراز هویت شده است." });
      return res.status(401).send({ message: "کاربر احراز هویت نشده است." });
    } catch (e) {
      console.error(e);
      return res.status(500).send({ message: "خطای سرور." });
    }
  }

  async signup(req, res, next) {
    try {
      await authServices.creatNewUser(req.body);
      return res.status(200).send({ message: "ثبت نام با موفقیت انجام شد." });
    } catch (e) {
      console.error(e);
      return res.status(500).send({ message: "خطای سرور." });
    }
  }

  async sendOtp(req, res, next) {
    try {
      const otp = await authServices.sendOtp(req.body.phone);
      await authServices.saveOtpInRedis(req.body.phone, otp);

      return res
          .status(200)
          .send({ message: "کد راستی آزمایی با موفقیت ارسال شد." });
    } catch (e) {
      console.error(e);
      return res.status(500).send({ message: "خطا در ارسال پیامک " });
    }
  }

  async loginWithOtp(req, res, next) {
    try {

      passport.authenticate("phoneOTP", (err, user, info) => {
        if (err) {
          return res.status(500).json({ message: "خطای سرور." });
        }
        if (!user) {
          return res.status(401).json({ message: info });
        }
        req.login(user, (err) => {
          if (err) {
            return res.status(500).json({ message: "خطای سرور" });
          }
          return res.status(200).json({ message: "با موفقیت وارد شدید." });
        });
      })(req, res, next);

    } catch (e) {
      console.error(e);
      return res.status(500).send({ message: "خطا در ارسال پیامک " });
    }
  }

  async switchSite(req, res, next) {
    try {
      if (req.ip === "::1") return res.status(200).send({ locale: "local" });

      const clientData = await authServices.getGeoLocation(req.ip);

      return res.send({ locale: clientData });
    } catch (e) {
      console.error(e);
      return res.status(500).send({ message: "خطای سرور." });
    }
  }
}

module.exports = new authController();
