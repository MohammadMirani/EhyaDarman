const Models = require("../../mongo/models");

const companyInfoObject = [
  {
    locale: "fa-IR",

    info: [
      {
        section: "aboutUs",
        title: "درباره ما",
        shortDescription:"شرکت احیا درمان پیشرفته اولین تولید کننده دستگاه های ونتیلاتور مراقبت ویژه و دستگاه های ماشین بیهوشی، تنها تولید کننده دستگاه های ونتیلاتور مراقبت ویژه و همچنین تولید کننده دستگاه CT Scan در ایران می باشد که در حال حاضر تمامی این محصولات دارای گواهی دانش بنیان نیز می باشند.  این شرکت ضمن دریافت تاییدیه از مراجع داخلی و همچنین متخصصین کمپانی اروپایی در خصوص کیفیت مطلوب و مناسب تولیدات خود موفق به کسب استاندارد بین المللی CE اروپا برای سه محصول خود شد.",    smallImage: "smallImage1",
        image: "image1",
        defaultImage: "default1.png",
      },
      {
        section: "vision",
        title: "چشم انداز",
        shortDescription:
          "شرکت احیا درمان پیشرفته با دارا بودن 14 سال سابقه فعالیت موثر در زمینه تولید، فروش، خدمات پس از فروش و صادرات تجهیزات پزشکی و با بهره گیری از متخصصین مجرب و مهندسین کارآزموده توانسته نیاز قابل توجهی از بازار داخل را به خوبی پاسخگو باشد به گونه ای که تعداد قابل توجه دستگاه های تولید شده در خط تولید این شرکت و تعداد مراکزی که از این دستگاه ها استفاده می نمایند و همچنین رضایت اعلام شده توسط مراکز فوق گواه این ادعا می باشد.",
        description:
          "شرکت احیا درمان پیشرفته با دارا بودن 14 سال سابقه فعالیت موثر در زمینه تولید، فروش، خدمات پس از فروش و صادرات تجهیزات پزشکی و با بهره گیری از متخصصین مجرب و مهندسین کارآزموده توانسته نیاز قابل توجهی از بازار داخل را به خوبی پاسخگو باشد به گونه ای که تعداد قابل توجه دستگاه های تولید شده در خط تولید این شرکت و تعداد مراکزی که از این دستگاه ها استفاده می نمایند و همچنین رضایت اعلام شده توسط مراکز فوق گواه این ادعا می باشد.\n" +
          "در زمینه صادرات و معرفی محصولات تولید شده توسط شرکت احیا درمان پیشرفته به بازار جهانی این شرکت در نظر دارد تا با استفاده از دانش فنی و همچنین سابقه فعالیت مناسب خود در بازار داخلی و خارجی، میزان صادرات خود را گسترش داده و با توجه به نیاز بازار جهانی اقدام به صادرات بیشتر دستگاه های ونتیلاتور مراقبت ویژه و ماشین بیهوشی خود نماید.\n" +
          "در زمینه افزایش سبد کالاهای تولید شده توسط این شرکت در نظر دارد تا با استفاده از توانمندی های موثر و بهره مندی از کارشناسان و متخصصان زبده خود محصولاتی با تکنولوژی کاملا بومی سازی شده و قابل رقابت با محصولات مشابه خارجی و با بهره گیری از تکنولوژی روز دنیا در داخل تولید نماید. همچنین در نظر دارد تنوع محصولات خود را از نظر کاربری افزایش داده و ضمن انتقال تکنولوژی اقدام به تولید مستقل محصولات در داخل نماید.\n" +
          "در زمینه افزایش تعداد خط تولید این شرکت در نظر دارد تا با احداث کارخانه ای جدید در استان خراسان رضوی ضمن اشتغال زایی در منطقه میزان تولیدات خود را به مقدار قابل توجهی افزایش دهد.",
        smallImage: "smallImage3",
        image: "image3",
        defaultImage: "default3.png",
      },
    ],
  },
];

const companyInfoPromise = new Promise(async (resolve, reject) => {
  try {
    await Models.CompanyInfo.deleteMany({});
    await Models.CompanyInfo.create(companyInfoObject);
    console.info("[+] CompanyInf updated successfully.");

    resolve();
  } catch (e) {
    console.error("[!] Error in creating and updating companyInfo.", e);
    reject();
  }
});

module.exports = companyInfoPromise;
