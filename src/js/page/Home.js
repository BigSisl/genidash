
var BasePage = require('./BasePage.js');

class Home extends BasePage {

  getPageUrl() {
    return '/';
  }

  /**
   * Returns baseurl to json and htm file
   */
  getUrl() {
    return {
      htm: 'templates/home/home.htm',
      json: 'templates/home/home.json'
    };
  }

}

module.exports = Home;
