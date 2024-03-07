const Services = require("../../services/index");
const repository = require("../../mongo/repository/index");

class GeneralController {
  constructor() {}

  async getLandingPage(req, res, next) {
    try {
      const { locale } = req;
      const landingPageData = await Services.generalServices.getLandingPage(
        locale
      );
      return res.send(landingPageData);
    } catch (e) {
      console.error(e);
      return res.status(500).send({ message: "خطای سرور" });
    }
  }

  async getMenu(req, res, next) {
    try {
      const { locale } = req;
      const menu = await Services.generalServices.getMenu(locale);
      return res.send(menu);
    } catch (e) {
      console.error(e);
      return res.status(500).send({ message: "خطای سرور" });
    }
  }

  async getFooter(req, res, next) {
    try {
      const { locale } = req;
      const menu = await Services.generalServices.getFooter(locale);
      return res.send(menu);
    } catch (e) {
      console.error(e);
      return res.status(500).send({ message: "خطای سرور" });
    }
  }

  async getAboutUs(req, res, next) {
    try {
      const { locale } = req;
      const menu = await Services.generalServices.getFooter(locale);
      return res.send(menu);
    } catch (e) {
      console.error(e);
      return res.status(500).send({ message: "خطای سرور" });
    }
  }

  async getContactUs(req, res, next) {
    try {
      const { locale } = req;
      const contactInfo = await repository.generalRepository.getContactUsInfo(
        locale
      );
      const branchesInfo = await repository.generalRepository.getBranchesInfo(
        locale
      );

      const output = {
        ...contactInfo,
        branches: branchesInfo,
      };
      return res.send(output);
    } catch (e) {
      console.error(e);
      return res.status(500).send({ message: "خطای سرور" });
    }
  }
  async getBranches(req, res, next) {
    try {
      const { locale } = req;

      const cities = await repository.generalRepository.getCitiesList(locale)
      const branches = await repository.generalRepository.getBranchesList(locale)

      return res.send({
        cities:cities,
        branches:branches
      })

    } catch (e) {
      console.error(e);
      return res.status(500).send({ message: "خطای سرور" });
    }
  }

  async registerRequest(req, res, next) {
    try {


     await repository.generalRepository.registerRequestFunction(req)


      return res.send({
        error: false,
        message: "پیام با موفقیت ارسال شد."
      })

    } catch (e) {
      console.error(e);
      return res.status(500).send({ message: "خطای سرور" });
    }
  }
}

module.exports = new GeneralController();
