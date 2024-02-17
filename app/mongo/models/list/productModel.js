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
    brandCode: { type: String, required: true },
    categoryCode: { type: String, required: true },
    subCategoryCode: { type: String, required: true },
    defaultImage: String,
    smallImage: String,
    defaultVideo: String,
    defaultPdf: String,
    articles: [
      {
        articleCode: String,
        articleId: mongoose.Types.ObjectId,
        isActive: Boolean,
        createdAt: String,
      },
    ],
    images: [
      {
        fileName: String,
        isActive: Boolean,
        title: [
          {
            value: String,
            locale: String,
          },
        ],
      },
    ],
    videos: [
      {
        fileName: String,
        isActive: Boolean,
        title: [
          {
            value: String,
            locale: String,
          },
        ],
      },
    ],
    pdfs: [
      {
        fileName: String,
        isActive: Boolean,
        title: [
          {
            value: String,
            locale: String,
          },
        ],
      },
    ],
    isActive: Boolean,
    toBeOffered: [{ ref: mongoose.Types.ObjectId, code: String }],
    similarProducts: [{ ref: mongoose.Types.ObjectId, code: String }],
    description: [{ value: String, locale: String }],
    shortDescription: [{ value: String, locale: String }],
    introduction: [{ value: String, locale: String }],
    uniqueProperties: [
      { locale: String, items: [{ value: String, order: Number }] },
    ],
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
      {
        locale: String,
        questions: [{ question: String, answer: String, order: Number }],
      },
    ],
    ageGroups: String,
    isBookmarked: { type: Boolean, default: false },
    isDeleted: { type: Boolean, default: false },
  },
  { timestamps: true }
);

const productModel = mongoose.model("products", productSchema);

module.exports.productModel = productModel;
