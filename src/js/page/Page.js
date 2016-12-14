/**
 *
 */

var $ = require('jquery-browserify');

var pages = [];
var activePage = null;

const PAGE_ELEMENT = '*[data-page-content]';

function loadData(urls) {
  var dfd = jQuery.Deferred();

  $.ajax(urls.htm, {
    complete: function(xhr) {
      var html = xhr.responseText;

      $.ajax(urls.json, {
        complete: function(xhr) {
          console.log(xhr.responseText);
          var data = JSON.parse(xhr.responseText);
          dfd.resolve(html, data);
        }
      });
    }
  });

  return dfd;
}

class Page {

  constructor() {
    this.data = {};
    this.template = '';

    this.load();
    this.render();
  }

  render() {
    // set active nav

    $(PAGE_ELEMENT).html(Mustache.render(html, data));
  }

  unload() {
    console.log('unload page');
  }

  // TMP, have all pages here and loaded
  static prepare() {
    Page.AddPage(require('./Home.js'));

  }

  static open(pageurl) {
    var found = null;
    $.each(pages, function(i, page) {
      if(pageurl === page.getPageUrl()) {
        found = page;
      }
    });
    if(typeof found !== 'undefined') {
      activePage = Page.ActivePage(found);
    }
  }

  /**
   * load data, theme and prepare for the rendered page
   */
  load() {
    var self = this;
    loadData(this.getUrl()).then(function(html, data) {
      this.html = html;
      this.data = data;
    });
  }

  static getPageUrl() {
    return '';
  }

  static AddPage(page) {
    pages.push(page);
  }

  static ActivePage(page) {
    return new page();
  }

  static GetPage() {
    return activePage;
  }

}

module.exports = Page;
