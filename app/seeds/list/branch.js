const Models = require("../../mongo/models");

const branchObject = [
  {
    code: "B-1",
    title: [
      {
        locale: "fa-IR",
        value: "دفتر مرکزی",
      },
    ],
    address: [
      {
        locale: "fa-IR",
        value: "تهران، بلوار میرداماد، ضلع شمالی خیابان رودبار غربی، پلاک 30",
      },
    ],
    cityCode: "CTY-1",
    phone: "+982122250555",
    mobile: "0912019837",
    fax: "0912019837",
    website: "https://www.ehyadarman.com/",
    email: "info@ehyadarman.com",
    image: "B-1.jpg",
    isDefault: true,
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
    ],
  },
  {
    code: "B-2",
    title: [
      {
        locale: "fa-IR",
        value: "خدمات پس از فروش",
      },
    ],
    address: [
      {
        locale: "fa-IR",
        value: "تهران، بلوار میرداماد، ضلع شمالی خیابان رودبار غربی، پلاک 30",
      },
    ],
    cityCode: "CTY-1",
    phone: "+982122250555",
    mobile: "0912019837",
    fax: "0912019837",
    website: "https://www.ehyadarman.com/",
    email: "info@ehyadarman.com",
    image: "B-2.jpg",
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
    ],
  },
  {
    code: "B-3",
    title: [
      {
        locale: "fa-IR",
        value: "کارخانه",
      },
    ],
    address: [
      {
        locale: "fa-IR",
        value:
          "خراسان رضوی، مشهد، پارک علم و فناوری خراسان رضوی، ارغوان 3، احیا درمان پیشرفته",
      },
    ],
    cityCode: "CTY-2",
    phone: "+05131536000",
    mobile: "0912019837",
    fax: "0912019837",
    website: "https://www.ehyadarman.com/",
    email: "info@ehyadarman.com",
    image: "B-3.jpg",
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
    ],
  },
  {
    code: "B-4",
    title: [
      {
        locale: "fa-IR",
        value: "شعبه خراسان رضوی",
      },
    ],
    address: [
      {
        locale: "fa-IR",
        value: "مشهد، بلوار کلاهدوز، بین 21 و 23، شماره 286",
      },
    ],
    cityCode: "CTY-3",
    phone: "+051-37251632",
    fax: "+051-37251632",
    mobile: "09014776551",
    website: "https://www.ehyadarman.com/",
    email: "info@ehyadarman.com",
    image: "B-4.jpg",
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
    ],
  },
  {
    code: "B-5",
    title: [
      {
        locale: "fa-IR",
        value: "شعبه اهواز",
      },
    ],
    address: [
      {
        locale: "fa-IR",
        value:
          "اهواز، خیابان زیتون، بلوار پاسداران، بین زمزم و زمرد، مجتمع محمد، طبقه دوم، واحد 5",
      },
    ],
    cityCode: "CTY-3",
    phone: "+051-37251632",
    fax: "+051-37251632",
    mobile: "0912019837",
    website: "https://www.ehyadarman.com/",
    email: "info@ehyadarman.com",
    image: "B-5.jpg",
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
    ],
  },
];

const branchPromise = new Promise(async (resolve, reject) => {
  try {
    await Models.Brnach.deleteMany({});
    await Models.Brnach.create(branchObject);
    console.info("[+] Brnach updated successfully.");

    resolve();
  } catch (e) {
    console.error("[!] Error in creating and updating Brnach.", e);
    reject();
  }
});

module.exports = branchPromise;
