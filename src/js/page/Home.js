
var Page = require('./Page.js');

class Home extends Page {

  static getPageUrl() {
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
