const express = require("express");
const ProductRouter = express.Router();
const { ProductController } = require("../../controllers");
const productSchema = require("../../helpers/inputSchemas/productsSchema");
const validationMiddleWare = require("../../helpers/validationMiddleware");
ProductRouter.get("/list", validationMiddleWare(productSchema.list ,"query"), ProductController.getProductsList);
ProductRouter.get("/singleProduct", validationMiddleWare(productSchema.list ,"query"), ProductController.getSingleProduct);

module.exports = ProductRouter;
