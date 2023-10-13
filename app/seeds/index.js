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
        promiseList.push(require("./list/companyInfo"));
        promiseList.push(require("./list/product"));
        // promiseList.push()

        await Promise.all(promiseList);

        return resolve();
    } catch (e) {
        return reject();
    }
});

module.exports = seedsPromise;
