const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const { authServices } = require("../services/index");

passport.use(
  "usernamePassword",
  new LocalStrategy(async (username, password, done) => {
    try {
      const user = await authServices.loginFunction(username, password);
      if (!user) {
        return done(null, false, "نام کاربری یا کلمه عبور اشتباه است.");
      }
      if (user.isBanned) {
        return done(
          null,
          false,
          "دسترسی شما مسدود شده است، لطفا با پشتیبانی تماس بگیرید."
        );
      }
      return done(null, user);
    } catch (err) {
      return done(err);
    }
  })
);


passport.use(
  "phoneOTP",
  new LocalStrategy(
    {
      usernameField: "phone", // Use the "email" field for username
      passwordField: "otp",
    },
    async (phone, otp, done) => {
      try {

        const user = await authServices.loginByPhoneAndOTP(phone, otp);

        if (!user) {
          return done(null, false, "شماره و یا کد راستی آزمایی درست نیست.");
        }
        if (user.isBanned) {
          return done(
            null,
            false,
            "دسترسی شما مسدود شده است، لطفا با تیم پشتیبانی تماس بگیرید."
          );
        }
        return done(null, user);
      } catch (err) {
        return done(err);
      }
    }
  )
);
passport.serializeUser((user, done) => {
  done(null, { id: user.id });
});

passport.deserializeUser(async (userData, done) => {
  const user = await authServices.getUserById(userData.id);
  if (user?.isBanned) return done(null, false);
  done(null, userData);
});

module.exports = passport;
