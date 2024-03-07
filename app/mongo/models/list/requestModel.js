const mongoose = require("mongoose");

const requestSchema = new mongoose.Schema(
  {
    fullName: String,
    email: String,
    phone: String,
    city: String,
    description: String,
    isDeleted: { type: Boolean, default: false },
  },
  { timestamps: true }
);

const requestModel = mongoose.model("requests", requestSchema);

module.exports.requestModel = requestModel;
