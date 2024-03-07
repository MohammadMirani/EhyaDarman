const mongoose = require("mongoose");
const contactUsSchema = new mongoose.Schema(
  {
    banner: {
      title: String,
      image: String,
    },
    formImage: String,
    locale: String,
  },
  { timestamps: true }
);

const contactUsModel = mongoose.model("contactUs", contactUsSchema);

module.exports.contactUsModel = contactUsModel;
