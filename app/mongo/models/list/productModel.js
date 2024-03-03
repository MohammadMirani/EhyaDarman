const mongoose = require("mongoose");
const productSchema = new mongoose.Schema(
  {
    code: { type: String, required: true, unique: true },
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
    images: [
      {
        name: String,
        isDefault: Boolean,
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
        name: String,
        isDefault: Boolean,
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
        name: String,
        isDefault: Boolean,
        title: [
          {
            value: String,
            locale: String,
          },
        ],
      },
    ],
    shortDescription: [{ value: String, locale: String }],
    description: [
      {
        locale: String,
        data: { title: String, text: String, items: [{ text: String }] },
      },
    ],
    introduction: [
      {
        locale: String,
        data: {
          title: String,
          text: String,
          video: String,
          image: String,
          items: [{ text: String }],
        },
      },
    ],
    specializedExamination: [
      {
        locale: String,
        data: [
          {
            title: String,
            text: String,
            image: String,
            video: String,
            index: Number,
          },
        ],
      },
    ],
    technicalData: [
      {
        locale: String,
        attributes: [
          {
            key: String,
            values: [String],
          },
        ],
      },
    ],
    howToUse: [{ locale: String, items: [{ value: String }] }],
    frequentlyAskedQuestions: [
      {
        locale: String,
        questions: [{ question: String, answer: String, order: Number }],
      },
    ],
    toBeOffered: [{ code: String }],
    similarProducts: [{ code: String }],
    isBookmarked: { type: Boolean, default: false },
    isDeleted: { type: Boolean, default: false },
  },
  { timestamps: true }
);

const productModel = mongoose.model("products", productSchema);

module.exports.productModel = productModel;
