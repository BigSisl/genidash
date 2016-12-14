/**
 * Bootstraps the applicaion
 */

var Client = require('./Client.js');

class Bootstrap {

  constructor() {
  }

  static start() {
    this.client = new Client();
  }

}

module.exports = Bootstrap;
