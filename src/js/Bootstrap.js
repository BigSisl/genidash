/**
 * Bootstraps the applicaion
 */

var Client = require('./Client.js');
var Designer = require('./Design.js');
var PageManager = require('./page/Page.js');
var Navigation = require('./Navigation.js');

class Bootstrap {

  constructor() {
    global.client = this.client = new Client();
    global.designer = this.designer = new Designer();
    global.pageManager = this.pageManager = PageManager;
    global.nav = this.nav = new Navigation();

    this.openPage();
  }

  static start() {
    var bootstrap = global.bootstrap = new Bootstrap();
  }

  openPage() {
    this.pageManager.prepare();
    this.nav.open('/');
  }
}

module.exports = Bootstrap;
