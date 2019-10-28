const m = require('mithril');
const button = require('../button/button');
const parts = require('../parts/parts');

function partNumbers() {

  function partApplies(part) {
    return part.applies();
  }

  function getPartDiv(part) {
    return m('.pb1', part.number);
  }

  function getPartNumbers() {
    return parts.filter(partApplies).map(getPartDiv);
  }

  return {
    view: () => m('.relative.pl3.pt2.h-100',
      [
        m('.f4.b.mb3', 'These are the part numbers for your purchase order. Please review your selections to ensure your PO is correct.'), // TODO make this a component,
        m('.flex', [
          m('.', { id: 'part-numbers' }, getPartNumbers()),
          m('.ma-auto',
            m(button, {
              onclick: () => {
                const range = document.createRange();
                range.selectNode(document.getElementById('part-numbers'));
                window.getSelection().removeAllRanges();
                window.getSelection().addRange(range);
                document.execCommand('copy');
                window.getSelection().removeAllRanges();
              },
            }, m('.', 'Copy to Clipboard'))),
        ]),
        m('.f6.bottom-1.absolute', [
          m('.pb1', 'Please contact us if you have any questions.'),
          m('.flex.pb1', [
            m('.w-20', 'email:'),
            m('a', { href: 'mailto: contact@activatedresearch.com' }, 'contact@activatedresearch.com'),
          ]),
          m('.flex', [
            m('.w-20', 'phone:'),
            m('a', { href: 'tel:+1612-787-2721' }, '(612) 787-2721'),
          ]),
        ]),
      ]
    ),
  };
}

module.exports = partNumbers;
