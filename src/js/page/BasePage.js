var $ = require('jquery-browserify');

const PAGE_ELEMENT = '*[data-page-content]';

function loadData(urls) {
  var dfd = jQuery.Deferred();

  $.ajax(urls.htm, {
    complete: function(xhr) {
      var html = xhr.responseText;

      $.ajax(urls.json, {
        complete: function(xhr) {
          var data = JSON.parse(xhr.responseText);
          dfd.resolve(html, data);
        }
      });
    }
  });

  return dfd;
}

class BasePage {
  constructor() {
    this.data = {};
    this.template = '';
  }

  render() {
    // set active nav

    $(PAGE_ELEMENT).html(Mustache.render(this.html, this.data));
  }

  unload() {
    console.log('unload page');
  }

  /**
   * load data, theme and prepare for the rendered page
   */
  load() {
    var self = this;
    loadData(this.getUrl()).then(function(html, data) {
      self.html = html;
      self.data = data;

      self.render();
    });
  }
}

module.exports = BasePage;
