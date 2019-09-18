const frontOrBackDetector = require('./front-or-back-detector');
const frontOrBackInlet = require('./front-or-back-inlet');
const valveBox = require('./valve-box');
const auxillaryDetector = require('./auxillary-detector');
const other = require('./other');

module.exports = [
  frontOrBackDetector,
  frontOrBackInlet,
  valveBox,
  auxillaryDetector,
  other,
];
