const mongoose = require("mongoose");
const categorySchema = new mongoose.Schema(
    {
        code: { type: String, required: true, unique: true },
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

const categoryModel = mongoose.model("categories", categorySchema);

module.exports.categoryModel = categoryModel;
