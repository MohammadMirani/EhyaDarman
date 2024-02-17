const mongoose = require("mongoose");
const subCategorySchema = new mongoose.Schema(
    {
        code: { type: String, required: true, unique: true },
        categoryCode: { type: String, required: true, },
        name: [
            {
                locale: String,
                value: String,
            },
        ],
        createdBy: String,
        isActive: { type: Boolean, default: true },
        isDeleted: { type: Boolean, default: false },
    },
    { timestamps: true },
);

const subCategoryModel = mongoose.model("subCategories", subCategorySchema);

module.exports.subCategoryModel = subCategoryModel;
