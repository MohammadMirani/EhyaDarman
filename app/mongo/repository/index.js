const repository = {};

repository.generalRepository = require("./list/generalRepository");
repository.newsRepository = require("./list/newsRepository");
repository.productRepository = require("./list/productRepository");
repository.userRepository = require("./list/userRepository");
repository.categoryRepository = require("./list/categoryRepository");
repository.servicesRepository = require("./list/servicesRepository");

module.exports = repository;
