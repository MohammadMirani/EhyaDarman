const express = require("express");
const authRouter = express.Router();
const { authController } = require("../../controllers");
const validationMiddleWare = require("../../helpers/validationMiddleware");
const authSchema = require("../../helpers/inputSchemas/authSchema");

authRouter.post("/login", validationMiddleWare(authSchema.login, "body"), authController.login);
authRouter.post("/logout", authController.logout);
authRouter.get("/checkAuth", authController.checkAuth);
authRouter.get("/switchSite",authController.switchSite);
authRouter.post("/signup", validationMiddleWare(authSchema.signup , "body"), authController.signup);
authRouter.post("/sendOtp", validationMiddleWare(authSchema.sendOtp , "body"), authController.sendOtp);

module.exports = authRouter;
