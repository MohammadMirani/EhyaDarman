const moment = require("jalali-moment");
const dataConversionObject = {};

dataConversionObject.convertToPersianDate = (isoDate) => {
  // Convert to Gregorian date
  const gregorianDate = moment(isoDate, "YYYY-MM-DDTHH:mm:ss.SSSZ").format(
    "YYYY-MM-DD HH:mm:ss"
  );

  // Convert to Jalali (Persian) date
  const persianDate = moment(gregorianDate, "YYYY-MM-DD HH:mm:ss")
    .locale("fa")
    .format("jYYYY/jMM/jDD");

  return persianDate;
};
dataConversionObject.validateFilter = (filter) => {
  filter.limit = filter.limit || 12;
  filter.skip = filter.skip * filter.limit || 0;
  filter.locale = filter.locale || "fa-IR";

  return filter;
};

module.exports = dataConversionObject;
