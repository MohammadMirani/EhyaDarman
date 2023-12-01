const mongoose = require("mongoose");
const menuSchema = new mongoose.Schema(
    {
        locale: String,
        items: [
            {
                item: String,
                link: String,
                firstIndent: [
                    {
                        item: String,
                        link: String,
                        secondIndent: [
                            {
                                item: String,
                                link: String,
                                thirdIndent: [
                                    {
                                        item: String,
                                        link: String,
                                        fourthIndent: [{ item: String, link: String }],
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
