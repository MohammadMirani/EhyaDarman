const Models = require("../../mongo/models");

const footerObject = [
  {
    locale: "fa-IR",
    socialMedias: [
      { name: "whatsapp", title: "واتساپ", icon: "icon", link: "https://" },
      { name: "telegram", title: "تلگرام", icon: "icon", link: "https://" },
      { name: "linkedin", title: "لینکدین", icon: "icon", link: "https://" },
      { name: "pinterest", title: "پینترست", icon: "icon", link: "https://" },
      { name: "twitter", title: "توییتر", icon: "icon", link: "https://" },
      {
        name: "instagram",
        title: "اینستاگرام",
        icon: "icon",
        link: "https://",
      },
    ],
    contactUs: [
      {
        name: "address",
        title: "آدرس",
        icon: "icon",
        value: "تهران، شریعی",
        link: "",
      },
      {
        name: "phone",
        title: "تلفن",
        icon: "icon",
        value: "02100000000",
        link: "",
      },
      {
        name: "mobile",
        title: "تلفن همراه",
        icon: "icon",
        value: "09120000000",
        link: "",
      },
      {
        name: "email",
        title: "ایمیل",
        icon: "icon",
        value: "ehyadarman@gmail.com",
        link: "",
      },
    ],
    products: [
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
    quickAccess: [
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
