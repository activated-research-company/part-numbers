require('../node_modules/tachyons/css/tachyons.min.css');

const m = require('mithril');
const home = require('./home/home');

m.route(document.body, '/', {
  '/': home,
});
