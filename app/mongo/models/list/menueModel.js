const mongoose = require("mongoose");
const menuSchema = new mongoose.Schema(
    {
        locale: String,
        items: [
            {
                item: String,
                link: String,
                code: String,
                children: [
                    {
                        item: String,
                        link: String,
                        code: String,
                        children: [
                            {
                                item: String,
                                link: String,
                                code: String,
                                children: [
                                    {
                                        item: String,
                                        link: String,
                                        code: String,
                                        children: [{
                                            item: String, link: String, code: String,
                                        }],
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
