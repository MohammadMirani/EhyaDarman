const Models = require("../../models");
const newsRepository = {};

newsRepository.getLatestNews = async (locale) => {
    try {
        return await Models.News.aggregate()
            .sort({ _id: -1 })
            .limit(10)
            .match({ "newsContext.locale": locale })
            .unwind({ path: "$newsContext" });
    } catch (e) {
        console.error("newsRepository.getLatestNews", e);
        throw e;
    }
};

module.exports = newsRepository;
