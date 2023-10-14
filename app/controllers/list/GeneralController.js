const Services = require("../../services/index");

class GeneralController {
    constructor() {}

    async getLandingPage(req, res, next) {
        try {
            const { locale } = req
            const landingPageData = await Services.generalServices.getLandingPage(locale);
            return res.send(landingPageData);
        } catch (e) {
            console.error(e);
            return res.status(500).send({ message: "خطای سرور" });
        }
    }

    async getMenu(req, res, next) {
        try {
            const { locale } = req
            const menu = await Services.generalServices.getMenu(locale);
            return res.send(menu);
        } catch (e) {
            console.error(e);
            return res.status(500).send({ message: "خطای سرور" });
        }
    }

    async getFooter(req, res, next) {
        try {
            const { locale } = req
            const menu = await Services.generalServices.getFooter(locale);
            return res.send(menu);
        } catch (e) {
            console.error(e);
            return res.status(500).send({ message: "خطای سرور" });
        }
    }
}

module.exports = new GeneralController();
