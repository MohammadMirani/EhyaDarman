const Models = require("../../models");
const generalRepository = {};
const DOT_ENV = require("../../../configs/general");
const Joi = require("joi");

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

generalRepository.getCategoryList = async (locale, brandCode) => {
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

generalRepository.getSubCategoryList = async (
  locale,
  brandCode,
  categoryCode
) => {
  try {
    const completeCategoryCode = "CAT-" + categoryCode;
    return await Models.SubCategory.aggregate()
      .match({
        isDeleted: false,
        isActive: true,
        categoryCode: completeCategoryCode,
      })
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

generalRepository.getContactUsInfo = async (locale) => {
  try {
    const query = await Models.ContactUs.aggregate()
      .match({ locale: locale })
      .project({
        banner: {
          image: {
            $concat: [DOT_ENV.DOCS_URL, "/contactUs/", "$banner.image"],
          },
          title: "$banner.title",
        },
        formImage: {
          $concat: [DOT_ENV.DOCS_URL, "/contactUs/", "$formImage"],
        },
      });
    return query[0];
  } catch (e) {
    console.error("generalRepository.getSummaryCompanyIno", e);
    throw e;
  }
};

generalRepository.getBranchesInfo = async (locale) => {
  try {
    return await Models.Brnach.aggregate()
      .lookup({
        from: "cities",
        localField: "cityCode",
        foreignField: "code",
        as: "city",
      })
      .unwind({ path: "$city" })
      .addFields({ city: "$city.name" })
      .addFields({
        title: {
          $first: {
            $filter: {
              input: "$title",
              as: "item",
              cond: { $eq: ["$$item.locale", locale] },
            },
          },
        },
        address: {
          $first: {
            $filter: {
              input: "$address",
              as: "item",
              cond: { $eq: ["$$item.locale", locale] },
            },
          },
        },
        city: {
          $first: {
            $filter: {
              input: "$city",
              as: "item",
              cond: { $eq: ["$$item.locale", locale] },
            },
          },
        },
      })
      .project({
        city: "$city.value",
        cityCode: 1,
        address: "$address.value",
        title: "$title.value",
        code: 1,
        phone: 1,
        mobile: 1,
        fax: 1,
        website: 1,
        email: 1,
        image: {
          $concat: [DOT_ENV.DOCS_URL, "/branch/", "$image"],
        },
        isDefault: 1,
        socialMedias: 1,
      });
  } catch (e) {
    console.error("generalRepository.getSummaryCompanyIno", e);
    throw e;
  }
};

generalRepository.getCitiesList = async (locale) => {
  try {
    return await Models.City.aggregate()
      .project({
        code: 1,
        title: {
          $first: {
            $filter: {
              input: "$name",
              as: "item",
              cond: { $eq: ["$$item.locale", locale] },
            },
          },
        },
      })
      .project({
        code: 1,
        title: "$title.value",
      });
  } catch (e) {
    console.error("generalRepository.getSummaryCompanyIno", e);
    throw e;
  }
};

generalRepository.getBranchesList = async (locale) => {
  try {
    return await Models.Brnach.aggregate()
      .project({
        code: 1,
        title: {
          $first: {
            $filter: {
              input: "$title",
              as: "item",
              cond: { $eq: ["$$item.locale", locale] },
            },
          },
        },
      })
      .project({
        code: 1,
        title: "$title.value",
      });
  } catch (e) {
    console.error("generalRepository.getSummaryCompanyIno", e);
    throw e;
  }
};

generalRepository.registerRequestFunction = async (req) => {
  try {
    return await Models.Request.create({
      fullName: req.body.fullName,
      email: req.body.email,
      phone: req.body.phone,
      city: req.body.city,
      description: req.body.description,
    });
  } catch (e) {
    console.error("generalRepository.getSummaryCompanyIno", e);
    throw e;
  }
};

module.exports = generalRepository;
