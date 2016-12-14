/*
 *
 */

var Cookies = require('./Cookies.js');

const STORAGE_NAME = 'user_storage';

class Client {

  constructor() {
    this.config = {
      
    };

    console.log(Cookies.get(STORAGE_NAME));

    console.log('Cookies: ', Cookies);
  }

  save() {
    Cookies.set(STORAGE_NAME, JSON.stringify(this.config), 5);
  }

  loadData() {

  }

}

module.exports = Client;
