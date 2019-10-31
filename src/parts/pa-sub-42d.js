const a6890 = require('../questions/gc/answers/agilent-6890');
const frontOrBackDetector = require('../questions/installation-position/answers/front-or-back-detector');
const valveBox = require('../questions/installation-position/answers/valve-box');
const auxillaryDetector = require('../questions/installation-position/answers/auxillary-detector');
const capillary = require('../questions/column/answers/capillary');

const part = {
  number: 'PA-SUB-42D',
  applies: () => (frontOrBackDetector.isSelected || valveBox.isSelected || (auxillaryDetector.isSelected && !a6890.isSelected)) && capillary.isSelected,
};

module.exports = part;
