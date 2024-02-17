const Models = require("../../models");
const generalRepository = {};
const DOT_ENV = require("../../../configs/general");

generalRepository.getMenu = async (locale) => {
  try {
    const menu = await Models.Menu.aggregate().match({ locale: locale });

    return menu[0];
  } catch (e) {
    console.error("generalRepository.getMenu", e);
    throw e;
  }
};

generalRepository.getFooter = async (locale) => {
  try {
    const footer = await Models.Footer.aggregate().match({ locale: locale });

    return footer[0];
  } catch (e) {
    console.error("generalRepository.getFooter", e);
    throw e;
  }
};

generalRepository.getSlider = async (locale) => {
  try {
    return await Models.Slider.aggregate()
      .match({ locale: locale })
      .project({
        locale: 1,
        _id: 0,
        slides: {
          $map: {
            input: "$slides",
            as: "item",
            in: {
              image: {
                $concat: [DOT_ENV.DOCS_URL, "/slider/", "$$item.image"],
              },
              title: "$$item.title",
              description: "$$item.description",
              link: "$$item.link",
            },
          },
        },
      });
  } catch (e) {
    console.error("generalRepository.getSlider", e);
    throw e;
  }
};

generalRepository.getBookmarkedPartners = async (locale) => {
  try {
    return await Models.Partners.aggregate()
      .match({ isBookmarked: true, "name.locale": locale })
      .unwind({ path: "$name" })
      .addFields({ name: "$name.value" })
      .project({
        icon: 1,
        title: 1,
        name: 1,
        isBookmarked: 1,
        _id: 0,
      });
  } catch (e) {
    console.error("generalRepository.getBookmarkedPartners", e);
    throw e;
  }
};

generalRepository.getSummaryCompanyInfo = async (locale) => {
  try {
    const companyInfo = await Models.CompanyInfo.aggregate()
      .match({ locale: locale })
      .unwind({ path: "$info" })
      .match({ "info.section": "aboutUs" })
      .project({
        _id: 0,
        info: {
          title: "$info.title",
          shortDescription: "$info.shortDescription",
          defaultImage: {
            $concat: [DOT_ENV.DOCS_URL, "/company/", "$info.defaultImage"],
          },
        },
      });

    return companyInfo[0];
  } catch (e) {
    console.error("generalRepository.getSummaryCompanyIno", e);
    throw e;
  }
};

generalRepository.getBrandList = async (locale) => {
  try {
    return await Models.Brand.aggregate()
      .match({ isDeleted: false, isActive: true })
      .addFields({
        name: {
          $filter: {
            input: "$name",
            as: "item",
            cond: { $eq: ["$$item.locale", locale] },
          },
        },
      })
      .unwind({ path: "$name" })
      .project({
        title: "$name.value",
        code: {
          $arrayElemAt: [{ $split: ["$code", "-"] }, 1],
        },
        _id: 0,
      });
  } catch (e) {
    console.error("generalRepository.getSummaryCompanyIno", e);
    throw e;
  }
};

generalRepository.getCategoryList = async (locale, brandCode,) => {
  try {
    const completeBrandCode = "BRD-" + brandCode;
    return await Models.Category.aggregate()
      .match({ isDeleted: false, isActive: true, brandCode: completeBrandCode })
      .addFields({
        name: {
          $filter: {
            input: "$name",
            as: "item",
            cond: { $eq: ["$$item.locale", locale] },
          },
        },
      })
      .unwind({ path: "$name" })
      .addFields({
        code: {
          $arrayElemAt: [{ $split: ["$code", "-"] }, 1],
        },
      })
      .project({
        title: "$name.value",
        code: { $concat: [brandCode, "-", "$code"] },
        _id: 0,
      });
  } catch (e) {
    console.error("generalRepository.getSummaryCompanyIno", e);
    throw e;
  }
};

generalRepository.getSubCategoryList = async (locale, brandCode, categoryCode) => {
  try {
    const completeCategoryCode = "CAT-" + categoryCode;;
    return await Models.SubCategory.aggregate()
      .match({ isDeleted: false, isActive: true, categoryCode: completeCategoryCode })
      .addFields({
        name: {
          $filter: {
            input: "$name",
            as: "item",
            cond: { $eq: ["$$item.locale", locale] },
          },
        },
      })
      .unwind({ path: "$name" })
      .addFields({
        code: {
          $arrayElemAt: [{ $split: ["$code", "-"] }, 1],
        },
      })
      .project({
        title: "$name.value",
        code: { $concat: [brandCode, "-", categoryCode, "-", "$code"] },
        _id: 0,
      });
  } catch (e) {
    console.error("generalRepository.getSummaryCompanyIno", e);
    throw e;
  }
};

module.exports = generalRepository;
