const Models = require("../../mongo/models");

const categoryObject = [
    {
        code: "CAT-1",
        image: "default.png",
        icon: "icon1",
        brandCode: "BRD-1",
        name: [
            {
                locale: "fa-IR",
                value: "محصولات تنفسی بیمارستانی",
            },
        ],
    },
    {
        code: "CAT-2",
        image: "default.png",
        icon: "icon2",
        brandCode: "BRD-1",
        name: [
            {
                locale: "fa-IR",
                value: "محصولات تصویر برداری",
            },
        ],
    },
    {
        code: "CAT-3",
        image: "default.png",
        icon: "icon3",
        brandCode: "BRD-1",
        name: [
            {
                locale: "fa-IR",
                value: "محصولات پنوماتیک",
            },
        ],
    },
    {
        code: "CAT-4",
        image: "default.png",
        icon: "icon3",
        brandCode: "BRD-1",
        name: [
            {
                locale: "fa-IR",
                value: "محصولات ابزار دقیق",
            },
        ],
    },
    {
        code: "CAT-5",
        image: "default.png",
        icon: "icon3",
        brandCode: "BRD-2",
        name: [
            {
                locale: "fa-IR",
                value: "AIRON",
            },
        ],
    },
    {
        code: "CAT-6",
        image: "default.png",
        icon: "icon3",
        brandCode: "BRD-2",
        name: [
            {
                locale: "fa-IR",
                value: "IBA",
            },
        ],
    },
    {
        code: "CAT-7",
        image: "default.png",
        icon: "icon3",
        brandCode: "BRD-2",
        name: [
            {
                locale: "fa-IR",
                value: "Neusoft",
            },
        ],
    },
    {
        code: "CAT-8",
        image: "default.png",
        icon: "icon3",
        brandCode: "BRD-2",
        name: [
            {
                locale: "fa-IR",
                value: "Natus",
            },
        ],
    },
    {
        code: "CAT-9",
        image: "default.png",
        icon: "icon3",
        brandCode: "BRD-2",
        name: [
            {
                locale: "fa-IR",
                value: "Intubrite",
            },
        ],
    },
    {
        code: "CAT-10",
        image: "default.png",
        icon: "icon3",
        brandCode: "BRD-2",
        name: [
            {
                locale: "fa-IR",
                value: "Ekom",
            },
        ],
    },
    {
        code: "CAT-11",
        image: "default.png",
        icon: "icon3",
        brandCode: "BRD-2",
        name: [
            {
                locale: "fa-IR",
                value: "AutoMedx",
            },
        ],
    },
    {
        code: "CAT-12",
        image: "default.png",
        icon: "icon3",
        brandCode: "BRD-3",
        name: [
            {
                locale: "fa-IR",
                value: "دستگاه های کمک تنفسی",
            },
        ],
    },
    {
        code: "CAT-13",
        image: "default.png",
        icon: "icon3",
        brandCode: "BRD-3",
        name: [
            {
                locale: "fa-IR",
                value: "لوازم جانبی",
            },
        ],
    },
    {
        code: "CAT-14",
        image: "default.png",
        icon: "icon3",
        brandCode: "BRD-3",
        name: [
            {
                locale: "fa-IR",
                value: "دستگاه تشخیص اختلالات خواب",
            },
        ],
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
