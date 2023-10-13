const mongoose = require("mongoose");
const userSchema = new mongoose.Schema(
    {
        fistName: String,
        lastName: String,
        username: { type: String, unique: true },
        password: String,
        isAdmin: { type: Boolean, default: false },
        isBanned: { type: Boolean, default: false },
        lastLogin: String,
        isDeleted: { type: Boolean, default: false },
    },
    { timestamps: true },
);

const userModel = mongoose.model("users", userSchema);

module.exports.userModel = userModel;
