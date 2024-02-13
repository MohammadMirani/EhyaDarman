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
                            input: "$shortDescription", as: "item", cond: { $eq: ["$$item.locale", locale] },
                        },
                    },
                }, name: {
                    $first: {
                        $filter: {
                            input: "$name", as: "item", cond: { $eq: ["$$item.locale", locale] },
                        },
                    },
                },
            })
            .project({
                code: 1,
                _id: 0,
                name: "$name.value",
                defaultImage: { $concat: [DOT_ENV.DOCS_URL, "/products/", "$code", "/pictures/", "$defaultImage"] },
                shortDescription: "$shortDescription.value",
            })
            .limit(4);
    } catch (e) {
        console.error("generalRepository.getMenu", e);
        throw e;
    }
};
productRepository.getProductList = async (locale, filter) => {
    try {
        return await Models.Product.aggregate()
            .match({ isDeleted: { $ne: true } })
            .sort({ _id: -1 })
            .facet({
                products: [
                    {$skip: filter.skip},
                    {$limit: filter.limit},
                    { $addFields: {
                        name: {
                            $first: {
                                $filter: {
                                    input: "$name", as: "item", cond: { $eq: ["$$item.locale", locale] },
                                },
                            },
                        },
                    }, },
                    {
                        $project: {
                            _id: 0,
                            name: "$name.value",
                            smallImage: { $concat: [DOT_ENV.DOCS_URL, "/products/", "$code", "/pictures/", "$smallImage"] },
                        },
                    }
                ]
                ,
                count: [{ $count: "count" }, { $unwind: { path: "$count" } }],
            })
            .unwind({path : "$count"})
            .addFields({
                count: "$count.count",
            });

    } catch (e) {
        console.error( e);
        throw e;
    }
};

module.exports = productRepository;
