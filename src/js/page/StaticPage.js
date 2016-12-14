/**
 * Static page, to help faster create a running page
 */

var BasePage = require('./BasePage.js')

class StaticPage {
  static create(config) {
    var base = new BasePage();

    base.getUrl = function() {
      return config.template;
    }

    base.getPageUrl = function() {
      return config.url;
    }

    return base;
  }
}

module.exports = StaticPage;
