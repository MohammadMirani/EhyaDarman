const generalService = {};
const repository = require("../../mongo/repository/index");

generalService.getMenu = async (locale) => {
  try {
    return await repository.generalRepository.getMenu(locale);
  } catch (e) {
    console.error(e);
    throw e;
  }
};
generalService.getFooter = async (locale) => {
  try {
    return await repository.generalRepository.getFooter(locale);
  } catch (e) {
    console.error(e);
    throw e;
  }
};

generalService.generateBrandListForFilter = async (locale) => {
  try {
    return await repository.generalRepository.getBrandList(locale);
  } catch (e) {
    console.error(e);
    throw e;
  }
};
generalService.generateCategoryListForFilter = async (locale, brandCode) => {
  try {
    return await repository.generalRepository.getCategoryList(
      locale,
      brandCode
    );
  } catch (e) {
    console.error(e);
    throw e;
  }
};
generalService.generateSubCategoryListForFilter = async (
  locale,
  brandCode,
  categoryCode
) => {
  try {
    return await repository.generalRepository.getSubCategoryList(
      locale,
      brandCode,
      categoryCode
    );
  } catch (e) {
    console.error(e);
    throw e;
  }
};
generalService.getLandingPage = async (locale) => {
  try {
    const sliderPromise = repository.generalRepository.getSlider(locale);
    // const partnersPromise = repository.generalRepository.getBookmarkedPartners(locale);
    const newsPromise = repository.newsRepository.getLatestNews(locale);
    const companyInfoPromise =
      repository.generalRepository.getSummaryCompanyInfo(locale);
    const bookmarkedProductsPromise =
      repository.productRepository.getBookmarkedProducts(locale);
    const servicesDetailsPromise =
      repository.servicesRepository.getServicesSummary(locale);

    const [slider, bookmarkedProduct, news, companyInfo, servicesDetails] =
      await Promise.all([
        sliderPromise,
        bookmarkedProductsPromise,
        newsPromise,
        companyInfoPromise,
        servicesDetailsPromise,
      ]);

    return { slider, bookmarkedProduct, companyInfo, news, servicesDetails };
  } catch (e) {
    console.error(e);
    throw e;
  }
};

module.exports = generalService;
