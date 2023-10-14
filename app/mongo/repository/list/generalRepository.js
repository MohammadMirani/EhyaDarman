const Models = require("../../models");
const generalRepository = {};
const DOT_ENV = require("../../../configs/general");

generalRepository.getMenu = async (locale) => {
  try {
    const menu = await Models.Menu.aggregate()
      .match({ locale: locale })
      .project({
        _id: 0, // Exclude _id at the top level
        locale: 1, // Include other fields you want to keep
        tabs: {
          $map: {
            input: "$tabs",
            as: "tab",
            in: {
              item: "$$tab.item",
              firstIndent: {
                $map: {
                  input: "$$tab.firstIndent",
                  as: "first",
                  in: {
                    name: "$$first.name",
                    link: "$$first.link",
                    secondIndent: {
                      $map: {
                        input: "$$first.secondIndent",
                        as: "second",
                        in: {
                          name: "$$second.name",
                          link: "$$second.link",
                          thirdIndent: {
                            $map: {
                              input: "$$second.thirdIndent",
                              as: "third",
                              in: {
                                name: "$$third.name",
                                link: "$$third.link",
                                fourthIndent: {
                                  $map: {
                                    input: "$$third.fourthIndent",
                                    as: "fourth",
                                    in: {
                                      name: "$$fourth.name",
                                      link: "$$fourth.link",
                                    },
                                  },
                                },
                              },
                            },
                          },
                        },
                      },
                    },
                  },
                },
              },
            },
          },
        },
      });
    return menu[0];
  } catch (e) {
    console.error("generalRepository.getMenu", e);
    throw e;
  }
};

generalRepository.getFooter = async (locale) => {
  try {
    const footer = await Models.Footer.aggregate()
      .match({ locale: locale })
      .project({
        locale: 1,
        products: {
          $map: {
            input: "$products",
            as: "product",
            in: {
              item: "$$product.item",
              link: "$$product.link",
            },
          },
        },
        quickAccess: {
          $map: {
            input: "$quickAccess",
            as: "item",
            in: {
              item: "$$item.item",
              link: "$$item.link",
            },
          },
        },
        socialMedias: {
          $map: {
            input: "$socialMedias",
            as: "item",
            in: {
              name: "$$item.name",
              title: "$$item.title",
              icon: "$$item.icon",
              link: "$$item.link",
            },
          },
        },
        contactUs: {
          $map: {
            input: "$contactUs",
            as: "item",
            in: {
              name: "$$item.name",
              title: "$$item.title",
              icon: "$$item.icon",
              link: "$$item.link",
              value: "$$item.value",
            },
          },
        },
      });

    return footer[0];
  } catch (e) {
    console.error("generalRepository.getFooter", e);
    throw e;
  }
};

generalRepository.getSlider = async (locale) => {
  try {
    console.log(DOT_ENV.IMAGE_URL);
    return await Models.Slider.aggregate()
      .match({ locale: locale })
      .project({
        locale: 1,
        _id :0,
        slides: {
          $map: {
            input: "$slides",
            as: "item",
            in: {
              image: { $concat: [DOT_ENV.IMAGE_URL, "/", "$$item.image"] },
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
      .addFields({ name: "$name.value" });
  } catch (e) {
    console.error("generalRepository.getBookmarkedPartners", e);
    throw e;
  }
};

generalRepository.getSummaryCompanyInfo = async (locale) => {
  try {
    return await Models.CompanyInfo.aggregate().match({ locale: locale });
  } catch (e) {
    console.error("generalRepository.getSummaryCompanyIno", e);
    throw e;
  }
};

module.exports = generalRepository;
