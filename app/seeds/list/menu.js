const Models = require("../../mongo/models");

const menuObject = [
    {
        locale: "fa-IR",
        items: [
            {
                item: "محصولات",
                link: "",
                children: [
                    {
                        item: "گروه محصول تولیدی",
                        code: "1-0-0",
                        children: [
                            {
                                item: "محصولات تنفسی بیمارستانی",
                                link: "",
                                code: "1-1-0",
                                children: [
                                    {
                                        item: "ونتیلاتور",
                                        link: "",
                                        code: "1-1-1",
                                        children: [
                                            { item: "TS ونتیلاتور", link: "/EPC-1" },
                                            { item: "TS NEO ونتیلاتور نوزادان", link: "/EPC-2" },
                                            { item: "Diomed ونتیلاتور", link: "/EPC-3" },
                                            { item: "Dion ونتیلاتور", link: "/EPC-4" },
                                            { item: "Diomed Neo ونتیلاتور نوزادان", link: "/EPC-5" },
                                        ],
                                    },
                                    {
                                        item: "ماشین بیهوشی",
                                        link: "",
                                        code: "1-1-2",
                                        children: [
                                            { item: "ماشین بیهوشی اورانوس", link: "/EPC-6" },
                                            { item: "ماشین بیهوشی نپتون", link: "/EPC-7" },
                                        ],
                                    },
                                ],
                            },
                            {
                                item: "محصولات تصویربرداری",
                                link: "",
                                code: "1-2-0",
                                children: [
                                    {
                                        item: "CT Scan",
                                        link: "",
                                        code: "1-2-3",
                                        children: [{ item: "CT Scan EDP-16", link: "/EPC-8" }],
                                    },
                                ],
                            },
                            {
                                item: "محصولات پنوماتیک",
                                code: "1-3-0",
                                children: [
                                    { item: "پروپرشنال ولو", code: "1-3-4" },
                                    { item: "شیر برقی قطع و وصل", code: "1-3-5" },
                                    { item: "رگولاتور فشار گاز", code: "1-3-6" },
                                ],
                            },
                            {
                                item: "محصولات ابزار دقیق",
                                code: "1-4-0",
                                children: [
                                    { item: "تستر قطعات پنوماتیک ونتیلاتور", code: "1-4-7" },
                                    { item: "تستر اکسپراتوری ولو ونتیلاتور", code: "1-4-8" },
                                    { item: "تستر منیفلد ونتیلاتور", code: "1-4-9" },
                                    { item: "تستر ولو پنوماتیکی", code: "1-4-10" },
                                    { item: "کالیبراتور ونتیلاسیون", code: "1-4-11" },
                                ],
                            },
                        ],
                    },
                    {
                        item: "گروه محصول بازرگانی",
                        code: "3-",
                        children: [
                            {
                                item: "AIRON",
                                code: "3-5",
                                link: "",
                                children: [
                                    {
                                        item: "ونتیلاتور پرتابل سازگار با محیط MRI",
                                        code: "3-5-12",
                                        children: [
                                            {
                                                item: "Pneuton",
                                                link: "/",
                                            },
                                            {
                                                item: "Pneuton Mini",
                                                link: "/",
                                            },
                                        ],
                                    },
                                ],
                            },
                            {
                                item: "IBA",
                                code: "3-6",
                                link: "",
                                children: [
                                    {
                                        item: "دستگاه ساخت رادیو دارو",
                                        code: "3-6-15",
                                        children: [
                                            {
                                                item: "CYCLOTRON",
                                            },
                                        ],
                                    },
                                ],
                            },
                            {
                                item: "Neusoft",
                                code: "3-7",
                                link: "",
                                children: [
                                    {
                                        item: "PET CT",
                                        code: "3-7-16",
                                        children: [
                                            {
                                                item: "Neusight",
                                            },
                                        ],
                                    },
                                    {
                                        item: "سی تی اسکن 128 اسلایس",
                                        code: "3-7-17",
                                        children: [
                                            {
                                                item: "N/A",
                                            },
                                        ],
                                    },
                                ],
                            },
                            {
                                item: "Natus",
                                link: "",
                                code: "3-8",
                                children: [
                                    {
                                        item: "پلی سمنوگرافی",
                                        code: "3-8-19",
                                        children: [
                                            {
                                                item: "N7000",
                                                link: "/",
                                            },
                                            {
                                                item: "MPR",
                                                link: "/",
                                            },
                                            {
                                                item: "S4500",
                                                link: "/",
                                            },
                                        ],
                                    },
                                ],
                            },
                            {
                                item: "Intubrite",
                                code: "3-9",
                                children: [
                                    {
                                        item: " ویدیولارنگوسکوپ",
                                        code: "3-9-20",
                                        children: [
                                            {
                                                item: "VLS6600",
                                                link: "/",
                                            },
                                        ],
                                    },
                                ],
                            },
                            {
                                item: "Ekom",
                                link: "",
                                code: "3-10",
                                children: [
                                    {
                                        item: "کمپرسور هوای فشرده پزشکی",
                                        code: "3-10-21",
                                        children: [
                                            {
                                                item: "DK50",
                                                link: "/",
                                            },
                                            {
                                                item: "Tower",
                                                link: "/",
                                            },
                                        ],
                                    },
                                ],
                            },
                            {
                                item: "AutoMedx",
                                code: "3-11",
                                link: "",
                                children: [
                                    {
                                        item: "ونتیلاتور پرتابل",
                                        code: "3-11-14",
                                        children: [
                                            {
                                                item: "SAVE II",
                                                link: "/",
                                            },
                                        ],
                                    },
                                ],
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
            // {
            //     item: "فرصت های شغلی",
            // },
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
            {
                item: "RESMED",
                link: "",
                code: "2-",
                children: [
                    {
                        item: "دستگاه های کمک تنفسی",
                        code: "2-12",
                        children: [
                            {
                                item: "CPAP",
                                code: "2-12-22",
                                children: [
                                    { item: "elite", link: "/", },
                                    { item: "auto", link: "/" }
                                ],
                            },
                            {
                                item: "Bipap",
                                code: "2-12-23",
                                children: [
                                    { item: "vauto", link: "/" },
                                    { item: "100s" , link: "/"},
                                    { item: "100st" , link: "/"},
                                    { item: "150st" , link: "/"},
                                ],
                            },
                            {
                                item: "ونتیلاتور پرتابل",
                                code: "2-12-24",
                                children: [
                                    { item: "astral 100", link: "/" },
                                    { item: "astral 150", link: "/" }
                                ],
                            },
                        ],
                    },
                    {
                        item: "لوازم جانبی",
                        code: "2-13",
                        children: [
                            {
                                item: "انواع ماسک",
                                code: "2-13-25",

                            },
                            {
                                item: "انواع تیوبینگ",
                                code: "2-13-26",
                            },
                        ],
                    },
                    {
                        item: "دستگاه تشخیص اختلالات خواب",
                        code: "2-14",
                        children: [
                            {
                                item: "Apnea Link",
                                code: "2-14-27",
                            },
                            {
                                item: "PSG",
                                code: "2-14-28",
                                children: [
                                    { item: "MPR", link: "/" },
                                    { item: "S4500", link: "/" },
                                    { item: "N7000", link: "/" },
                                ],
                            },
                        ],
                    },
                    {
                        item: "نمایندگان و شعب",
                    },
                    {
                        item: "خدمات پس از فروش",
                    },
                    {
                        item: "مدیا سنتر",
                    },
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
                        children: [
                            {
                                item: "Hospitalwide Solutions ",
                                link: "/link",
                                children: [
                                    { item: "for ER", link: "", children: [] },
                                    { item: "for ICU", link: "", children: [] },
                                    { item: "for CCU", link: "", children: [] },
                                    { item: "for OR", link: "", children: [] },
                                ],
                            },
                            {
                                item: "Emergency Care",
                                link: "/link",
                                children: [],
                            },
                            {
                                item: "Critical Care",
                                link: "/link",
                                children: [],
                            },
                            {
                                item: "Medical Imaging",
                                link: "/link",
                                children: [],
                            },
                            {
                                item: "Laboratory Diagnostics",
                                link: "/link",
                                children: [],
                            },
                        ],
                    },
                    {
                        item: "Products",
                        link: "/link",
                        children: [
                            {
                                item: "Ventilators",
                                children: [
                                    {
                                        item: "SV Series",
                                        link: "/link",
                                        children: [
                                            { item: "NEO" },
                                            { item: "DEOMED" },
                                            { item: "TS" },
                                            { item: "DION" },
                                        ],
                                    },
                                    {
                                        item: "NB Series",
                                        link: "/link",
                                        children: [
                                            { item: "NEO" },
                                            { item: "DEOMED" },
                                            { item: "TS" },
                                            { item: "DION" },
                                        ],
                                    },
                                    {
                                        item: "NIV Series",
                                        children: [
                                            { item: "Portable" },
                                            { item: "BiPAP" },
                                            { item: "CPAP" },
                                        ],
                                    },
                                ],
                            },
                            {
                                item: "Anesthesia",
                                children: [
                                    {
                                        item: "A Series",
                                        link: "/link",
                                        children: [{ item: "Neptune" }],
                                    },
                                    {
                                        item: "WATO Series",
                                        link: "/link",
                                        children: [{ item: "Neptune" }],
                                    },
                                ],
                            },
                            {
                                item: "Radiagraphy",
                                children: [
                                    {
                                        item: "Digital Radiography",
                                        link: "/link",
                                        children: [
                                            { item: "CT Scan 32" },
                                            { item: "CT Scan 128" },
                                            { item: "CT Scan 16" },
                                        ],
                                    },
                                    {
                                        item: "Mobile Radiography",
                                        link: "/link",
                                        children: [
                                            { item: "CT Scan 32" },
                                            { item: "CT Scan 128" },
                                            { item: "CT Scan 16" },
                                        ],
                                    },
                                ],
                            },
                            {
                                item: "Mask",
                                children: [
                                    {
                                        item: "Vented",
                                        children: [{ item: "Vented_1" }, { item: "Vented_2" }],
                                    },
                                    {
                                        item: "Non Vented",
                                        children: [{ item: "Vented_3" }, { item: "Vented_4" }],
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
