const DOT_ENV = require("../configs/general");
const { createClient } = require("redis");


function redisConnection() {
    return new Promise((resolve, reject) => {

        const redisClient = createClient({
            host: DOT_ENV.REDIS_URL,
            port: DOT_ENV.REDIS_PORT,
        });


        redisClient.on("error", function (err) {
            console.error(err);
            console.info("[!] Redis can't connected.");
            reject();
        });
        redisClient.on("connect", function (err) {
            console.info("[+] Redis is successfully connected.");
            resolve(redisClient);
        });

        return redisClient;
    });
}

module.exports = redisConnection;
