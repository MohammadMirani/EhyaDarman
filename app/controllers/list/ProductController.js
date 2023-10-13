const Services = require("../../services/index");

class ProductController {
    constructor() {}

   async getProductsList(req, res, next) {
        try {
            const locale = req.query.locale ? req.query.locale : "fa-IR";
            const productList = await Services.productServices.productList(locale , req.query);

            res.send(productList)

        }catch (e) {
            console.error("getProductsList", e);
            res.status(500).send({ message: "خطای سرور" });
        }
    }

   async getSingleProduct(req, res, next) {
        try {
            const locale = req.query.locale ? req.query.locale : "fa-IR";
            const productInfo = await Services.productServices.singleProduct(locale, req.query.productCode);

            res.send(productInfo)

        }catch (e) {
            console.error("getSingleProduct", e);
            res.status(500).send({ message: "خطای سرور" });
        }
    }
}

module.exports = new ProductController();
