const Models = require("../../mongo/models");

const menuObject = [
    {
        locale: "fa-IR",
        tabs: [
            {
                item: "محصولات و راه حل ها",
                firstIndent: [
                    {
                        name: "ره حل ها",
                        link: "/link",
                        secondIndent: [
                            {
                                name: "ره حل ها بیمارستانی",
                                link: "/link",
                                thirdIndent: [
                                    { name: "برای ER", link: "", fourthIndent: [] },
                                    { name: "برای ICU", link: "", fourthIndent: [] },
                                    { name: "برای CCU", link: "", fourthIndent: [] },
                                    { name: "برای OR", link: "", fourthIndent: [] },
                                ],
                            },
                            {
                                name: "مراقبت های اورژانسی",
                                link: "/link",
                                thirdIndent: [],
                            },
                            {
                                name: "مراقبت های حیاتی",
                                link: "/link",
                                thirdIndent: [],
                            },
                            {
                                name: "تصویربرداری پزشکی",
                                link: "/link",
                                thirdIndent: [],
                            },
                            {
                                name: "تشخیص های آزمایشگاهی",
                                link: "/link",
                                thirdIndent: [],
                            },
                        ],
                    },
                    {
                        name: "محصولات",
                        link: "/link",
                        secondIndent: [
                            {
                                name: "ونتیلاتور",
                                thirdIndent: [
                                    {
                                        name: "سری SV",
                                        link: "/link",
                                        fourthIndent: [
                                            { name: "NEO" },
                                            { name: "DEOMED" },
                                            { name: "TS" },
                                            { name: "DION" },
                                        ],
                                    },
                                    {
                                        name: "سری NB",
                                        link: "/link",
                                        fourthIndent: [
                                            { name: "NEO" },
                                            { name: "DEOMED" },
                                            { name: "TS" },
                                            { name: "DION" },
                                        ],
                                    },
                                    {
                                        name: "دستگاه تنفس خانگی (NIV)",
                                        fourthIndent: [
                                            { name: "ونتیلاتور پورتابل" },
                                            { name: "BiPAP" },
                                            { name: "CPAP" },
                                        ],
                                    },
                                ],
                            },
                            {
                                name: "ماشین بیهوشی",
                                thirdIndent: [
                                    {
                                        name: "سری A",
                                        link: "/link",
                                        fourthIndent: [{ name: "Neptune" }],
                                    },
                                    {
                                        name: "سری WATO",
                                        link: "/link",
                                        fourthIndent: [{ name: "Neptune" }],
                                    },
                                ],
                            },
                            {
                                name: "تصویربرداری",
                                thirdIndent: [
                                    {
                                        name: "رادیوگرافی دیجیتال",
                                        link: "/link",
                                        fourthIndent: [
                                            { name: "CT Scan 32" },
                                            { name: "CT Scan 128" },
                                            { name: "CT Scan 16" },
                                        ],
                                    },
                                    {
                                        name: "رادیوگرافی موبایل",
                                        link: "/link",
                                        fourthIndent: [
                                            { name: "CT Scan 32" },
                                            { name: "CT Scan 128" },
                                            { name: "CT Scan 16" },
                                        ],
                                    },
                                ],
                            },
                            {
                                name: "ماسک",
                                thirdIndent: [
                                    {
                                        name: "Vented",
                                        fourthIndent: [{ name: "Vented_1" }, { name: "Vented_2" }],
                                    },
                                    {
                                        name: "Non Vented",
                                        fourthIndent: [{ name: "Vented_3" }, { name: "Vented_4" }],
                                    },
                                ],
                            },
                        ],
                    },
                ],
            },
            {
                item: "نوآوری",
                firstIndent: [{ name: "نظرات مشتریان", link: "/link" }],
            },
            {
                item: "خدمات",
                firstIndent: [
                    { name: "چشم انداز", link: "/link" },
                    { name: "خدمات پس از فروش", link: "/link" },
                    { name: "آموزش ها", link: "/link" },
                    { name: "مدیا سنتر", link: "/link" },
                    { name: "تماس با ما", link: "/link" },
                    { name: "کلینیک خواب", link: "/link" },
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
                    { name: "اهداف", link: "/link" },
                    { name: "چشم انداز", link: "/link" },
                    { name: "تجارت ما", link: "/link" },
                    { name: "تاریخچه", link: "/link" },
                    { name: "فرهنگ سازمانی", link: "/link" },
                ],
            },
        ],
    },
    {
        locale: "en-US",
        tabs: [
            {
                item: "Products & Solutions",
                firstIndent: [
                    {
                        name: "Solutions",
                        link: "/link",
                        secondIndent: [
                            {
                                name: "Hospitalwide Solutions ",
                                link: "/link",
                                thirdIndent: [
                                    { name: "for ER", link: "", fourthIndent: [] },
                                    { name: "for ICU", link: "", fourthIndent: [] },
                                    { name: "for CCU", link: "", fourthIndent: [] },
                                    { name: "for OR", link: "", fourthIndent: [] },
                                ],
                            },
                            {
                                name: "Emergency Care",
                                link: "/link",
                                thirdIndent: [],
                            },
                            {
                                name: "Critical Care",
                                link: "/link",
                                thirdIndent: [],
                            },
                            {
                                name: "Medical Imaging",
                                link: "/link",
                                thirdIndent: [],
                            },
                            {
                                name: "Laboratory Diagnostics",
                                link: "/link",
                                thirdIndent: [],
                            },
                        ],
                    },
                    {
                        name: "Products",
                        link: "/link",
                        secondIndent: [
                            {
                                name: "Ventilators",
                                thirdIndent: [
                                    {
                                        name: "SV Series",
                                        link: "/link",
                                        fourthIndent: [
                                            { name: "NEO" },
                                            { name: "DEOMED" },
                                            { name: "TS" },
                                            { name: "DION" },
                                        ],
                                    },
                                    {
                                        name: "NB Series",
                                        link: "/link",
                                        fourthIndent: [
                                            { name: "NEO" },
                                            { name: "DEOMED" },
                                            { name: "TS" },
                                            { name: "DION" },
                                        ],
                                    },
                                    {
                                        name: "NIV Series",
                                        fourthIndent: [
                                            { name: "Portable" },
                                            { name: "BiPAP" },
                                            { name: "CPAP" },
                                        ],
                                    },
                                ],
                            },
                            {
                                name: "Anesthesia",
                                thirdIndent: [
                                    {
                                        name: "A Series",
                                        link: "/link",
                                        fourthIndent: [{ name: "Neptune" }],
                                    },
                                    {
                                        name: "WATO Series",
                                        link: "/link",
                                        fourthIndent: [{ name: "Neptune" }],
                                    },
                                ],
                            },
                            {
                                name: "Radiagraphy",
                                thirdIndent: [
                                    {
                                        name: "Digital Radiography",
                                        link: "/link",
                                        fourthIndent: [
                                            { name: "CT Scan 32" },
                                            { name: "CT Scan 128" },
                                            { name: "CT Scan 16" },
                                        ],
                                    },
                                    {
                                        name: "Mobile Radiography",
                                        link: "/link",
                                        fourthIndent: [
                                            { name: "CT Scan 32" },
                                            { name: "CT Scan 128" },
                                            { name: "CT Scan 16" },
                                        ],
                                    },
                                ],
                            },
                            {
                                name: "Mask",
                                thirdIndent: [
                                    {
                                        name: "Vented",
                                        fourthIndent: [{ name: "Vented_1" }, { name: "Vented_2" }],
                                    },
                                    {
                                        name: "Non Vented",
                                        fourthIndent: [{ name: "Vented_3" }, { name: "Vented_4" }],
                                    },
                                ],
                            },
                        ],
                    },
                ],
            },
            {
                item: "Innovation",
                firstIndent: [{ name: "Customer Stories", link: "/link" }],
            },
            {
                item: "Services",
                firstIndent: [
                    { name: "Overview", link: "/link" },
                    { name: "After Sale Services", link: "/link" },
                    { name: "Tutorials", link: "/link" },
                    { name: "Media Center", link: "/link" },
                    { name: "Sleeping Clinic", link: "/link" },
                    { name: "Contact Us", link: "/link" },
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
                    { name: "Purpose", link: "/link" },
                    { name: "Perspective", link: "/link" },
                    { name: "Our Bussiness", link: "/link" },
                    { name: "History", link: "/link" },
                    { name: "Our Culture", link: "/link" },
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
