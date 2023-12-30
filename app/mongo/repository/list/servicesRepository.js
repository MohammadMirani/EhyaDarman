const Models = require("../../models");
const servicesRepository = {};
const DOT_ENV = require("../../../configs/general");

servicesRepository.getServicesSummary = async (locale) => {
  try {
    return {
      images: [
        { url: DOT_ENV.DOCS_URL + "/services/" + "services-1.jpg" },
        { url: DOT_ENV.DOCS_URL + "/services/" + "services-2.jpg" },
        { url: DOT_ENV.DOCS_URL + "/services/" + "services-3.jpg" },
        { url: DOT_ENV.DOCS_URL + "/services/" + "services-4.jpg" },
        { url: DOT_ENV.DOCS_URL + "/services/" + "services-5.jpg" },
        { url: DOT_ENV.DOCS_URL + "/services/" + "services-6.jpg" },
      ],
      sections: [
        {
          title: "خدمات پس از فروش",
          shortDescription:
            "شرکتهای طرف قرارداد و توضیحات مربوط به خدمات پس از فروش محصولات",
          description:
            "توجه: با فشردن یکبار کلید Mode مورد نظر، این Mode کاندید می شود سپس با توجه به Mode انتخاب شده توسط Knob روی پارامتر Mode مدنظر رفته و جهت انتخاب پارامتر Knob را به پایین فشار دهید. رنگ پارامتر تغییر می کند سپس با چرخاندن Knob می توانید عدد مورد نظر خود را تعیین کنید و Knob را دوباره بفشارید تا تغییرات تایید شود.",
        },
      ],
    };
  } catch (e) {
    console.error("getBookmarkedProducts", e);
    throw e;
  }
};

module.exports = servicesRepository;
