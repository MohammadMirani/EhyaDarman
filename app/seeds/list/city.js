const Models = require("../../mongo/models");

const cityObject = [
  {
    code: "CTY-1",
    name: [
      {
        locale: "fa-IR",
        value: "تهران",
      },
      {
        locale: "en-US",
        value: "TEHRAN",
      },
    ],
  },
  {
    code: "CTY-2",
    name: [
      {
        locale: "fa-IR",
        value: "مشهد",
      },
      {
        locale: "en-US",
        value: "MASHHAD",
      },
    ],
  },
  {
    code: "CTY-3",
    name: [
      {
        locale: "fa-IR",
        value: "تبریز",
      },
      {
        locale: "en-US",
        value: "TABRIZ",
      },
    ],
  },
];

const cityPromise = new Promise(async (resolve, reject) => {
  try {
    await Models.City.deleteMany({});
    await Models.City.create(cityObject);
    console.info("[+] City updated successfully.");

    resolve();
  } catch (e) {
    console.error("[!] Error in creating and updating City.", e);
    reject();
  }
});

module.exports = cityPromise;
