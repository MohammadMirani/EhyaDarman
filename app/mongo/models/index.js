const Models = {};

Models.Attribute = require("./list/attributeModel").attributeModel;
Models.Brand = require("./list/brandModel").brandModel;
Models.Category = require("./list/categoryModel").categoryModel;
Models.CompanyInfo = require("./list/companyInfoModel").companyModel;
Models.Customer = require("./list/customerModel").customerModel;
Models.Footer = require("./list/footerModel").footerModel;
Models.Menu = require("./list/menueModel").menuModel;
Models.Model = require("./list/modelModel").modelModel;
Models.News = require("./list/newsModel").newsModel;
Models.Partners = require("./list/partnersModel").partnerModel;
Models.Product = require("./list/productModel").productModel;
Models.Slider = require("./list/sliderModel").sliderModel;
Models.User = require("./list/userModel").userModel;

module.exports = Models;
