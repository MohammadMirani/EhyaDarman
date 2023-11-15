const Models = require("../../models");
const newsRepository = {};
const convertDateToPersian = require("../../../helpers/dateConvertion");
const jalali = require("jalali-moment");
newsRepository.getLatestNews = async (locale) => {
  try {
    const newsList = await Models.News.aggregate()
      .sort({ _id: -1 })
      .limit(10)
      .match({ "newsContext.locale": locale })
      .unwind({ path: "$newsContext" })
      .project({
        _id: 0,
        newsContext: {
          title: "$newsContext.title",
          shortDescription: "$newsContext.shortDescription",
          description: "$newsContext.description",
          locale: "$newsContext.locale",
        },
        code: 1,
        Image: 1,
        smallImage: 1,
        createdBy: 1,
        type: 1,
        createdAt: 1,
      });


    return newsList.map((el)=>  {  return { ...el, createdAt : convertDateToPersian(el.createdAt)}})
  } catch (e) {
    console.error("newsRepository.getLatestNews", e);
    throw e;
  }
};

module.exports = newsRepository;
