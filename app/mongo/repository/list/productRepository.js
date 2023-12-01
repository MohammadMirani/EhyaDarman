const Models = require("../../models");
const productRepository = {};
const DOT_ENV = require("../../../configs/general");

productRepository.getBookmarkedProducts = async (locale) => {
  try {
    return await Models.Product.aggregate()
      .match({ isBookmarked: true })
      .addFields({
        shortDescription: {
          $first: {
            $filter: {
              input: "$shortDescription",
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
        defaultImage: { $concat : [DOT_ENV.DOCS_URL, "/products/", "$code" ,"/Pictures/", "$defaultImage"] },
        shortDescription: "$shortDescription.value",
      })
        .limit(6)
  } catch (e) {
    console.error("generalRepository.getMenu", e);
    throw e;
  }
};

module.exports = productRepository;
