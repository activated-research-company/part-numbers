const m = require('mithril');
const parts = require('../parts/parts');
const state = require('../state/state');

function partNumbers() {

  function getPartNumbers() {
    return parts.filter(part => part.applies()).map(part => m('div', part.number));
  }

  return {
    view: () => m('div.relative.pl3.pt2.h-100',
      [
        m('div.f4.b.mb3', 'These are the part numbers for your purchase order. Please review your selections to ensure your PO is correct.'), // TODO make this a component,
        m('div', getPartNumbers()),
        m('div.f6.bottom-1.absolute', [
          m('div.pb1', 'Please contact us if you have any questions.'),
          m('div.flex.pb1', [
            m('div.w-20', 'email:'),
            m('a', { href: 'mailto: contact@activatedresearch.com' }, 'contact@activatedresearch.com'),
          ]),
          m('div.flex', [
            m('div.w-20', 'phone:'),
            m('a', { href: 'tel:+1612-787-2721' }, '(612) 787-2721'),
          ]),
        ]),
      ]
    ),
  };
}

module.exports = partNumbers;
