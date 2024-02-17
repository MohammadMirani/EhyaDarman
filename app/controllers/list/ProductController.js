const Services = require("../../services/index");

class ProductController {
  constructor() {}

  async getProductsList(req, res, next) {
    try {
      const locale = req.query.locale ? req.query.locale : "fa-IR";

      let { brandCode, categoryCode, subCategoryCode, subCategories } =
        await Services.productServices.createSubCategoriesObject(req.query.code, locale);

      const filter = {
        locale,
        brandCode: brandCode ? "BRD-" + brandCode : null,
        categoryCode: categoryCode ? "CAT-" + categoryCode : null,
        subCategoryCode: subCategoryCode ? "SCAT-" + subCategoryCode : null,
      };

      const productList = await Services.productServices.productList(filter);

      const banner = {
        title: "محصول مورد نظر خود را پیدا کنید",
        image: "http://45.159.208.49/docs/slider/image_2.jpg",
      };

      res.send({
        banner: banner,
        subCategories: subCategories,
        productsData: productList,
      });
    } catch (e) {
      console.error("getProductsList", e);
      res.status(410).send({ message: e.message || "خطای سرور" });
    }
  }

  async getSingleProduct(req, res, next) {
    try {
      const locale = req.query.locale ? req.query.locale : "fa-IR";
      const productInfo = await Services.productServices.singleProduct(
        locale,
        req.query.productCode
      );

      res.send(productInfo);
    } catch (e) {
      console.error("getSingleProduct", e);
      res.status(500).send({ message: "خطای سرور" });
    }
  }
}

module.exports = new ProductController();
