
var Page = require('./Page.js');

class Usage extends Page {
  getUrl() {
    return {
      htm: 'templates/home/home.htm',
      json: 'templates/home/home.json'
    };
  }
}

module.exports = Usage;
