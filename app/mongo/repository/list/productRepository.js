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
        defaultImage: {
          $concat: [
            DOT_ENV.DOCS_URL,
            "/products/",
            "$code",
            "/pictures/",
            "$defaultImage",
          ],
        },
        shortDescription: "$shortDescription.value",
      })
      .limit(4);
  } catch (e) {
    console.error("generalRepository.getMenu", e);
    throw e;
  }
};
productRepository.getProductList = async (filter) => {
  try {
    const { locale, brandCode, categoryCode ,subCategoryCode} = filter;
    const query = Models.Product.aggregate().match({
      isDeleted: { $ne: true },
    });

    if (brandCode) {
      query.match({ brandCode: brandCode });
    }
    if (categoryCode) {
      query.match({ categoryCode: categoryCode });
    }
    if (subCategoryCode) {
      query.match({ subCategoryCode: subCategoryCode });
    }
    query
      .sort({ _id: -1 })
      .facet({
        products: [
          { $skip: filter.skip },
          { $limit: filter.limit },
          {
            $addFields: {
              name: {
                $first: {
                  $filter: {
                    input: "$name",
                    as: "item",
                    cond: { $eq: ["$$item.locale", locale] },
                  },
                },
              },
              description: {
                $first: {
                  $filter: {
                    input: "$shortDescription",
                    as: "item",
                    cond: { $eq: ["$$item.locale", locale] },
                  },
                },
              },
            },
          },
          {
            $project: {
              _id: 0,
              name: "$name.value",
              code: "$code",
              description: "$description.value",
              image: {
                $concat: [
                  DOT_ENV.DOCS_URL,
                  "/products/",
                  "$code",
                  "/pictures/",
                  "$smallImage",
                ],
              },
            },
          },
        ],
        count: [{ $count: "count" }, { $unwind: { path: "$count" } }],
      })
      .unwind({ path: "$count" })
      .addFields({
        count: "$count.count",
      });

    return await query.exec()
  } catch (e) {
    console.error(e);
    throw e;
  }
};

module.exports = productRepository;
