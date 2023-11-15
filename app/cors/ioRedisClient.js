const DOT_ENV = require("../configs/general")
const Redis = require('ioredis');

// Specify the IP address and port of your Redis instance
const redisOptions = {
    host: DOT_ENV.REDIS_URL, // replace with your Redis server's IP address
    port: DOT_ENV.REDIS_PORT, // replace with your Redis server's port
};

const redis = new Redis(redisOptions);

module.exports = redis