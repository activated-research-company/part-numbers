function partNumbers(m, button, parts, contact) {
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
    view: () => m('.relative.pl3.pt2.h-100', [
      m('.f4.b.mb3', 'These are the part numbers for your purchase order. Please review your selections to ensure your PO is correct.'),
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
      m('.f6.bottom-1.absolute', m(contact)),
    ]),
  };
}

module.exports = partNumbers;
