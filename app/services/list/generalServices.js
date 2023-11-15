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
generalService.getLandingPage = async (locale) => {
    try {

        const sliderPromise = repository.generalRepository.getSlider(locale);
        // const partnersPromise = repository.generalRepository.getBookmarkedPartners(locale);
        // const newsPromise = repository.newsRepository.getLatestNews(locale);
        // const companyInfoPromise = repository.generalRepository.getSummaryCompanyInfo(locale);
        const bookmarkedProductsPromise =
          repository.productRepository.getBookmarkedProducts(locale);

        const [slider, bookmarkedProduct] =
            await Promise.all([
                sliderPromise,
                bookmarkedProductsPromise,

            ]);

        return {slider, bookmarkedProduct };
    } catch (e) {
        console.error(e);
        throw e;
    }
};

module.exports = generalService;
