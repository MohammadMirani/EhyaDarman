const Models = require("../../models");
const productRepository = {};
const DOT_ENV = require("../../../configs/general");

productRepository.getBookmarkedProducts = async (locale) => {
  try {
    return await Models.Product.aggregate()
      .match({ isBookmarked: true })
      .addFields({
        description: {
          $first: {
            $filter: {
              input: "$description",
              as: "item",
              cond: { $eq: ["$$item.locale", locale] },
            },
          },
        },
        name: {
          $first: {
            $filter: {
              input: "$name",
              as: "item",
              cond: { $eq: ["$$item.locale", locale] },
            },
          },
        },
      })
      .project({
        code: 1,
        _id: 0,
        name: "$name.value",
        smallImage: 1,
        defaultImage: { $concat : [DOT_ENV.DOCS_URL, "/products/", "$code" ,"/Pictures/", "$defaultImage"] },
        description: "$description.value",
        shortDescription: 1,
      })
        .limit(4)
  } catch (e) {
    console.error("generalRepository.getMenu", e);
    throw e;
  }
};

module.exports = productRepository;
