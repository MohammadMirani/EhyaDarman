const mongoose = require("mongoose");
const branchSchema = new mongoose.Schema(
  {
    title: [
      {
        locale: String,
        value: String,
      },
    ],
    code: String,
    address: [
      {
        locale: String,
        value: String,
      },
    ],
    provinceCode: String,
    cityCode: String,
    phone: String,
    mobile: String,
    fax: String,
    website: String,
    email: String,
    image: String,
    isDefault: { type: Boolean, default: false },
    socialMedias: [{ name: String, title: String, icon: String, link: String }],
  },

  { timestamps: true }
);

const branchModel = mongoose.model("branches", branchSchema);

module.exports.branchModel = branchModel;
