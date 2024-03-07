const mongoose = require("mongoose");
const citySchema = new mongoose.Schema(
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
    provinceCode: String,
    isDeleted: { type: Boolean, default: false },
  },
  { timestamps: true }
);

const cityModel = mongoose.model("cities", citySchema);

module.exports.cityModel = cityModel;
