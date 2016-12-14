/**
 * Class which gives access to a clean api for the page navigation
 */

var $ = require('jquery-browserify');
var PageManager = require('./page/Page.js');

const NAV_LI = '*[data-nav]';
const NAV_A  = '*[data-nav] a';
const NAV_ACTIVE = 'active';

class Navigation {

  constructor() {
    var self = this;

    self.elements = $(NAV_LI);
    self.active   = null;

    $(NAV_LI).click(function(e) {
      e.preventDefault();
      self.open($(this).attr('data-nav'));
    });
  }

  open(pageUrl) {

    var found = null;
    this.elements.each(function(i, el) {
      el = $(el);
      if(el.attr('data-nav') == pageUrl) {
        found = el;
      }
    });

    if(found) {
      if(this.active) {
        $(this.active).removeClass(NAV_ACTIVE);
      }
      found.addClass(NAV_ACTIVE);
      this.active = found;
    }

    PageManager.open(pageUrl);
  }

}

module.exports = Navigation;
