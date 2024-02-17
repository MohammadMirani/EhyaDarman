const productService = {};
const repository = require("../../mongo/repository/index");
const dataConversion = require("../../helpers/dataConversion");
const Services = require("../index");

productService.productList = async (filter) => {
  try {
    return await repository.productRepository.getProductList(
      dataConversion.validateFilter(filter)
    );
  } catch (e) {
    console.error(e);
    throw e;
  }
};

productService.singleProduct = async () => {
  try {
    return await repository.productRepository;
  } catch (e) {
    console.error(e);
    throw e;
  }
};

productService.createSubCategoriesObject = async (code, locale) => {
  try {


    let splitCode = code?.split("-");
    splitCode = splitCode?.length ? splitCode : [];
    if (splitCode.length > 3) throw { message: "خطای ورودی", error: true };

    const brandCode = splitCode[0] > 0 ? splitCode[0] : null;
    const categoryCode = splitCode[1] > 0 ? splitCode[1] : null;
    const subCategoryCode = splitCode[2] > 0 ? splitCode[1] : null;
    let subCategories = [];

    if (!brandCode) {
      subCategories = await Services.generalServices.generateBrandListForFilter(
        locale
      );
    }
    if (brandCode && !categoryCode) {
      subCategories =
        await Services.generalServices.generateCategoryListForFilter(
          locale,
          brandCode
        );
    }
    if (brandCode && categoryCode) {
      subCategories =
        await Services.generalServices.generateSubCategoryListForFilter(
          locale,
          brandCode,
          categoryCode
        );
    }

      console.log(subCategories);
    return { brandCode, categoryCode, subCategoryCode, subCategories };
  } catch (e) {
    console.error(e);
    throw { message: e.message || "خطای ورودی", error: true };
  }
};

module.exports = productService;
