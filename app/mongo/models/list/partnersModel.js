const mongoose = require("mongoose");
const partnerSchema = new mongoose.Schema(
    {
        icon: String,
        title: String,
        name: [
            {
                locale: String,
                value: String,
            },
        ],
        isBookmarked: { type: Boolean, default: false },
        isDeleted: { type: Boolean, default: false },
    },
    { timestamps: true },
);

const partnerModel = mongoose.model("partners", partnerSchema);

module.exports.partnerModel = partnerModel;
