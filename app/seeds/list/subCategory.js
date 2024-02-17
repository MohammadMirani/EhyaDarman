const Models = require("../../mongo/models");

const subCategoryObject = [
  {
    code: "SCAT-1",
    image: "default.png",
    icon: "icon1",
    categoryCode: "CAT-1",
    name: [
      {
        locale: "fa-IR",
        value: "ونتیلاتور",
      },
    ],
  },
  {
    code: "SCAT-2",
    image: "default.png",
    icon: "icon1",
    categoryCode: "CAT-1",
    name: [
      {
        locale: "fa-IR",
        value: "ماشین بیهوشی",
      },
    ],
  },
  {
    code: "SCAT-3",
    image: "default.png",
    icon: "icon1",
    categoryCode: "CAT-2",
    name: [
      {
        locale: "fa-IR",
        value: "CT Scan",
      },
    ],
  },
  {
    code: "SCAT-4",
    image: "default.png",
    icon: "icon1",
    categoryCode: "CAT-3",
    name: [
      {
        locale: "fa-IR",
        value: "پروپرشنال ولو",
      },
    ],
  },
  {
    code: "SCAT-5",
    image: "default.png",
    icon: "icon1",
    categoryCode: "CAT-3",
    name: [
      {
        locale: "fa-IR",
        value: "شیر برقی قطع و وصل",
      },
    ],
  },
  {
    code: "SCAT-6",
    image: "default.png",
    icon: "icon1",
    categoryCode: "CAT-3",
    name: [
      {
        locale: "fa-IR",
        value: "رگولاتور فشار گاز",
      },
    ],
  },
  {
    code: "SCAT-7",
    image: "default.png",
    icon: "icon1",
    categoryCode: "CAT-4",
    name: [
      {
        locale: "fa-IR",
        value: "تستر قطعات پنوماتیک ونتیلاتور",
      },
    ],
  },
  {
    code: "SCAT-8",
    image: "default.png",
    icon: "icon1",
    categoryCode: "CAT-4",
    name: [
      {
        locale: "fa-IR",
        value: "تستر اکسپراتوری ولو ونتیلاتور",
      },
    ],
  },
  {
    code: "SCAT-9",
    image: "default.png",
    icon: "icon1",
    categoryCode: "CAT-4",
    name: [
      {
        locale: "fa-IR",
        value: "تستر منیفلد ونتیلاتور",
      },
    ],
  },
  {
    code: "SCAT-10",
    image: "default.png",
    icon: "icon1",
    categoryCode: "CAT-4",
    name: [
      {
        locale: "fa-IR",
        value: "تستر ولو پنوماتیکی",
      },
    ],
  },
  {
    code: "SCAT-11",
    image: "default.png",
    icon: "icon1",
    categoryCode: "CAT-4",
    name: [
      {
        locale: "fa-IR",
        value: "کالیبراتور ونتیلاسیون",
      },
    ],
  },
  {
    code: "SCAT-12",
    image: "default.png",
    icon: "icon1",
    categoryCode: "CAT-5",
    name: [
      {
        locale: "fa-IR",
        value: "ونتیلاتور پرتابل سازگار با محیط MRI",
      },
    ],
  },
  {
    code: "SCAT-14",
    image: "default.png",
    icon: "icon1",
    categoryCode: "CAT-11",
    name: [
      {
        locale: "fa-IR",
        value: "ونتیلاتور پرتابل",
      },
    ],
  },
  {
    code: "SCAT-15",
    image: "default.png",
    icon: "icon1",
    categoryCode: "CAT-7",
    name: [
      {
        locale: "fa-IR",
        value: "دستگاه ساخت رادیو دارو",
      },
    ],
  },
  {
    code: "SCAT-16",
    image: "default.png",
    icon: "icon1",
    categoryCode: "CAT-8",
    name: [
      {
        locale: "fa-IR",
        value: "PET CT",
      },
    ],
  },
  {
    code: "SCAT-17",
    image: "default.png",
    icon: "icon1",
    categoryCode: "CAT-8",
    name: [
      {
        locale: "fa-IR",
        value: "سی تی اسکن 128 اسلایس",
      },
    ],
  },
  {
    code: "SCAT-18",
    image: "default.png",
    icon: "icon1",
    categoryCode: "CAT-8",
    name: [
      {
        locale: "fa-IR",
        value: "MRI",
      },
    ],
  },
  {
    code: "SCAT-19",
    image: "default.png",
    icon: "icon1",
    categoryCode: "CAT-9",
    name: [
      {
        locale: "fa-IR",
        value: "پلی سمنوگرافی",
      },
    ],
  },
  {
    code: "SCAT-20",
    image: "default.png",
    icon: "icon1",
    categoryCode: "CAT-10",
    name: [
      {
        locale: "fa-IR",
        value: "ویدیولارنگوسکوپ",
      },
    ],
  },
  {
    code: "SCAT-21",
    image: "default.png",
    icon: "icon1",
    categoryCode: "CAT-11",
    name: [
      {
        locale: "fa-IR",
        value: "کمپرسور هوای فشرده پزشکی",
      },
    ],
  },
  {
    code: "SCAT-22",
    image: "default.png",
    icon: "icon1",
    categoryCode: "CAT-12",
    name: [
      {
        locale: "fa-IR",
        value: "CPAP",
      },
    ],
  },
  {
    code: "SCAT-23",
    image: "default.png",
    icon: "icon1",
    categoryCode: "CAT-12",
    name: [
      {
        locale: "fa-IR",
        value: "Bipap",
      },
    ],
  },
  {
    code: "SCAT-24",
    image: "default.png",
    icon: "icon1",
    categoryCode: "CAT-12",
    name: [
      {
        locale: "fa-IR",
        value: "ونتیلاتور پرتابل",
      },
    ],
  },
  {
    code: "SCAT-25",
    image: "default.png",
    icon: "icon1",
    categoryCode: "CAT-13",
    name: [
      {
        locale: "fa-IR",
        value: "انواع ماسک",
      },
    ],
  },
  {
    code: "SCAT-26",
    image: "default.png",
    icon: "icon1",
    categoryCode: "CAT-13",
    name: [
      {
        locale: "fa-IR",
        value: "انواع تیوبینگ",
      },
    ],
  },
  {
    code: "SCAT-27",
    image: "default.png",
    icon: "icon1",
    categoryCode: "CAT-14",
    name: [
      {
        locale: "fa-IR",
        value: "Apnea Link",
      },
    ],
  },
  {
    code: "SCAT-28",
    image: "default.png",
    icon: "icon1",
    categoryCode: "CAT-14",
    name: [
      {
        locale: "fa-IR",
        value: "PSG",
      },
    ],
  },
];

const subCategoryPromise = new Promise(async (resolve, reject) => {
  try {
    await Models.SubCategory.deleteMany({});
    await Models.SubCategory.create(subCategoryObject);
    console.info("[+] subCategory are updated successfully.");

    resolve();
  } catch (e) {
    console.error("[!] Error in creating and updating category.", e);
    reject();
  }
});

module.exports = subCategoryPromise;
