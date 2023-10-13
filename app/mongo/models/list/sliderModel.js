const mongoose = require("mongoose");
const sliderSchema = new mongoose.Schema(
    {
        locale: String,
        slides: [{ image: String, title: String, description: String, link: String, isDeleted: { type: Boolean, default: false } }],
    },
    { timestamps: true },
);

const sliderModel = mongoose.model("sliders", sliderSchema);

module.exports.sliderModel = sliderModel;
