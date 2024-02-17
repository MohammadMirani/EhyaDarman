const Models = require("../../mongo/models");

const productsObject = [
  {
    code: "01-CT_Scan_EDP-16",
    name: [
      {
        value: "CT Scan EDP-16",
        locale: "fa-IR",
      },
    ],
    shortDescription: [
      {
        value:
          "دستگاه سی تی اسکن 16 اسلایس EDP-16 یک دستگاه تصویربرداری میباشد که به عنوان یک محصول دانش بنیان در کارخانجات احیا درمان پیشرفته تولید میشود.",
        locale: "fa-IR",
      },
    ],
    defaultImage: "default.png",
    smallImage: "smallImage.png",
    isBookmarked: true,
    brandCode: "BRD-1",
    categoryCode: "CAT-1",
    subCategoryCode: "SCAT-1",
  },
  {
    code: "02-EDP-Neptune",
    name: [
      {
        value: "EDP-Neptune",
        locale: "fa-IR",
      },
    ],
    shortDescription: [
      {
        value:
          "دستگاه ماشین بیهوشی EDP-Neptune دستگاهی است که در اتاق عمل با ترکیب گازهای بیهوشی مورد استفاده قرار میگیرد و شرکت احیا درمان پیشرفته موفق به دریافت مجوز دانش بنیان برای این محصول شده است.",
        locale: "fa-IR",
      },
    ],
    defaultImage: "default.png",
    smallImage: "smallImage.png",
    isBookmarked: true,
    brandCode: "BRD-1",
    categoryCode: "CAT-1",
    subCategoryCode: "SCAT-1",
  },
  {
    code: "03-Diomede",
    name: [
      {
        value: "Diomede",
        locale: "fa-IR",
      },
    ],
    shortDescription: [
      {
        value:
          "دستگاه ونتیلاتور تنفسی مراقبت های ویژه Diomede یکی از پیشرفته ترین ونتیلاتورهای تولید شده و دانش بنیان شرکت احیا درمان پیشرفته میباشد که به عنوان یک محصول صادراتی قابل رقابت با بزرگترین تولید کننده های خارجی میباشد.",
        locale: "fa-IR",
      },
    ],
    defaultImage: "default.png",
    smallImage: "smallImage.png",
    isBookmarked: true,
    brandCode: "BRD-1",
    categoryCode: "CAT-1",
    subCategoryCode: "SCAT-1",
  },
  {
    code: "04-Dion",
    name: [
      {
        value: "Dion",
        locale: "fa-IR",
      },
    ],
    shortDescription: [
      {
        value:
          "دستگاه ونتیلاتور توربوفن Dion دستگاهی است که بدلید وجود توربوفن دیگر نیاز به کمپرسور هوای فشرده نداشته و عموما در آمبولانس ها و مراکز دمانی مورد استفاده قرار میگیرند.",
        locale: "fa-IR",
      },
    ],
    defaultImage: "default.png",
    smallImage: "smallImage.png",
    isBookmarked: true,
    brandCode: "BRD-1",
    categoryCode: "CAT-1",
    subCategoryCode: "SCAT-2",
  },
  {
    code: "05-EDP-TS",
    name: [
      {
        value: "NeuViz 128 CT",
        locale: "fa-IR",
      },
    ],
    shortDescription: [
      {
        value:
          "دستگاه ونتیلاتور EDP-TS از اولین دستگاه های تولید شده و دانش بنیان این شرکت میباشد که در دوران کرونا به یک دستگاه استراتژیک تبدیل شده و در اکثر مراکز درمانی کشور مورد استفاده قرار گرفته است.",
        locale: "fa-IR",
      },
    ],
    defaultImage: "default.png",
    smallImage: "smallImage.png",
    isBookmarked: true,
    brandCode: "BRD-1",
    categoryCode: "CAT-2",
    subCategoryCode: "SCAT-3",
  },
  {
    code: "06-EDP-TS_NEO",
    name: [
      {
        value: "EDP-TS NEO",
        locale: "fa-IR",
      },
    ],
    shortDescription: [
      {
        value:
          "دستگاه ونتیلاتور EDP-TS NEO یکی از انواع ونتیلاتور تولید شده توسط شرکت احیا درمان پیشرفته میباشد که متناسب با رنج سنی نوزادان میباشد.",
        locale: "fa-IR",
      },
    ],
    defaultImage: "default.png",
    smallImage: "smallImage.png",
    isBookmarked: true,
    brandCode: "BRD-2",
    categoryCode: "CAT-1",
    subCategoryCode: "SCAT-1",
  },
  {
    code: "EDP-7",
    name: [
      {
        value: "Neusoft - NSM - S15P",
        locale: "fa-IR",
      },
    ],
    defaultImage: "default.png",
    smallImage: "smallImage.png",
    isBookmarked: false,
    brandCode: "BRD-2",
    categoryCode: "CAT-1",
    subCategoryCode: "SCAT-1",
  },
  {
    code: "EDP-8",
    name: [
      {
        value: "Resmed - AirSense 10 Elite",
        locale: "fa-IR",
      },
    ],
    defaultImage: "default.png",
    smallImage: "smallImage.png",
    isBookmarked: false,
    brandCode: "BRD-2",
    categoryCode: "CAT-1",
    subCategoryCode: "SCAT-2",
  },
  {
    code: "EDP-9",
    name: [
      {
        value: "Resmed - AirSense 10 AutoSet",
        locale: "fa-IR",
      },
    ],
    defaultImage: "default.png",
    smallImage: "smallImage.png",
    isBookmarked: false,
    brandCode: "BRD-2",
    categoryCode: "CAT-1",
    subCategoryCode: "SCAT-2",
  },
  {
    code: "EDP-10",
    name: [
      {
        value: "Resmed - Lumis™ 150 VPAP ST",
        locale: "fa-IR",
      },
    ],
    defaultImage: "default.png",
    smallImage: "smallImage.png",
    isBookmarked: false,
    brandCode: "BRD-2",
    categoryCode: "CAT-1",
    subCategoryCode: "SCAT-2",
  },
];

const productPromise = new Promise(async (resolve, reject) => {
    try {
        await Models.Product.deleteMany({});
        await Models.Product.create(productsObject);
        console.info("[+] products updated successfully.");

        resolve();
    } catch (e) {
        console.error("[!] Error in creating and updating products.", e);
        reject();
    }
});

module.exports = productPromise;
