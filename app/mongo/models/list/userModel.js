const mongoose = require("mongoose");
const userSchema = new mongoose.Schema(
  {
    firstName: String,
    lastName: String,
    username: String,
    password: String,
    phone: { type: String, unique: true },
    email: { type: String, unique: true },
    isAdmin: { type: Boolean, default: false },
    isBanned: { type: Boolean, default: false },
    lastLogin: String,
    isDeleted: { type: Boolean, default: false },
    isPhoneVerified : {type :  Boolean , default : false},
    isEmailVerified : {type :  Boolean , default : false}
  },
  { timestamps: true }
);

const userModel = mongoose.model("users", userSchema);


module.exports.userModel = userModel;
