const Models = require("../../mongo/models");

const footerObject = [
  {
    locale: "fa-IR",
    context: [
      {
        items: [
          {
            item: "کارخانه",
            link: "/link",
          },
          {
            item: "کلینیک خواب",
            link: "/link",
          },
          {
            item: "استخدام",
            link: "/link",
          },
          {
            item: "تماس با ما",
            link: "/link",
          },
          {
            item: "درباره ما",
            link: "/link",
          },
        ],
        section: "quickAccess",
        title: "دسترسی سریع",
      },
      {
        items: [
          {
            item: "دستگاه تنفسی بیمارستانی",
            link: "link",
          },
          {
            item: "دستگاه تنفسی خانگی",
            link: "link",
          },
          {
            item: "دستگاه تصویربرداری",
            link: "link",
          },
          {
            item: "اکسسوری",
            link: "link",
          },
        ],
        section: "productsCategory",
        title: "دسته بندی محصولات",
      },
      {
        items: [
          {
            item: "ماشین بیهوشی",
          },
          {
            item: "ونتیلاتور ICU",
          },
          {
            item: "پالس اکسی متر",
          },
          {
            item: "دستگاه ام ار ای",
          },
        ],
        section: "otherProducts",
        title: "دیگر محصولات",
      },
      {
        items: [
          {
            name: "address",
            title: "آدرس",
            icon: "icon",
            item: "تهران، شریعی",
            link: "",
          },
          {
            name: "phone",
            title: "تلفن",
            icon: "icon",
            item: "02100000000",
            link: "",
          },
          {
            name: "mobile",
            title: "تلفن همراه",
            icon: "icon",
            item: "09120000000",
            link: "",
          },
          {
            name: "email",
            title: "ایمیل",
            icon: "icon",
            item: "ehyadarman@gmail.com",
            link: "",
          },
        ],
        section: "contactUs",
        title: "تماس با ما",
      },
    ],

    socialMedias: [
      {
        name: "linkedin",
        title: "لینکدین",
        icon: "icon",
        link: "https://www.linkedin.com/company/ehya-darman-pishrafteh-co-edp?originalSubdomain=ir",
      },
      { name: "pinterest", title: "پینترست", icon: "icon", link: "https://" },
      {
        name: "twitter",
        title: "توییتر",
        icon: "icon",
        link: "https://twitter.com/ehyadarman",
      },
      {
        name: "instagram",
        title: "اینستاگرام",
        icon: "icon",
        link: "https://www.instagram.com/ehya_darman_pishrafteh/",
      },
      {
        name: "facebook",
        title: "فیسبوک",
        icon: "icon",
        link: "https://www.facebook.com/EhyaDarmanPishrafteedp",
      },
      { name: "whatsapp", title: "واتساپ", icon: "icon", link: "https://" },
      { name: "telegram", title: "تلگرام", icon: "icon", link: "https://" },
    ],
  },
];

const footerPromise = new Promise(async (resolve, reject) => {
  try {
    await Models.Footer.deleteMany({});
    await Models.Footer.create(footerObject);
    console.info("[+] Footer updated successfully.");

    resolve();
  } catch (e) {
    console.error("[!] Error in creating and updating footer.", e);
    reject();
  }
});

module.exports = footerPromise;
