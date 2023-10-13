const express = require("express");
const landingRouter = express.Router();
const { LandingController } = require("../../controllers");

landingRouter.get("/landingPage", LandingController.getLandingPage);
landingRouter.get("/menu", LandingController.getMenu);
landingRouter.get("/footer", LandingController.getFooter);

module.exports = landingRouter;
