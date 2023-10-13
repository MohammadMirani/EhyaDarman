const Models = require("../../mongo/models");

const sliderObject = [
    {
        locale: "fa-IR",
        slides: [
            { image: "image_1", title: "ماشین بیهوشی EDP-Neptune", description: "اولین دستگاه CT Scan تولید شده در ایران", link: "/link" },
            { image: "image_2", title: "ماشین بیهوشی EDP-Neptune", description: "اولین دستگاه CT Scan تولید شده در ایران", link: "/link" },
            { image: "image_3", title: "ماشین بیهوشی EDP-Neptune", description: "اولین دستگاه CT Scan تولید شده در ایران", link: "/link" },
        ],
    },
];

const sliderPromise = new Promise(async (resolve, reject) => {
    try {
        await Models.Slider.deleteMany({});
        await Models.Slider.create(sliderObject);
        console.info("[+] Slider updated successfully.");

        resolve();
    } catch (e) {
        console.error("[!] Error in creating and updating slider.", e);
        reject();
    }
});

module.exports = sliderPromise;
