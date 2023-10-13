const express = require("express");
const router = express.Router();
const generalRouter = require("./list/general");
const productsRouter = require("./list/products");
const authRouter = require("./list/auth");
// const landingRouter = require("./list/landing");

router.use("/auth", authRouter);
router.use("/general", generalRouter);
router.use("/products", productsRouter);
// router.use("/landing", landingRouter);

module.exports = router;
