const Models = require("../../mongo/models");

const partnerObject = [
    {
        icon: "icon1",
        title: "ResMed",
        name: [
            {
                locale: "fa-IR",
                value: "ResMed",
            },
        ],
        isBookmarked: true,
    },
    {
        icon: "icon2",
        title: "Airon",
        name: [
            {
                locale: "fa-IR",
                value: "Airon",
            },
        ],
        isBookmarked: true,
    },
    {
        icon: "icon3",
        title: "CHARMCARE",
        name: [
            {
                locale: "fa-IR",
                value: "CHARMCARE",
            },
        ],
        isBookmarked: true,
    },
    {
        icon: "icon4",
        title: "Neusoft",
        name: [
            {
                locale: "fa-IR",
                value: "Neusoft",
            },
        ],
        isBookmarked: true,
    },
    {
        icon: "icon5",
        title: "oKom",
        name: [
            {
                locale: "fa-IR",
                value: "oKom",
            },
        ],
        isBookmarked: true,
    },
    {
        icon: "icon6",
        title: "INTUBRITE",
        name: [
            {
                locale: "fa-IR",
                value: "INTUBRITE",
            },
        ],
        isBookmarked: true,
    },
];

const partnerPromise = new Promise(async (resolve, reject) => {
    try {
        await Models.Partners.deleteMany({});
        await Models.Partners.create(partnerObject);
        console.info("[+] Partners updated successfully.");

        resolve();
    } catch (e) {
        console.error("[!] Error in creating and updating partners.", e);
        reject();
    }
});

module.exports = partnerPromise;
