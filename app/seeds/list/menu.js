const Models = require("../../mongo/models");

const menuObject = [
  {
    locale: "fa-IR",
    items: [
      {
        item: "RESMED",
        link: "/link",
        children: [
          {
            item: "دستگاه های کمک تنفسی",
            children: [
              {
                item: "CPAP",
                link: "/link",
                children: [{ item: "elite" }, { item: "auto" }],
              },
              {
                item: "Bipap",
                link: "/link",
                children: [
                  { item: "vauto" },
                  { item: "100s" },
                  { item: "100st" },
                  { item: "150st" },
                ],
              },
              {
                item: "ونتیلاتور پرتابل",
                children: [{ item: "astral 100" }, { item: "astral 150" }],
              },
            ],
          },
          {
            item: "لوازم جانبی",
            children: [
              {
                item: "انواع ماسک",
                link: "/link",
              },
              {
                item: "انواع تیوبینگ",
                link: "/link",
              },
            ],
          },
          {
            item: "دستگاه تشخیص اختلالات خواب",
            children: [
              {
                item: "Apnea Link",
                link: "/link",
              },
              {
                item: "PSG",
                link: "/link",
                children: [
                  { item: "MPR" },
                  { item: "S4500" },
                  { item: "N7000" },
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
      {
        item: "محصولات",
        link: "/link",
        children: [
          {
            item: "گروه محصول تولیدی",
            children: [
              {
                item: "محصولات تنفسی بیمارستانی",
                link: "/link",
                children: [
                  { item: "TS ونتیلاتور" },
                  { item: "TS NEO ونتیلاتورنوزادان" },
                  { item: "Diomedونتیلاتور" },
                  { item: "Dionونتیلاتور" },
                  { item: "Diomed Neoونتیلاتورنوزادان" },
                  { item: "ماشین بیهوشی اورانوس" },
                  { item: "ماشین بیهوشی نپتون" },
                ],
              },
              {
                item: "محصولات تصویر برداری",
                link: "/link",
                children: [{ item: "CT Scan EDP-16" }],
              },
              {
                item: "محصولات پنوماتیک",
                children: [
                  { item: "پروپرشنال ولو" },
                  { item: "شیر برقی قطع و وصل" },
                  { item: "رگولاتور فشار گاز" },
                ],
              },
              {
                item: "محصولات ابزار دقیق",
                children: [
                  { item: "تستر قطعات پنوماتیک ونتیلاتور" },
                  { item: "تستر اکسپراتوری ولو ونتیلاتور" },
                  { item: "تستر منیفلد ونتیلاتور" },
                  { item: "تستر ولو پنوماتیکی" },
                  { item: "کالیبراتور ونتیلاسیون" },
                ],
              },
            ],
          },
          {
            item: "گروه محصول بازرگانی",
            children: [
              {
                item: "AIRON",
                link: "/link",
                children: [
                  {
                    item: "ونتیلاتور پرتابل سازگار با محیط MRI",

                    children: [
                      {
                        item: "Pneuton",
                      },
                      {
                        item: "Pneuton Mini",
                      },
                    ],
                  },
                ],
              },
              {
                item: "Automed x",
                link: "/link",
                children: [
                  {
                    item: "ونتیلاتور پرتابل",
                    children: [
                      {
                        item: "SAVE II",
                      },
                    ],
                  },
                ],
              },
              {
                item: "IBA",
                link: "/link",
                children: [
                  {
                    item: "دستگاه ساخت رادیودارو",
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
                link: "/link",
                children: [
                  {
                    item: "PET CT",
                    children: [
                      {
                        item: "Neusight",
                      },
                    ],
                  },
                  {
                    item: "سی تی اسکن 128 اسلایس",
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
                link: "/link",
                children: [
                  {
                    item: " پلی سمنوگرافی",
                    children: [
                      {
                        item: "N7000",
                      },
                      {
                        item: "MPR",
                      },
                      {
                        item: "S4500",
                      },
                    ],
                  },
                ],
              },
              {
                item: "Intubrite",
                link: "/link",
                children: [
                  {
                    item: " ویدیولارنگوسکوپ",
                    children: [
                      {
                        item: "VLS6600",
                      },
                    ],
                  },
                ],
              },
              {
                item: "Ekom",
                link: "/link",
                children: [
                  {
                    item: "کمپرسور هوای فشرده پزشکی",
                    children: [
                      {
                        item: "DK50",
                      },
                      {
                        item: "Tower",
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
