/*
 *
 */

var Cookies = require('./Cookies.js');

const STORAGE_NAME = 'user_storage';

class Client {

  constructor() {
    var conf = Cookies.get(STORAGE_NAME);
    this.config = conf ? JSON.parse(conf) : {

    };
  }

  save(config) {
    this.config = config ? config : this.config;
    Cookies.set(STORAGE_NAME, JSON.stringify(this.config), 5);
  }

  get() {
    return this.config;
  }

}

module.exports = Client;
