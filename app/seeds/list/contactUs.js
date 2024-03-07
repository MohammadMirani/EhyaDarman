const Models = require("../../mongo/models");

const contactUsObject = [
  {
    locale: "fa-IR",
    banner: {
      title: "برای ارتباط با شرکت میتوانید از این صفحه استفاده کنید.",
      image: "aboutUs.jpg",
    },
    formImage: "contactUsFooter.jpg",
  },
];

const contactUsPromise = new Promise(async (resolve, reject) => {
  try {
    await Models.ContactUs.deleteMany({});
    await Models.ContactUs.create(contactUsObject);
    console.info("[+] contactUs updated successfully.");

    resolve();
  } catch (e) {
    console.error("[!] Error in creating and updating contactUs.", e);
    reject();
  }
});

module.exports = contactUsPromise;
