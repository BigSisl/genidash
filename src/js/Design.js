/**
 * Contains information about the
 * the design an updates it
 */

var $ = require('jquery-browserify');
var Cookies = require('./Cookies.js');


const ELEMENT_SELECTOR = 'body';
const CSS_LINK = 'link[data-themed-css]';

const DESIGNES = {
  'DEFAULT' : './css/main.css',
  'BLUE' : 'https://maxcdn.bootstrapcdn.com/bootswatch/3.3.7/cerulean/bootstrap.min.css',
  'CYBORG' : 'https://maxcdn.bootstrapcdn.com/bootswatch/3.3.7/cyborg/bootstrap.min.css',
  'DARKLY': 'https://maxcdn.bootstrapcdn.com/bootswatch/3.3.7/darkly/bootstrap.min.css',
  'FLAT': 'https://maxcdn.bootstrapcdn.com/bootswatch/3.3.7/flatly/bootstrap.min.css'
};
const DEFAULT_DESIGN = 'DEFAULT';

const STORAGE_NAME = 'active_theme';

function getDesign() {
  var load = Cookies.get(STORAGE_NAME);
  return load ? load : DEFAULT_DESIGN;
}

function save(design) {
  Cookies.set(STORAGE_NAME, design, 10);
}

class Designer {

  constructor(design) {
    this.design = design ? design : getDesign();

    save(this.design);
    this.render();

    var self = this;
    $('*[data-change-theme]').click(function() {
       self.swap($(this).attr('data-change-theme'));
    });
  }

  render() {
    console.log(DESIGNES[this.design]);
    $(CSS_LINK).attr('href', DESIGNES[this.design]);
  }

  swap(design) {
    this.design = DESIGNES[design] ? design : DEFAULT_DESIGN;

    save(this.design);
    this.render();
  }

  get() {
    return DESIGNES[this.design] ? DESIGNES[this.design] : DESIGNES[DEFAULT_DESIGN];
  }

  getAll() {
    return DESIGNES;
  }

}

module.exports = Designer;
