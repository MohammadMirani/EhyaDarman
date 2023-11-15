const Models = require("../../mongo/models");

const productsObject = [
    {
        code: "01-EDP-TS",
        name: [
            {
                value: "01-EDP-TS",
                locale: "fa-IR",
            },
        ],
        defaultImage: "default.png",
        smallImage: "smallImage1",
        isBookmarked: true,
    },
    {
        code: "23-IntuBrite-VLS6600",
        name: [
            {
                value: "EDP-TS NEO",
                locale: "fa-IR",
            },
        ],
        defaultImage: "default.png",
        smallImage: "smallImage2",
        isBookmarked: true,
    },
    {
        code: "25-Neusoft-CT 16 Slice",
        name: [
            {
                value: "NeuViz 16 Classic CT NeuViz 16 Classic CT",
                locale: "fa-IR",
            },
        ],
        defaultImage: "default.png",
        smallImage: "smallImage1",
        isBookmarked: true,
    },
    {
        code: "31-Neusoft-CT 64 Slice",
        name: [
            {
                value: "NeuViz 16 Essence CT",
                locale: "fa-IR",
            },
        ],
        defaultImage: "default.png",
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
        isBookmarked: false,
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
        isBookmarked: false,
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
        isBookmarked: false,
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
        isBookmarked: false,
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
        isBookmarked: false,
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
        isBookmarked: false,
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
