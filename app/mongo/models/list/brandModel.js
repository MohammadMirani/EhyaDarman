const mongoose = require("mongoose");
const brandSchema = new mongoose.Schema(
    {
        code: {
            type: String,
            require: true,
            unique: true,
        },
        name: [
            {
                locale: String,
                value: String,
            },
        ],
        isActive: { type: Boolean, default: true },
        isDeleted: { type: Boolean, default: false },
    },
    { timestamps: true },
);

const brandModel = mongoose.model("brands", brandSchema);

module.exports.brandModel = brandModel;
