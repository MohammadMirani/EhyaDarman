const moment = require('jalali-moment');

function convertToPersianDate(isoDate) {
    // Convert to Gregorian date
    const gregorianDate = moment(isoDate, 'YYYY-MM-DDTHH:mm:ss.SSSZ').format('YYYY-MM-DD HH:mm:ss');

    // Convert to Jalali (Persian) date
    const persianDate = moment(gregorianDate, 'YYYY-MM-DD HH:mm:ss').locale('fa').format('jYYYY/jMM/jDD');

    return persianDate;
}

module.exports = convertToPersianDate