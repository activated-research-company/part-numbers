const m = require('mithril');
const state = require('../state/state');

function partNumbers() {
  return {
    view: () => m('div', 'part numbers go here'),
  };
}

module.exports = partNumbers;
