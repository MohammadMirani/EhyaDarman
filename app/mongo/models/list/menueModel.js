const mongoose = require("mongoose");
const menuSchema = new mongoose.Schema(
    {
        locale: String,
        items: [
            {
                item: String,
                link: String,
                children: [
                    {
                        item: String,
                        link: String,
                        children: [
                            {
                                item: String,
                                link: String,
                                children: [
                                    {
                                        item: String,
                                        link: String,
                                        children: [{ item: String, link: String }],
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
