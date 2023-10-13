const mongoose = require("mongoose");
const menuSchema = new mongoose.Schema(
    {
        locale: String,
        tabs: [
            {
                item: String,
                link: String,
                firstIndent: [
                    {
                        name: String,
                        link: String,
                        secondIndent: [
                            {
                                name: String,
                                link: String,
                                thirdIndent: [
                                    {
                                        name: String,
                                        link: String,
                                        fourthIndent: [{ name: String, link: String }],
                                    },
                                ],
                            },
                        ],
                    },
                ],
            },
        ],
    },
    { timestamps: true },
);

const menuModel = mongoose.model("menu", menuSchema);

module.exports.menuModel = menuModel;
