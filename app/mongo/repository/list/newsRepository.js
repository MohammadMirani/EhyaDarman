const Models = require("../../models");
const newsRepository = {};
const convertDateToPersian = require("../../../helpers/dateConvertion");
const jalali = require("jalali-moment");
const DOT_ENV = require("../../../configs/general");
newsRepository.getLatestNews = async (locale) => {
    try {
        const newsList = await Models.News.aggregate()
            .sort({ _id: -1 })
            .limit(8)
            .match({ "newsContext.locale": locale })
            .unwind({ path: "$newsContext" })
            .project({
                _id: 0,
                title: "$newsContext.title",
                code: 1,
                defaultImage: {
                    $concat: [
                        DOT_ENV.DOCS_URL,
                        "/news/",
                        "$code",
                        "/",
                        "$defaultImage",
                    ],
                },
                createdBy: 1,
                type: 1,
                createdAt: 1,
            });

        const typeObject = {
            news: "اخبار",
            article: "مقاله",
        };

        return newsList.map((el) => {
            return {
                ...el,
                createdAt: convertDateToPersian(el.createdAt),
                type: typeObject[el.type],

            };
        });
    } catch (e) {
        console.error("newsRepository.getLatestNews", e);
        throw e;
    }
};

module.exports = newsRepository;
