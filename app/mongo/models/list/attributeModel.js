const mongoose = require("mongoose");
const attributeSchema = new mongoose.Schema(
    {
        code: {
            type: String,
            require: true,
            unique: true,
        },
        attributeGroup: String,
        // attribute: [{
        //     locale: String,
        //
        // ],
        isDeleted: { type: Boolean, default: false },
    },
    { timestamps: true },
);

const attributeModel = mongoose.model("attributes", attributeSchema);

module.exports.attributeModel = attributeModel;

//[{ locale: String, attribute: [{ attributeGroup: [{ title: String, items: [{property :String , unit: }] }] }] }]
