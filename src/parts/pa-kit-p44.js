const frontOrBackDetector = require('../questions/installation-position/answers/front-or-back-detector');
const valveBox = require('../questions/installation-position/answers/valve-box');
const a6890 = require('../questions/gc/answers/agilent-6890');
const auxillaryDetector = require('../questions/installation-position/answers/auxillary-detector');
const packed = require('../questions/column/answers/packed');

const part = {
  number: 'PA-KIT-P44',
  applies: () => (frontOrBackDetector.isSelected || valveBox.isSelected || (auxillaryDetector.isSelected && !a6890.isSelected)) && packed.isSelected,
};

module.exports = part;
