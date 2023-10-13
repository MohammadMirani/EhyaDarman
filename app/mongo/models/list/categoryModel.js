const mongoose = require("mongoose");
const categorySchema = new mongoose.Schema(
    {
        code: { type: String, required: true, unique: true },
        image: { type: String, require: false },
        icon: { type: String },
        name: [
            {
                locale: String,
                value: String,
            },
        ],
        isBookmarked: { type: Boolean, default: false },
        // models: [mongoose.Types.ObjectId], todo
        createdBy: String,
        isActive: { type: Boolean, default: true },
        isDeleted: { type: Boolean, default: false },
    },
    { timestamps: true },
);

const categoryModel = mongoose.model("categories", categorySchema);

module.exports.categoryModel = categoryModel;
