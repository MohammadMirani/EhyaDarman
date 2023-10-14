const express = require("express");
const { Strategy: localStrategy } = require("passport-local");
const session = require("express-session");
const RedisStore = require("connect-redis")(session);
const cors = require("cors");
const helmet = require("helmet");
const DOT_ENV = require("../configs/general");
const routerIndex = require("../router/index");
const createError = require("http-errors");
const errorHandler = require("../helpers/ErrorHandler");
const path = require("path");
const passport = require("../cors/passport");
const supportedLanguages = ["fa-IR", "en-US"];
const { authServices } = require("../services/index");
// const cookieParser = require("cookie-parser");

async function server(redisClient) {
    return new Promise(async (resolve, reject) => {
        try {
            const app = express();
            app.use(express.json());
            app.use(express.urlencoded({ extended: false }));
            app.set("views", path.join(__dirname, "../views"));
            app.set("view engine", "ejs");
            app.use(express.static('../public'));
            // app.use(cookieParser());

            app.use(
                session({
                    name: "user_sid",
                    resave: false,
                    saveUninitialized: false,
                    secret: DOT_ENV.SESSION_SECRET_KEY,
                    store: new RedisStore({ client: redisClient }),
                    cookie: {
                        // secure: true,
                        // //todo
                        httpOnly: true,
                        maxAge: DOT_ENV.SESSION_LIFETIME,
                    },
                }),
            );

            app.use(passport.initialize());
            app.use(passport.session());

            app.use(languageMiddleware);

            app.use("/", routerIndex);

            //todo
            //check error handler
            app.use(errorHandler);

            //todo check
            // catch 404 and forward to error handler
            app.use(function (req, res, next) {
                next(createError(404));
            });

            //todo check
            // error handler
            app.use(function (err, req, res, next) {
                // set locals, only providing error in development
                res.locals.message = err.message;
                res.locals.error = req.app.get("env") === "development" ? err : {};

                // render the error page
                res.status(err.status || 500);
                res.render("error");
            });

            //todo
            //save errors in a json file

            await app.listen(DOT_ENV.PORT, () => {
                console.info("[+] Server is successfully connected to port:", DOT_ENV.PORT);
                return resolve();
            });
        } catch (e) {
            console.info("[!] Server cant connect to port:");
            console.error(e);

            return reject(e);
        }
    });
}

module.exports = server;

// Language middleware
const languageMiddleware = async (req, res, next) => {
    const acceptedLanguages = req.headers["accept-language"];
    //todo
    if (supportedLanguages.includes(acceptedLanguages?.split(",")[0])) {
        req.locale = acceptedLanguages.split(",")[0];
    } else if (req.ip !== "::1") {
        const result = await authServices.getGeoLocation(req.ip);
        req.locale = result
    } else {
        req.locale = "fa-IR"; // Default to English if language not supported
    }
    next();
};
