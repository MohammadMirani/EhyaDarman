const Models = require("../../mongo/models");

const categoryObject = [
    {
        code: "CAT-1",
        image: "image1",
        icon: "icon1",
        name: [
            {
                locale: "fa-IR",
                value: "دستگاه تنفس",
            },
        ],
        isBookmarked: true,
    },
    {
        code: "CAT-2",
        image: "image2",
        icon: "icon2",
        name: [
            {
                locale: "fa-IR",
                value: "دستگاه تصویربرداری",
            },
        ],
        isBookmarked: true,
    },
    {
        code: "CAT-3",
        image: "image3",
        icon: "icon3",
        name: [
            {
                locale: "fa-IR",
                value: "اکسسوری",
            },
        ],
        isBookmarked: true,
    },
];

const categoryPromise = new Promise(async (resolve, reject) => {
    try {
        await Models.Category.deleteMany({});
        await Models.Category.create(categoryObject);
        console.info("[+] Category updated successfully.");

        resolve();
    } catch (e) {
        console.error("[!] Error in creating and updating category.", e);
        reject();
    }
});

module.exports = categoryPromise;
