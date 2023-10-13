const Models = require("../../mongo/models");

const productsObject = [
    {
        code: "EDP-1",
        name: [
            {
                value: "EDP-Advance",
                locale: "fa-IR",
            },
        ],
        defaultImage: "defaultImage1",
        smallImage: "smallImage1",
        isBookmarked: true,
    },
    {
        code: "EDP-2",
        name: [
            {
                value: "EDP-TS NEO",
                locale: "fa-IR",
            },
        ],
        defaultImage: "defaultImage2",
        smallImage: "smallImage2",
        isBookmarked: true,
    },
    {
        code: "EDP-3",
        name: [
            {
                value: "NeuViz 16 Classic CT NeuViz 16 Classic CT",
                locale: "fa-IR",
            },
        ],
        defaultImage: "defaultImage1",
        smallImage: "smallImage1",
        isBookmarked: true,
    },
    {
        code: "EDP-4",
        name: [
            {
                value: "NeuViz 16 Essence CT",
                locale: "fa-IR",
            },
        ],
        defaultImage: "defaultImage1",
        smallImage: "smallImage1",
        isBookmarked: true,
    },
    {
        code: "EDP-5",
        name: [
            {
                value: "NeuViz 128 CT",
                locale: "fa-IR",
            },
        ],
        defaultImage: "defaultImage1",
        smallImage: "smallImage1",
        isBookmarked: true,
    },
    {
        code: "EDP-6",
        name: [
            {
                value: "Neusoft - Superstar 0.35T",
                locale: "fa-IR",
            },
        ],
        defaultImage: "defaultImage1",
        smallImage: "smallImage1",
        isBookmarked: true,
    },
    {
        code: "EDP-7",
        name: [
            {
                value: "Neusoft - NSM - S15P",
                locale: "fa-IR",
            },
        ],
        defaultImage: "defaultImage1",
        smallImage: "smallImage1",
        isBookmarked: true,
    },
    {
        code: "EDP-8",
        name: [
            {
                value: "Resmed - AirSense 10 Elite",
                locale: "fa-IR",
            },
        ],
        defaultImage: "defaultImage1",
        smallImage: "smallImage1",
        isBookmarked: true,
    },
    {
        code: "EDP-9",
        name: [
            {
                value: "Resmed - AirSense 10 AutoSet",
                locale: "fa-IR",
            },
        ],
        defaultImage: "defaultImage1",
        smallImage: "smallImage1",
        isBookmarked: true,
    },
    {
        code: "EDP-10",
        name: [
            {
                value: "Resmed - Lumis™ 150 VPAP ST",
                locale: "fa-IR",
            },
        ],
        defaultImage: "defaultImage1",
        smallImage: "smallImage1",
        isBookmarked: true,
    },
];

const productPromise = new Promise(async (resolve, reject) => {
    try {
        await Models.Product.deleteMany({});
        await Models.Product.create(productsObject);
        console.info("[+] News updated successfully.");

        resolve();
    } catch (e) {
        console.error("[!] Error in creating and updating news.", e);
        reject();
    }
});

module.exports = productPromise;
