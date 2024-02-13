const productService = {};
const repository = require("../../mongo/repository/index");
const dataConversion = require("../../helpers/dataConversion")

productService.productList =async (locale , filter) => {
    try {
        return await repository.productRepository.getProductList(locale , dataConversion.validateFilter(filter))
    }catch (e) {
        console.error(e);
        throw e;
    }
};

productService.singleProduct =async () => {
    try {
        return await repository.productRepository
    }catch (e) {
        console.error(e);
        throw e;
    }
};


module.exports = productService;






