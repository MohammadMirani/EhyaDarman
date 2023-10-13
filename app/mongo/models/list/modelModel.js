const mongoose = require("mongoose");
const modelSchema = new mongoose.Schema(
    {
        code: { type: String, required: true, unique: true },

        name: [
            {
                locale: String,
                value: String,
            },
        ],
        categoryCode: String,
        categoryId: mongoose.Types.ObjectId,
        isActive: { type: Boolean, default: true },
        isDeleted: { type: Boolean, default: false },
    },
    { timestamps: true },
);

const modelModel = mongoose.model("models", modelSchema);

module.exports.modelModel = modelModel;
