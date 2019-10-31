const frontOrBackDetector = require('../questions/installation-position/answers/front-or-back-detector');
const a6890 = require('../questions/gc/answers/agilent-6890');
const auxillaryDetector = require('../questions/installation-position/answers/auxillary-detector');
const valveBox = require('../questions/installation-position/answers/valve-box');
const packed = require('../questions/column/answers/packed');

const part = {
  number: 'PA-RRT-PT1',
  applies: () => (frontOrBackDetector.isSelected || valveBox.isSelected || (auxillaryDetector.isSelected && !a6890.isSelected)) && packed.isSelected,
};

module.exports = part;
