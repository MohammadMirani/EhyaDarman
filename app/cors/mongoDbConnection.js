const DOT_ENV = require("../configs/general");
const mongoose = require("mongoose");
mongoose.set("strictQuery", false);

function mongoDbConnection() {
    return new Promise((resolve, reject) => {
        mongoose
            .connect(DOT_ENV.MONGO_URL)
            .then(() => {
                console.info("[+] Mongoose is successfully connected.");
                resolve();
            })
            .catch((error) => {
                console.error("[!] Mongoose can not connect.", error);
                reject();
                // throw "[!] Mongoose can not connect.";
            });
    });
}

module.exports = mongoDbConnection;
