const Models = require("../../models");
const generalRepository = {};

generalRepository.getMenu = async (locale) => {
    try {
        return await Models.Menu.findOne({ locale: locale });
    } catch (e) {
        console.error("generalRepository.getMenu", e);
        throw e;
    }
};

generalRepository.getFooter = async (locale) => {
    try {
        return await Models.Footer.findOne({ locale: locale });
    } catch (e) {
        console.error("generalRepository.getFooter", e);
        throw e;
    }
};

generalRepository.getSlider = async (locale) => {
    try {
        return await Models.Slider.findOne({ locale: locale });
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
