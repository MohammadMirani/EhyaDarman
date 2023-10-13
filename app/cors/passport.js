const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const { authServices } = require("../services/index");
passport.use(
    new LocalStrategy(async (username, password, done) => {
        try {
            const user = await authServices.loginFunction(username, password);
            if (!user) {
                return done(null, false, "نام کاربری یا کلمه عبور اشتباه است.");
            }

            if (user.isBanned) {
                return done(null, false, "دسترسی شما مسدود شده است، لطفا با پشتیبانی تماس بگیرید.");
            }
            return done(null, user);
        } catch (err) {
            return done(err);
        }
    }),
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
