const seedsPromise = new Promise(async (resolve, reject) => {
    try {
        const promiseList = [];
        promiseList.push(require("./list/menu"));
        promiseList.push(require("./list/intializeSuperAdmin"));
        promiseList.push(require("./list/footer"));
        promiseList.push(require("./list/slider"));
        promiseList.push(require("./list/partners"));
        promiseList.push(require("./list/news"));
        promiseList.push(require("./list/category"));
        promiseList.push(require("./list/subCategory"));
        promiseList.push(require("./list/brand"));
        promiseList.push(require("./list/companyInfo"));
        promiseList.push(require("./list/product"));
        promiseList.push(require("./list/contactUs"));
        promiseList.push(require("./list/branch"));
        promiseList.push(require("./list/city"));
        // promiseList.push()

        await Promise.all(promiseList);

        return resolve();
    } catch (e) {
        return reject();
    }
});

module.exports = seedsPromise;
