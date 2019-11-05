function contact(m) {
  return {
    view: () => [
      m('.pb2', 'If you have any questions or if the configuration you\'d like to quote isn\'t listed here, please contact Activated Research Company directly for support.'),
      m('.flex.pb1', [
        m('.w-20', 'email:'),
        m('a', { href: 'mailto: contact@activatedresearch.com' }, 'contact@activatedresearch.com'),
      ]),
      m('.flex', [
        m('.w-20', 'phone:'),
        m('a', { href: 'tel:+1612-787-2721' }, '(612) 787-2721'),
      ]),
    ],
  };
}

module.exports = contact;
