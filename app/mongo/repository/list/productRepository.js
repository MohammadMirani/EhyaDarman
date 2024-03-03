const Models = require("../../models");
const productRepository = {};
const DOT_ENV = require("../../../configs/general");

productRepository.getBookmarkedProducts = async (locale) => {
    try {
        return await Models.Product.aggregate()
            .match({ isBookmarked: true })
            .sort({ code: 1 })
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
        const { locale, brandCode, categoryCode, subCategoryCode } = filter;
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

        return await query.exec();
    } catch (e) {
        console.error(e);
        throw e;
    }
};
productRepository.getSingleProduct = async (locale, productCode) => {
    try {
        const query = Models.Product.aggregate()
            .match({
                isDeleted: { $ne: true },
                code: productCode,
            })
            .addFields({
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
                            input: "$description",
                            as: "item",
                            cond: { $eq: ["$$item.locale", locale] },
                        },
                    },
                },
                frequentlyAskedQuestions: {
                    $first: {
                        $filter: {
                            input: "$frequentlyAskedQuestions",
                            as: "item",
                            cond: { $eq: ["$$item.locale", locale] },
                        },
                    },
                },
                shortDescription: {
                    $first: {
                        $filter: {
                            input: "$shortDescription",
                            as: "item",
                            cond: { $eq: ["$$item.locale", locale] },
                        },
                    },
                },
                introduction: {
                    $first: {
                        $filter: {
                            input: "$introduction",
                            as: "item",
                            cond: { $eq: ["$$item.locale", locale] },
                        },
                    },
                },
                specializedExamination: {
                    $first: {
                        $filter: {
                            input: "$specializedExamination",
                            as: "item",
                            cond: { $eq: ["$$item.locale", locale] },
                        },
                    },
                },
                technicalData: {
                    $first: {
                        $filter: {
                            input: "$technicalData",
                            as: "item",
                            cond: { $eq: ["$$item.locale", locale] },
                        },
                    },
                },
                images: {
                    $map: {
                        input: "$images",
                        as: "item",
                        in: {
                            image: {
                                $concat: [
                                    DOT_ENV.DOCS_URL,
                                    "/products/",
                                    "$code",
                                    "/pictures/",
                                    "$$item.name",
                                ],
                            },
                            isDefault: "$$item.isDefault",
                        },
                    },
                },
                videos: {
                    $map: {
                        input: "$videos",
                        as: "item",
                        in: {
                            image: {
                                $concat: [
                                    DOT_ENV.DOCS_URL,
                                    "/products/",
                                    "$code",
                                    "/videos/",
                                    "$$item.name",
                                ],
                            },
                            isDefault: "$$item.isDefault",
                        },
                    },
                },
                pdfs: {
                    $map: {
                        input: "$pdfs",
                        as: "item",
                        in: {
                            image: {
                                $concat: [
                                    DOT_ENV.DOCS_URL,
                                    "/products/",
                                    "$code",
                                    "/pdfs/",
                                    "$$item.name",
                                ],
                            },
                            isDefault: "$$item.isDefault",
                        },
                    },
                },
                defaultImage: {
                    $concat: [
                        DOT_ENV.DOCS_URL,
                        "/products/",
                        "$code",
                        "/pictures/",
                        "$defaultImage",
                    ],
                },
                smallImage: {
                    $concat: [
                        DOT_ENV.DOCS_URL,
                        "/products/",
                        "$code",
                        "/pictures/",
                        "$smallImage",
                    ],
                },
            })
            .project({
                _id: 0,
                name: "$name.value",
                code: 1,
                defaultImage: 1,
                smallImage: 1,
                description: "$description.data",
                shortDescription: "$description.value",
                introduction: {
                    image: {
                        $concat: [
                            DOT_ENV.DOCS_URL,
                            "/products/",
                            "$code",
                            "/pictures/",
                            "$introduction.data.image",
                        ],
                    },
                    video: {
                        $concat: [
                            DOT_ENV.DOCS_URL,
                            "/products/",
                            "$code",
                            "/videos/",
                            "$introduction.data.video",
                        ],
                    },
                    title: "$introduction.data.title",
                    text: "$introduction.data.text",
                    items: "$introduction.data.items",
                },
                specializedExamination: {
                    $map: {
                        input: "$specializedExamination.data",
                        as: "item",
                        in: {
                            title: "$$item.title",

                            text: "$$item.text",
                            image: {
                                $concat: [
                                    DOT_ENV.DOCS_URL,
                                    "/products/",
                                    "$code",
                                    "/pictures/",
                                    "$$item.image",
                                ],
                            },
                            video: {
                                $concat: [
                                    DOT_ENV.DOCS_URL,
                                    "/products/",
                                    "$code",
                                    "/videos/",
                                    "$$item.video",
                                ],
                            },
                        },
                    },
                },
                technicalData: "$technicalData.attributes",
                images: 1,
                videos: 1,
                pdfs: 1,
                similarProducts: 1,
                frequentlyAskedQuestions: "$frequentlyAskedQuestions.questions",
            })
            .lookup({
                from: "products",
                localField: "similarProducts.code",
                foreignField: "code",
                as: "similarProducts",
            })
            .addFields({
                similarProducts: {
                    $map: {
                        input: "$similarProducts",
                        as: "item",
                        in: {
                            image: {
                                $concat: [
                                    DOT_ENV.DOCS_URL,
                                    "/products/",
                                    "$code",
                                    "/pictures/",
                                    "$$item.smallImage",
                                ],
                            },
                            code: "$$item.code",
                            name: {
                                $first: {
                                    $filter: {
                                        input: "$$item.name",
                                        as: "el",
                                        cond: { $eq: ["$$el.locale", locale] },
                                    },
                                },
                            },
                        },
                    },
                },
            })
            .addFields({
                similarProducts: {
                    $map: {
                        input: "$similarProducts",
                        as: "item",
                        in: {
                            image: "$$item.image",
                            code: "$$item.code",
                            name: "$$item.name.value"
                        },
                    },
                },

            })

        const product_info = await query.exec();

        return product_info[0];
    } catch (e) {
        console.error(e);
        throw e;
    }
};

module.exports = productRepository;
