const Models = require("../../models");
const categoryRepository = {};

categoryRepository.getBookmarkedCategories = async (locale) => {
    try {
        return await Models.Category.aggregate()
            .match({ isBookmarked: true, "name.locale": locale })
            .unwind({ path: "$name" })
            .addFields({ name: "$name.value" });
    } catch (e) {
        console.error("generalRepository.getMenu", e);
        throw e;
    }
};

module.exports = categoryRepository;
