const productService = {};
const repository = require("../../mongo/repository/index");

productService.productList =async () => {
    try {
        return await repository.productRepository
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






