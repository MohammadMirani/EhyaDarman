const Models = require("../../mongo/models");

const menuObject = [
    {
        locale: "fa-IR",
        items: [
            {
                item: "محصولات",
                link: "/link",
                firstIndent: [
                    {
                        item : "ونتیلاتور",
                        secondIndent: [
                            {
                                item: "سری SV",
                                link: "/link",
                                thirdIndent: [
                                    { item: "NEO" },
                                    { item: "DEOMED" },
                                    { item: "TS" },
                                    { item: "DION" },
                                ],
                            },
                            {
                                item: "سری NB",
                                link: "/link",
                                thirdIndent: [
                                    { item: "NEO" },
                                    { item: "DEOMED" },
                                    { item: "TS" },
                                    { item: "DION" },
                                ],
                            },
                            {
                                item: "دستگاه تنفس خانگی (NIV)",
                                thirdIndent: [
                                    { item: "ونتیلاتور پورتابل" },
                                    { item: "BiPAP" },
                                    { item: "CPAP" },
                                ],
                            },
                        ],
                    },
                    {
                        item: "ماشین بیهوشی",
                        secondIndent: [
                            {
                                item: "سری A",
                                link: "/link",
                                thirdIndent: [{ item: "Neptune" }],
                            },
                            {
                                item: "سری WATO",
                                link: "/link",
                                fourthIndent: [{ item: "Neptune" }],
                            },
                        ],
                    },
                    {
                        item: "تصویربرداری",
                        secondIndent: [
                            {
                                item: "رادیوگرافی دیجیتال",
                                link: "/link",
                                thirdIndent: [
                                    { item: "CT Scan 32" },
                                    { item: "CT Scan 128" },
                                    { item: "CT Scan 16" },
                                ],
                            },
                            {
                                item: "رادیوگرافی موبایل",
                                link: "/link",
                                thirdIndent: [
                                    { item: "CT Scan 32" },
                                    { item: "CT Scan 128" },
                                    { item: "CT Scan 16" },
                                ],
                            },
                        ],
                    },
                    {
                        item: "ماسک",
                        secondIndent: [
                            {
                                item: "Vented",
                                thirdIndent: [{ item: "Vented_1" }, { item: "Vented_2" }],
                            },
                            {
                                item: "Non Vented",
                                thirdIndent: [{ item: "Vented_3" }, { item: "Vented_4" }],
                            },
                        ],
                    },
                ],
            },

            {
                item: "نوآوری",
                firstIndent: [{ item: "نظرات مشتریان", link: "/link" }],
            },
            {
                item: "خدمات",
                firstIndent: [
                    { item: "چشم انداز", link: "/link" },
                    { item: "خدمات پس از فروش", link: "/link" },
                    { item: "آموزش ها", link: "/link" },
                    { item: "مدیا سنتر", link: "/link" },
                    { item: "تماس با ما", link: "/link" },
                    { item: "کلینیک خواب", link: "/link" },
                ],
            },
            {
                item: "اخبار و مقالات",
                firstIndent: [],
            },
            {
                item: "فرصت های شغلی",
            },
            {
                item: "درباره ما",
                firstIndent: [
                    { item: "اهداف", link: "/link" },
                    { item: "چشم انداز", link: "/link" },
                    { item: "تجارت ما", link: "/link" },
                    { item: "تاریخچه", link: "/link" },
                    { item: "فرهنگ سازمانی", link: "/link" },
                ],
            },
        ],
    },
    {
        locale: "en-US",
        items: [
            {
                item: "Products",
                firstIndent: [
                    {
                        item: "Solutions",
                        link: "/link",
                        secondIndent: [
                            {
                                item: "Hospitalwide Solutions ",
                                link: "/link",
                                thirdIndent: [
                                    { item: "for ER", link: "", fourthIndent: [] },
                                    { item: "for ICU", link: "", fourthIndent: [] },
                                    { item: "for CCU", link: "", fourthIndent: [] },
                                    { item: "for OR", link: "", fourthIndent: [] },
                                ],
                            },
                            {
                                item: "Emergency Care",
                                link: "/link",
                                thirdIndent: [],
                            },
                            {
                                item: "Critical Care",
                                link: "/link",
                                thirdIndent: [],
                            },
                            {
                                item: "Medical Imaging",
                                link: "/link",
                                thirdIndent: [],
                            },
                            {
                                item: "Laboratory Diagnostics",
                                link: "/link",
                                thirdIndent: [],
                            },
                        ],
                    },
                    {
                        item: "Products",
                        link: "/link",
                        secondIndent: [
                            {
                                item: "Ventilators",
                                thirdIndent: [
                                    {
                                        item: "SV Series",
                                        link: "/link",
                                        fourthIndent: [
                                            { item: "NEO" },
                                            { item: "DEOMED" },
                                            { item: "TS" },
                                            { item: "DION" },
                                        ],
                                    },
                                    {
                                        item: "NB Series",
                                        link: "/link",
                                        fourthIndent: [
                                            { item: "NEO" },
                                            { item: "DEOMED" },
                                            { item: "TS" },
                                            { item: "DION" },
                                        ],
                                    },
                                    {
                                        item: "NIV Series",
                                        fourthIndent: [
                                            { item: "Portable" },
                                            { item: "BiPAP" },
                                            { item: "CPAP" },
                                        ],
                                    },
                                ],
                            },
                            {
                                item: "Anesthesia",
                                thirdIndent: [
                                    {
                                        item: "A Series",
                                        link: "/link",
                                        fourthIndent: [{ item: "Neptune" }],
                                    },
                                    {
                                        item: "WATO Series",
                                        link: "/link",
                                        fourthIndent: [{ item: "Neptune" }],
                                    },
                                ],
                            },
                            {
                                item: "Radiagraphy",
                                thirdIndent: [
                                    {
                                        item: "Digital Radiography",
                                        link: "/link",
                                        fourthIndent: [
                                            { item: "CT Scan 32" },
                                            { item: "CT Scan 128" },
                                            { item: "CT Scan 16" },
                                        ],
                                    },
                                    {
                                        item: "Mobile Radiography",
                                        link: "/link",
                                        fourthIndent: [
                                            { item: "CT Scan 32" },
                                            { item: "CT Scan 128" },
                                            { item: "CT Scan 16" },
                                        ],
                                    },
                                ],
                            },
                            {
                                item: "Mask",
                                thirdIndent: [
                                    {
                                        item: "Vented",
                                        fourthIndent: [{ item: "Vented_1" }, { item: "Vented_2" }],
                                    },
                                    {
                                        item: "Non Vented",
                                        fourthIndent: [{ item: "Vented_3" }, { item: "Vented_4" }],
                                    },
                                ],
                            },
                        ],
                    },
                ],
            },
            {
                item: "Innovation",
                firstIndent: [{ item: "Customer Stories", link: "/link" }],
            },
            {
                item: "Services",
                firstIndent: [
                    { item: "Overview", link: "/link" },
                    { item: "After Sale Services", link: "/link" },
                    { item: "Tutorials", link: "/link" },
                    { item: "Media Center", link: "/link" },
                    { item: "Sleeping Clinic", link: "/link" },
                    { item: "Contact Us", link: "/link" },
                ],
            },
            {
                item: "News & Articles",
                firstIndent: [],
            },
            {
                item: "Job Offers",
            },
            {
                item: "About Us",
                firstIndent: [
                    { item: "Purpose", link: "/link" },
                    { item: "Perspective", link: "/link" },
                    { item: "Our Bussiness", link: "/link" },
                    { item: "History", link: "/link" },
                    { item: "Our Culture", link: "/link" },
                ],
            },
        ],
    },
];

const createMenuPromise = new Promise(async (resolve, reject) => {
    try {
        await Models.Menu.deleteMany({});
        await Models.Menu.create(menuObject);
        console.info("[+] Menu updated successfully.");

        return resolve();
    } catch (e) {
        console.error("[!] Error in creating and updating menu.", e);
        return reject();
    }
});

module.exports = createMenuPromise;
