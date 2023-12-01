const mongoose = require("mongoose");
const jalali = require('jalali-moment');

const newsSchema = new mongoose.Schema(
    {
        code: { type: String, required: true, unique: true },
        newsContext: [
            {
                title: String,
                shortDescription: String,
                description: String,
                locale: String,
            },
        ],
        image: String,
        defaultImage: String,
        smallImage: String,
        createdBy: String,
        type: { type: String, enum: ["article", "news"], default: "news" },
        isDeleted: { type: Boolean, default: false },
    },
    { timestamps: true },
);


const newsModel = mongoose.model("news", newsSchema);

module.exports.newsModel = newsModel;
