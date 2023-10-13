require("dotenv").config();
const cluster = require("cluster");
const DOT_ENV = require("./configs/general");
const server = require("./server/server.js");
const mongoDB = require("./cors/mongoDbConnection");
const redisConnection = require("./cors/redisConnection");

const app = new Promise(async (resolve, reject) => {
    try {
        console.log("*********************");
        console.log(process.env.MONGO_URL);
        await mongoDB();
        console.log("=======================================");
        const redisClient = await redisConnection();
        console.log("=======================================");
        await require("./seeds/index");
        console.log("=======================================");
        await server(redisClient); //todo make it to cluster
        // await server();
        console.log("============= Done ====================");

        resolve("[+] Application is lunched successfully.");
    } catch (e) {
        console.error(e);
        reject("[!] Application can't lunched, some problems occurred.", e);
    }
});

app.then((data) => {
    console.info(data);
}).catch((err) => {
    console.error(err);
    process.exit();
});
