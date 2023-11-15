const mongoose = require("mongoose");
const customerSchema = new mongoose.Schema(
    {
        fistName: String,
        lastName: String,
        username: { type: String, unique: true },
        password: String,
        isBanned: { type: Boolean, default: false },
        lastLogin: String,
        addresses: [{}],
        nationalCode: String,
        phone: String,
        phone: String,
        email: String,
        isDeleted: { type: Boolean, default: false },
    },
    { timestamps: true },
);

const customerModel = mongoose.model("customers", customerSchema);

module.exports.customerModel = customerModel;
