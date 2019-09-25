const m = require('mithril');
const parts = require('../parts/parts');
const state = require('../state/state');

function partNumbers() {

  function getPartNumbers() {
    return parts.filter(part => part.applies()).map(part => m('div', part.number));
  }

  return {
    view: () => m('div.pl3.pt2.h-100',
      [
        m('div.f4.b.mb3', 'These are the part numbers for your purchase order. Please review your selections to ensure your PO is correct.'), // TODO make this a component,
        m('div', getPartNumbers()),
      ]
    ),
  };
}

module.exports = partNumbers;
