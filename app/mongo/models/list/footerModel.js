const mongoose = require("mongoose");
const footerSchema = new mongoose.Schema(
  {
    locale: String,
    context: [{ items: [], section: String, title: String }],
    socialMedias: [{ name: String, title: String, icon: String, link: String }],
  },
  { timestamps: true }
);

const footerModel = mongoose.model("footers", footerSchema);

module.exports.footerModel = footerModel;
