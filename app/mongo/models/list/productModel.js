const mongoose = require("mongoose");
const productSchema = new mongoose.Schema(
    {
        code: { type: String, required: true, unique: true },
        title: [
            {
                value: String,
                locale: String,
            },
        ],
        name: [
            {
                value: String,
                locale: String,
            },
        ],
        categoryId: { type: mongoose.Types.ObjectId },
        categoryCode: { type: String },
        brandId: { type: mongoose.Types.ObjectId },
        brandCode: String,
        modelId: { type: mongoose.Types.ObjectId },
        modelCode: String,
        defaultImage: String,
        smallImage: String,
        defaultVideo: String,
        defaultPdf: String,
        images: [
            {
                url: String,
                isActive: Boolean,
                createdAt: String,
            },
        ],
        videos: [
            {
                url: String,
                isActive: Boolean,
                createdAt: String,
            },
        ],
        pdfs: [
            {
                url: String,
                isActive: Boolean,
                createdAt: String,
            },
        ],
        isActive: Boolean,
        toBeOffered: [{ ref: mongoose.Types.ObjectId, code: String }],
        similarProducts: [{ ref: mongoose.Types.ObjectId, code: String }],
        description: [{ value: String, locale: String }],
        introduction: [{ value: String, locale: String }],
        uniqueProperties: [{ locale: String, items: [{ value: String, order: Number }] }],
        technicalData: [
            {
                locale: String,
                attributes: [
                    {
                        order: Number,
                        attributeGroup: [
                            {
                                title: String,
                                items: [
                                    {
                                        property: String,
                                        unit: String,
                                        values: [String],
                                        order: Number,
                                    },
                                ],
                            },
                        ],
                    },
                ],
            },
        ],
        howToUse: [{ value: String, locale: String }], //todo
        frequentlyAskedQuestions: [
            { locale: String, questions: [{ question: String, answer: String, order: Number }] },
        ],
        ageGroups: String,
        isBookmarked: { type: Boolean, default: false },
        isDeleted: { type: Boolean, default: false },
    },

    { timestamps: true },
);

const productModel = mongoose.model("products", productSchema);

module.exports.productModel = productModel;
