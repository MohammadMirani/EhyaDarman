const DOT_ENV = require("../../configs/general");
const Models = require("../../mongo/models");
const bcrypt = require("bcrypt");

async function createSuperAdmin() {
    const superAdminUserName = DOT_ENV.SUPER_ADMIN_USER;
    const superAdminPassword = DOT_ENV.SUPER_ADMIN_PASSWORD;

    const findSuperAdmin = await Models.User.findOne({ username: superAdminUserName });
    if (!findSuperAdmin) {
        const saltRounds = 10;
        const hash = bcrypt.hashSync(superAdminPassword, saltRounds);

        await Models.User.create({
            username: superAdminUserName,
            password: hash,
        });
    }
}

const adminPromise = new Promise(async (resolve, reject) => {
    try {
        await createSuperAdmin();
        console.info("[+] superAdmin initialized successfully.");

        resolve();
    } catch (e) {
        console.error("[!] Error in initializing superAdmin.", e);
        reject();
    }
});

module.exports = adminPromise;
