const m = require('mithril');

function home() {
  return {
    view: () => m('div', 'Welcome to the ARC Mithril Skeleton!'),
  };
}

module.exports = home;
