const frontOrBackDetector = require('../question-tree/question/installation-position/answers/front-or-back-detector');
const valveBox = require('../question-tree/question/installation-position/answers/valve-box');
const a6890 = require('../question-tree/question/gc/answers/agilent-6890');
const auxillaryDetector = require('../question-tree/question/installation-position/answers/auxillary-detector');
const packed = require('../question-tree/question/column/answers/packed');

const part = {
  number: 'PA-KIT-P44',
  applies: () => (frontOrBackDetector.isSelected || valveBox.isSelected || (auxillaryDetector.isSelected && !a6890.isSelected)) && packed.isSelected,
};

module.exports = part;
