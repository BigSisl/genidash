/**
 * Contains information about the
 * the design an updates it
 */

var $ = require('jquery-browserify');
var Cookies = require('./Cookies.js');


const ELEMENT_SELECTOR = 'body';

const DESIGNES = {
  'DEFAULT' : 'theme-default',
  'BLUE' : 'theme-blue'
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
  }

  render() {
    $(ELEMENT_SELECTOR).attr("class", DESIGNES[this.design]);
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
