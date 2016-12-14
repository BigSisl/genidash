/**
 *
 */

var $ = require('jquery-browserify');
var StaticPage = require('./StaticPage.js');
var Home = require('./Home.js');

var pages = [];
var activePage = null;

class Page {

  constructor() {
    this.data = {};
    this.template = '';

    this.load();
  }


  // TMP, have all pages here and loaded
  static prepare() {
    Page.AddPage(StaticPage.create({
      template: {
        htm: 'templates/page/usage.htm',
        json: 'templates/empty.json'
      },
      url: '/usage'
    }));
    Page.AddPage(StaticPage.create({
      template: {
        htm: 'templates/page/home.htm',
        json: 'templates/empty.json'
      },
      url: '/'
    }));
    Page.AddPage(StaticPage.create({
      template: {
        htm: 'templates/page/form.htm',
        json: 'templates/empty.json'
      },
      url: '/contact'
    }));
    Page.AddPage(StaticPage.create({
      template: {
        htm: 'templates/page/canvas.htm',
        json: 'templates/empty.json'
      },
      url: '/canvas'
    }));
  }

  static open(pageurl) {
    var found = null;
    $.each(pages, function(i, page) {
      if(pageurl === page.getPageUrl()) {
        found = page;
      }
    });
    if(typeof found !== 'undefined') {
      if(activePage) {
        activePage.unload();
      }

      activePage = Page.ActivePage(found);
    }
  }


  static getPageUrl() {
    return '';
  }

  static AddPage(page) {
    pages.push(page);
  }

  static ActivePage(page) {
    page.load();
    return activePage = page;
  }

  static GetPage() {
    return activePage;
  }

}

module.exports = Page;
