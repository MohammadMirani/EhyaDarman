const Models = require("../../models");
const productRepository = {};

productRepository.getBookmarkedProducts = async (locale) => {
    try {
        return await Models.Product.aggregate()
            .match({ isBookmarked: true })
            .unwind({ path: "$name" })
            .match({ "name.locale": locale })
            .addFields({ name: "$name.value" });
    } catch (e) {
        console.error("generalRepository.getMenu", e);
        throw e;
    }
};

module.exports = productRepository;
