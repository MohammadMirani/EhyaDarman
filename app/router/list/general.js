const express = require("express");
const generalRouter = express.Router();
const { GeneralController } = require("../../controllers");
const generalSchema = require("../../helpers/inputSchemas/generalSchema");
const validationMiddleWare = require("../../helpers/validationMiddleware");

generalRouter.get("/landingPage", validationMiddleWare(generalSchema.getMenu, "query"), GeneralController.getLandingPage);
generalRouter.get("/menu", validationMiddleWare(generalSchema.getMenu, "query"), GeneralController.getMenu);
generalRouter.get("/footer", GeneralController.getFooter);
generalRouter.get("/aboutUs", GeneralController.getAboutUs);
generalRouter.get("/contactUs", GeneralController.getContactUs);
generalRouter.get("/branches", GeneralController.getBranches);
generalRouter.post("/registerRequest",validationMiddleWare(generalSchema.registerRequest, "body"), GeneralController.registerRequest);

module.exports = generalRouter;
