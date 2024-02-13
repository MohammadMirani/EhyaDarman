const Models = require("../../models");
const servicesRepository = {};
const DOT_ENV = require("../../../configs/general");

servicesRepository.getServicesSummary = async (locale) => {
  try {
    return {
      images: [
        { url: DOT_ENV.DOCS_URL + "/services/" + "services_1.jpg" },
        { url: DOT_ENV.DOCS_URL + "/services/" + "services_2.jpg" },
        { url: DOT_ENV.DOCS_URL + "/services/" + "services_3.jpg" },
        { url: DOT_ENV.DOCS_URL + "/services/" + "services_4.jpg" },
        { url: DOT_ENV.DOCS_URL + "/services/" + "services_5.jpg" },
        { url: DOT_ENV.DOCS_URL + "/services/" + "services_6.jpg" },
      ],
      sections: [
        {
          title: "خدمات پس از فروش",
          shortDescription:
            "شرکتهای طرف قرارداد و توضیحات مربوط به خدمات پس از فروش محصولات",
          description:
            "شرکت احیا درمان پیشرفته دارای دو بخش مجزای خدمات پس از فروش میباشد که لیست تمامی محصولات بیمارستانی و خانگی را شامل میشود. خدمات پس از فروش ارائه شده توسط این شرکت در محل و در شرکت انجام میپذیرد. تیم خدمات پس از فروش شرکت احیا درمان پیشرفته هرساله به عنوان اولین و برترین شرکت ارائه دهنده خدمات در صنعت تجهیزات پزشکی توسط اداره کل انتخاب شده است.",
        },
      ],
    };
  } catch (e) {
    console.error("getBookmarkedProducts", e);
    throw e;
  }
};

module.exports = servicesRepository;
