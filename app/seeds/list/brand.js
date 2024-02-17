const Models = require("../../mongo/models");

const brandObject = [
    {
        code: "BRD-1",
        image: "default.png",
        icon: "icon1",
        name: [
            {
                locale: "fa-IR",
                value: "گروه محصول تولیدی",
            },
            {
                locale: "En",
                value: "EDP",
            },
        ],
    },
    {
        code: "BRD-2",
        image: "default.png",
        icon: "icon2",
        name: [
            {
                locale: "fa-IR",
                value: "RESMED",
            },
            {
                locale: "En",
                value: "RESMED",
            },
        ],
    },
    {
        code: "BRD-3",
        image: "default.png",
        icon: "icon2",
        name: [
            {
                locale: "fa-IR",
                value: "گروه محصول بازرگانی",
            },
            {
                locale: "En",
                value: "NonEDP",
            },
        ],
    },

];

const brandPromise = new Promise(async (resolve, reject) => {
    try {
        await Models.Brand.deleteMany({});
        await Models.Brand.create(brandObject);
        console.info("[+] Brand updated successfully.");

        resolve();
    } catch (e) {
        console.error("[!] Error in creating and updating Brand.", e);
        reject();
    }
});

module.exports = brandPromise;
