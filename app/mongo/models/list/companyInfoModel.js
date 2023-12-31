const mongoose = require("mongoose");
const companyInfoSchema = new mongoose.Schema(
    {
        locale: String,
        info: [
            {
                section: String,
                title: String,
                shortDescription: String,
                defaultImage : String ,
                description: String,
                smallImage: String,
                image: String,
                isDeleted: { type: Boolean, default: false },
            },
        ],
    },
    { timestamps: true },
);

const companyModel = mongoose.model("companyInfo", companyInfoSchema);

module.exports.companyModel = companyModel;
