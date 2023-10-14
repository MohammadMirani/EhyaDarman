const mongoose = require("mongoose");
const footerSchema = new mongoose.Schema(
  {
    locale: String,
    products: [
      {
        item: String,
        link: String,
      },
    ],
    quickAccess: [
      {
        item: String,
        link: String,
      },
    ],
    socialMedias: [{ name: String, title: String, icon: String, link: String }],
    contactUs: [
      {
        name: String,
        title: String,
        icon: String,
        value: String,
        link: String,
      },
    ],
  },
  { timestamps: true }
);

const footerModel = mongoose.model("footers", footerSchema);

module.exports.footerModel = footerModel;
